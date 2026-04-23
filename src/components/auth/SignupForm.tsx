"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Illustration from "./Illustration";
import Link from "next/link";
import PasswordInput from "./PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signupSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
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

type SignupFormValues = z.infer<typeof signupSchema>;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: SignupFormValues) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 lg:grid-cols-2">
          <form className="p-6 lg:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-foreground xs:text-3xl text-2xl font-bold">
                  Create your account
                </h1>
                <p className="text-muted-foreground xs:text-base text-sm text-balance">
                  Enter your details below to create your account
                </p>
              </div>

              <div className="space-y-4">
                <Field className="gap-1">
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Lenny Smith"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <FieldError>{errors.name.message}</FieldError>
                  )}
                </Field>

                <Field className="gap-1">
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="lennysmith@example.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <FieldError>{errors.email.message}</FieldError>
                  )}
                </Field>

                <Field className="gap-1">
                  <Field className="gap-1">
                    <FieldLabel htmlFor="password">Create Password</FieldLabel>
                    <PasswordInput
                      id="password"
                      aria-invalid={!!errors.password}
                      {...register("password")}
                    />
                  </Field>

                  {errors.password ? (
                    <FieldError>{errors.password.message}</FieldError>
                  ) : (
                    <FieldDescription className="text-end text-xs">
                      Passwords must be at least 8 characters
                    </FieldDescription>
                  )}
                </Field>
              </div>

              <Field>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
              </Field>

              <FieldDescription className="flex items-center gap-2 self-center text-center">
                Already have an account?{" "}
                <Link className="font-bold" href="/login">
                  Login
                </Link>
              </FieldDescription>
            </FieldGroup>
          </form>

          <Illustration />
        </CardContent>
      </Card>
    </div>
  );
}
