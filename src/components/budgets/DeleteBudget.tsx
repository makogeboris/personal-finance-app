"use client";

import { useState } from "react";
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
import { deleteBudgetAction } from "@/actions/budgets";
import type { BudgetWithData } from "@/types";
import { LoaderCircle } from "lucide-react";

type DeleteBudgetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  budget: BudgetWithData;
};

export function DeleteBudget({
  open,
  onOpenChange,
  budget,
}: DeleteBudgetProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    setLoading(true);
    setError(null);
    const result = await deleteBudgetAction(budget.id);
    setLoading(false);
    if (result?.error) {
      setError(result.error);
    } else {
      onOpenChange(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete &apos;{budget.category}&apos;?</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this budget? This action cannot be
            reversed, and all the data inside it will be removed forever.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
            {error}
          </p>
        )}

        <DialogFooter className="flex flex-col gap-2">
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={loading}
          >
            <span className="flex items-center gap-2">
              {loading && <LoaderCircle className="size-4 animate-spin" />}
              <span>{loading ? "Deleting" : "Yes, Confirm Deletion"}</span>
            </span>
          </Button>
          <DialogClose asChild>
            <Button variant="outline">No, Go Back</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
