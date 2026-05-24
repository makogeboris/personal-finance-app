"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import PasswordInput from "../auth/PasswordInput";
import { updatePasswordAction } from "@/actions/profile";
import { LoaderCircle } from "lucide-react";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordSchema>;

export default function Password({ isDemo }: { isDemo: boolean }) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  async function onSubmit(data: PasswordFormValues) {
    setServerError(null);
    const result = await updatePasswordAction({
      currentPassword: data.currentPassword,
      password: data.password,
    });
    if (result?.error) {
      setServerError(result.error);
    } else {
      setServerSuccess(true);
      reset();
    }
  }

  return (
    <div className="bg-background rounded-12 flex h-fit flex-col gap-5 p-6 sm:p-8">
      <div>
        <h2 className="text-primary text-xl font-bold">Password</h2>
        <p className="text-muted-foreground mt-0.5 text-sm">
          Choose a strong password.
        </p>
      </div>

      {serverError && (
        <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
          {serverError}
        </p>
      )}

      {serverSuccess ? (
        <p className="bg-chart-1/10 text-chart-1 rounded-lg px-4 py-3 text-sm font-medium">
          Password updated successfully.
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
                disabled={isDemo}
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
                disabled={isDemo}
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
                disabled={isDemo}
                aria-invalid={!!errors.confirmPassword}
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <FieldError>{errors.confirmPassword.message}</FieldError>
              )}
            </Field>
          </div>

          <div className="flex justify-end">
            <Button size="lg" type="submit" disabled={isSubmitting || isDemo}>
              <span className="flex items-center gap-2">
                {isSubmitting && (
                  <LoaderCircle className="size-4 animate-spin" />
                )}
                <span>{isSubmitting ? "Updating" : "Update Password"}</span>
              </span>
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
