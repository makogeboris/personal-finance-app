"use client";

import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, FieldError, FieldLabel, FieldSeparator } from "../ui/field";
import { Input } from "../ui/input";

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
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

type nameValues = z.infer<typeof nameSchema>;
type emailValues = z.infer<typeof emailSchema>;

export default function Identity() {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <Name />
      <FieldSeparator />
      <Email />
    </div>
  );
}

export function Name({ className, ...props }: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<nameValues>({
    resolver: zodResolver(nameSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: nameValues) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-primary text-xl font-bold">Full Name</h2>
          <p className="text-muted-foreground mt-0.5 text-sm">
            Update your display name.
          </p>
        </div>
      </div>

      <Field className="gap-1">
        <FieldLabel htmlFor="name">Name</FieldLabel>
        <Input
          id="name"
          type="text"
          placeholder="Lenny Smith"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && <FieldError>{errors.name.message}</FieldError>}
      </Field>

      <div className="flex justify-end">
        <Button size="lg" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Name"}
        </Button>
      </div>
    </form>
  );
}

export function Email({ className, ...props }: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<emailValues>({
    resolver: zodResolver(emailSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: emailValues) => {
    // Handle form submission
    console.log(data);
  };
  return (
    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-primary text-xl font-bold">Email Address</h2>
          <p className="text-muted-foreground mt-0.5 text-sm">
            A verification email will be sent on change.
          </p>
        </div>
      </div>

      <Field className="gap-1">
        <FieldLabel htmlFor="email">Email</FieldLabel>
        <Input
          id="email"
          type="email"
          placeholder="lennysmith@example.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && <FieldError>{errors.email.message}</FieldError>}
      </Field>

      <div className="flex justify-end">
        <Button size="lg" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Email"}
        </Button>
      </div>
    </form>
  );
}
