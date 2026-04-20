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
import Illustration from "./Illustration";
import Link from "next/link";
import PasswordInput from "./PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSearchParams } from "next/navigation";

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export function ResetPasswordForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    // Call API with the token and new password
    console.log({ token, password: data.password });
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-foreground text-3xl font-bold">
                  Reset your password
                </h1>
                <p className="text-muted-foreground text-base text-balance">
                  Enter a new password for your account
                </p>
              </div>

              {isSubmitSuccessful ? (
                <div className="bg-muted text-muted-foreground rounded-md p-4 text-center text-sm">
                  Your password has been reset.{" "}
                  <Link className="text-foreground font-bold" href="/login">
                    Login with your new password
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <Field className="gap-1">
                    <Field className="gap-1">
                      <FieldLabel htmlFor="password">New Password</FieldLabel>
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

                  <Field className="gap-1">
                    <FieldLabel htmlFor="confirmPassword">
                      Confirm Password
                    </FieldLabel>
                    <PasswordInput
                      id="confirmPassword"
                      aria-invalid={!!errors.confirmPassword}
                      {...register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                      <FieldError>{errors.confirmPassword.message}</FieldError>
                    )}
                  </Field>
                </div>
              )}

              {!isSubmitSuccessful && (
                <Field>
                  <Button type="submit" disabled={isSubmitting || !token}>
                    {isSubmitting ? "Resetting password..." : "Reset Password"}
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
