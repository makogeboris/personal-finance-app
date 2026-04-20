"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Illustration from "./Illustration";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    // Call API to send the reset email
    console.log(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-foreground text-3xl font-bold">
                  Forgot your password?
                </h1>
                <p className="text-muted-foreground text-base text-balance">
                  Enter your email and we&apos;ll send you a link to reset your
                  password
                </p>
              </div>

              {isSubmitSuccessful ? (
                <div className="bg-muted text-muted-foreground rounded-md p-4 text-center text-sm">
                  If an account exists for that email, a reset link has been
                  sent. Check your inbox.
                </div>
              ) : (
                <div className="space-y-4">
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
                </div>
              )}

              {!isSubmitSuccessful && (
                <Field>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending link..." : "Send Reset Link"}
                  </Button>
                </Field>
              )}

              <FieldDescription className="flex items-center gap-2 self-center text-center">
                Remember your password?{" "}
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
