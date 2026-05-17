"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemColor,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  CATEGORIES,
  COLORS,
  COLOR_MAP_REVERSE,
} from "@/lib/constants/categories";
import { editBudgetAction } from "@/actions/budgets";
import type { BudgetWithData } from "@/types";
import { LoaderCircle } from "lucide-react";

type EditBudgetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  budget: BudgetWithData;
};

export function EditBudget({ open, onOpenChange, budget }: EditBudgetProps) {
  const [category, setCategory] = useState<string>(budget.category);
  const [theme, setTheme] = useState(COLOR_MAP_REVERSE[budget.theme] ?? "");
  const [maximum, setMaximum] = useState(String(budget.maximum));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value.replace(/[^0-9.]/g, "");
    const parts = raw.split(".");
    if (parts.length > 2) raw = parts[0] + "." + parts.slice(1).join("");
    setMaximum(raw);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!category || !maximum || !theme) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError(null);
    const result = await editBudgetAction({
      id: budget.id,
      category,
      maximum: parseFloat(maximum),
      theme,
    });
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
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Edit Budget</DialogTitle>
            <DialogDescription>
              As your budgets change, feel free to update your spending limits.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
              {error}
            </p>
          )}

          <FieldGroup className="gap-4">
            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="budget"
              >
                Budget Category
              </Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="border-accent w-full border px-5 py-5.5">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={8}
                >
                  <SelectGroup className="p-2">
                    {CATEGORIES.map((cat, index) => (
                      <div key={cat.value}>
                        <SelectItem value={cat.value}>{cat.label}</SelectItem>
                        {index !== CATEGORIES.length - 1 && (
                          <FieldSeparator className="-my-2" />
                        )}
                      </div>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="max-spending"
              >
                Maximum Spending
              </Label>
              <div className="relative w-full">
                <Input
                  value={maximum}
                  onChange={handleAmountChange}
                  id="max-spending"
                  type="text"
                  inputMode="decimal"
                  placeholder="50.00"
                  className="pl-10.5"
                />
                <Image
                  className="pointer-events-none absolute top-1/2 left-5 size-4 -translate-y-1/2"
                  width={16}
                  height={16}
                  alt=""
                  src="/icons/icon-dollar.svg"
                />
              </div>
            </Field>

            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="theme"
              >
                Theme
              </Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="border-accent w-full border px-5 py-5.5">
                  <SelectValue placeholder="Select a color" />
                </SelectTrigger>
                <SelectContent
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={8}
                >
                  <SelectGroup className="p-2">
                    {COLORS.map((color) => (
                      <SelectItemColor
                        key={color.value}
                        value={color.value}
                        isUsed={false}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`${color.class} size-4 rounded-full`}
                          />
                          <span>{color.name}</span>
                        </div>
                      </SelectItemColor>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <DialogFooter className="w-full">
            <Button className="w-full" type="submit" disabled={loading}>
              <span className="flex items-center gap-2">
                {loading && <LoaderCircle className="size-4 animate-spin" />}
                <span>{loading ? "Saving" : "Save Changes"}</span>
              </span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
