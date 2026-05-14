"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import PasswordInput from "../auth/PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
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

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function Password() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: PasswordFormValues) => {
    // Call API with current and new password
    console.log({
      currentPassword: data.currentPassword,
      password: data.password,
    });
    reset();
  };

  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-primary text-xl font-bold">Password</h2>
          <p className="text-muted-foreground mt-0.5 text-sm">
            Choose a strong password.
          </p>
        </div>
      </div>

      {isSubmitSuccessful ? (
        <p className="text-muted-foreground text-sm">
          Your password has been updated successfully.
        </p>
      ) : (
        <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field className="flex flex-col gap-1 sm:col-span-2">
              <FieldLabel htmlFor="currentPassword">
                Current password
              </FieldLabel>
              <PasswordInput
                id="currentPassword"
                aria-invalid={!!errors.currentPassword}
                {...register("currentPassword")}
              />
              {errors.currentPassword && (
                <FieldError>{errors.currentPassword.message}</FieldError>
              )}
            </Field>

            <Field className="flex flex-col gap-1">
              <FieldLabel htmlFor="password">New password</FieldLabel>
              <PasswordInput
                id="password"
                aria-invalid={!!errors.password}
                {...register("password")}
              />
              {errors.password ? (
                <FieldError>{errors.password.message}</FieldError>
              ) : (
                <FieldDescription className="text-xs">
                  At least 8 characters, one uppercase, one number
                </FieldDescription>
              )}
            </Field>

            <Field className="flex flex-col gap-1">
              <FieldLabel htmlFor="confirmPassword">
                Confirm password
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

          <div className="flex justify-end">
            <Button size="lg" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Updating..." : "Update Password"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
