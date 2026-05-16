"use client";

import { useState } from "react";
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
import PasswordInput from "./PasswordInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginAction, demoLoginAction } from "@/actions/auth";
import { LoaderCircle } from "lucide-react";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [serverError, setServerError] = useState<string | null>(null);
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoError, setDemoError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: LoginFormValues) => {
    setServerError(null);
    const result = await loginAction(data);
    if (result?.error) {
      setServerError(result.error);
    }
  };

  const handleDemo = async () => {
    setDemoLoading(true);
    setDemoError(null);
    const result = await demoLoginAction();
    if (result?.error) {
      setDemoError(result.error);
      setDemoLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 lg:grid-cols-2">
          <form className="p-6 lg:p-8" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-foreground xs:text-3xl text-2xl font-bold">
                  Welcome back
                </h1>
                <p className="text-muted-foreground xs:text-base text-sm text-balance">
                  Login to your account
                </p>
              </div>

              {serverError && (
                <div className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
                  {serverError}
                </div>
              )}

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

                <Field className="gap-1">
                  <div className="flex items-center justify-between">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Link
                      href="/forgot-password"
                      className="text-muted-foreground hover:text-foreground focus-visible:outline-primary/90 rounded-xs text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-1"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <PasswordInput
                    id="password"
                    aria-invalid={!!errors.password}
                    {...register("password")}
                  />
                  {errors.password && (
                    <FieldError>{errors.password.message}</FieldError>
                  )}
                </Field>
              </div>

              <Field>
                <Button type="submit" disabled={isSubmitting || demoLoading}>
                  <span className="flex items-center gap-2">
                    {isSubmitting && (
                      <LoaderCircle className="size-4 animate-spin" />
                    )}
                    <span>{isSubmitting ? "Logging in" : "Login"}</span>
                  </span>
                </Button>
              </Field>

              <FieldDescription className="flex items-center gap-2 self-center text-center">
                Don&apos;t have an account?{" "}
                <Link className="font-bold" href="/signup">
                  Sign up
                </Link>
              </FieldDescription>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="border-border w-full border-t" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card text-muted-foreground px-3 text-sm">
                    or
                  </span>
                </div>
              </div>

              {/* Demo login */}
              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={handleDemo}
                  disabled={demoLoading || isSubmitting}
                  className="border-accent focus-visible:outline-primary/90 hover:border-chart-1 hover:text-chart-1 w-full transform cursor-pointer rounded-lg border px-8 py-3 text-sm font-semibold transition focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="flex items-center justify-center gap-2">
                    {demoLoading && (
                      <LoaderCircle className="size-4 animate-spin" />
                    )}
                    <span>{demoLoading ? "Loading demo" : "Try the demo"}</span>
                  </span>
                </button>
                {demoError && (
                  <p className="text-destructive text-xs">{demoError}</p>
                )}
              </div>
            </FieldGroup>
          </form>

          <Illustration />
        </CardContent>
      </Card>
    </div>
  );
}
