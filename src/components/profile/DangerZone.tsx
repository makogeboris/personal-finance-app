"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";
import { signOutAction } from "@/actions/auth";
import { deleteAccountAction } from "@/actions/profile";

export default function DangerZone({ isDemo }: { isDemo: boolean }) {
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    setDeleteError(null);
    const result = await deleteAccountAction();
    if (result?.error) {
      setDeleteError(result.error);
      setDeleting(false);
    }
  }

  return (
    <div className="border-destructive/50 rounded-12 h-fit border p-6 sm:p-8">
      <div className="mb-5 flex flex-col gap-1">
        <h2 className="text-primary text-xl font-bold">Danger Zone</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          These actions are permanent and cannot be undone.
        </p>
      </div>

      {deleteError && (
        <p className="bg-destructive/10 text-destructive mb-4 rounded-lg px-4 py-3 text-sm font-medium">
          {deleteError}
        </p>
      )}

      <div className="flex flex-col gap-3">
        {/* Sign out */}
        <div className="border-muted-foreground/50 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-foreground text-sm font-bold">Sign out</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Sign out of this device.
            </p>
          </div>

          <form action={signOutAction}>
            <Button variant="outline" size="lg" type="submit">
              Sign out
            </Button>
          </form>
        </div>

        {/* Delete account */}
        <div className="bg-destructive/5 border-destructive/50 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-destructive text-sm font-bold">Delete account</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Permanently delete all your data.
            </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="w-fit"
                variant="destructive"
                size="lg"
                disabled={isDemo}
              >
                Delete
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete your account, all transactions,
                  budgets, pots, and recurring bills. This cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel variant="outline" size="lg">
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                  variant="destructive"
                  size="lg"
                  onClick={handleDelete}
                  disabled={deleting}
                >
                  <span className="flex items-center gap-2">
                    {deleting && (
                      <LoaderCircle className="size-4 animate-spin" />
                    )}
                    <span>
                      {deleting ? "Deleting" : "Yes, delete my account"}
                    </span>
                  </span>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
