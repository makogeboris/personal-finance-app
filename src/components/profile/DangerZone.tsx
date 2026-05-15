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

export default function DangerZone() {
  return (
    <div className="border-destructive/50 rounded-12 h-fit border p-6 sm:p-8">
      <div className="mb-5 flex flex-col gap-1">
        <h2 className="text-primary text-xl font-bold">Danger Zone</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          These actions are permanent and cannot be undone.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="border-muted-foreground/50 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-foreground text-sm font-bold">Sign out</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Sign out of this device.
            </p>
          </div>
          <Button variant="outline" size="lg">
            Sign out
          </Button>
        </div>

        <div className="bg-destructive/5 border-destructive/50 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-destructive text-sm font-bold">Delete account</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Permanently delete all your data.
            </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" size="lg">
                Delete
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel variant="outline" size="lg">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction variant="destructive" size="lg">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}
