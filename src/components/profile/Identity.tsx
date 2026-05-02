"use client";

import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, FieldError, FieldLabel } from "../ui/field";
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

export function Identity() {
  return (
    <div className="bg-background rounded-12 flex h-fit flex-col items-center gap-4 p-6 text-center sm:flex-row sm:gap-5 sm:p-8 sm:text-left lg:flex-col lg:items-center lg:text-center xl:flex-row xl:items-start xl:text-left">
      <Avatar name="Lenny Smith" />
      <div className="flex flex-col gap-1">
        <p className="text-foreground text-xl leading-tight font-bold tracking-tight">
          Lenny Smith
        </p>
        <p className="text-muted-foreground text-sm">lenny@example.com</p>
        <div className="mt-2">
          <span className="bg-chart-1/15 text-chart-1 rounded-full px-2.5 py-1 text-xs font-bold tracking-wider uppercase">
            Active
          </span>
        </div>
        <p className="text-muted-foreground mt-1 text-xs">
          Member since August 2024
        </p>
      </div>
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8"
    >
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
        <Button type="submit" disabled={isSubmitting}>
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8"
    >
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
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Email"}
        </Button>
      </div>
    </form>
  );
}

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div className="bg-primary text-primary-foreground flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-xl font-extrabold tracking-tight sm:h-20 sm:w-20 sm:text-2xl">
      {initials}
    </div>
  );
}
