"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type DeleteBudgetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function DeleteBudget({ open, onOpenChange }: DeleteBudgetProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete ‘Entertainment’?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this budget? This action cannot be
            reversed, and all the data inside it will be removed forever.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col gap-2">
          <Button variant="destructive">Yes, Confirm Deletion</Button>

          <DialogClose asChild>
            <Button variant="outline">No, Go Back</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
