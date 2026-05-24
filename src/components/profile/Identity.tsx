"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, FieldError, FieldLabel, FieldSeparator } from "../ui/field";
import { Input } from "../ui/input";
import { updateNameAction, updateEmailAction } from "@/actions/profile";
import type { ProfileData } from "@/lib/data/getProfile";
import { LoaderCircle } from "lucide-react";

const nameSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
});

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type NameValues = z.infer<typeof nameSchema>;
type EmailValues = z.infer<typeof emailSchema>;

export default function Identity({ profile }: { profile: ProfileData }) {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <Name profile={profile} />
      <FieldSeparator />
      <Email profile={profile} />
    </div>
  );
}

function Name({ profile }: { profile: ProfileData }) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NameValues>({
    resolver: zodResolver(nameSchema),
    defaultValues: { name: profile.name },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  async function onSubmit(data: NameValues) {
    setServerError(null);
    setServerSuccess(false);
    const result = await updateNameAction(data);
    if (result?.error) {
      setServerError(result.error);
    } else {
      setServerSuccess(true);
      setTimeout(() => setServerSuccess(false), 3000);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div>
        <h2 className="text-primary text-xl font-bold">Full Name</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">
          Update your display name.
        </p>
      </div>

      {serverError && (
        <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
          {serverError}
        </p>
      )}
      {serverSuccess && (
        <p className="bg-chart-1/10 text-chart-1 rounded-lg px-4 py-3 text-sm font-medium">
          Name updated successfully.
        </p>
      )}

      <Field className="gap-1">
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          type="text"
          placeholder="Lenny Smith"
          disabled={profile.isDemo}
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>

      <div className="flex justify-end">
        <Button
          size="lg"
          type="submit"
          disabled={isSubmitting || profile.isDemo}
        >
          <span className="flex items-center gap-2">
            {isSubmitting && <LoaderCircle className="size-4 animate-spin" />}
            <span>{isSubmitting ? "Saving" : "Save Name"}</span>
          </span>
        </Button>
      </div>
    </form>
  );
}

function Email({ profile }: { profile: ProfileData }) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email: profile.email },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  async function onSubmit(data: EmailValues) {
    setServerError(null);
    setServerSuccess(null);
    const result = await updateEmailAction(data);
    if (result?.error) {
      setServerError(result.error);
    } else {
      setServerSuccess(result.message ?? "Verification email sent.");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="text-primary text-xl font-bold">Email Address</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">
          A verification email will be sent on change.
        </p>
      </div>

      {serverError && (
        <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
          {serverError}
        </p>
      )}
      {serverSuccess && (
        <p className="bg-chart-1/10 text-chart-1 rounded-lg px-4 py-3 text-sm font-medium">
          {serverSuccess}
        </p>
      )}

      <Field className="gap-1">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="lennysmith@example.com"
          disabled={profile.isDemo}
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>

      <div className="flex justify-end">
        <Button
          size="lg"
          type="submit"
          disabled={isSubmitting || profile.isDemo}
        >
          <span className="flex items-center gap-2">
            {isSubmitting && <LoaderCircle className="size-4 animate-spin" />}
            <span>{isSubmitting ? "Saving" : "Save Email"}</span>
          </span>
        </Button>
      </div>
    </form>
  );
}
