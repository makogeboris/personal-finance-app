"use client";

import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { LoaderCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CATEGORIES } from "@/lib/constants/categories";
import { addTransactionAction } from "@/actions/transactions";

export default function AddNewTransaction() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState<Date>(new Date());
  const [recurring, setRecurring] = useState(false);
  const [type, setType] = useState<"income" | "expense">("expense");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value.replace(/[^0-9.]/g, "");
    const parts = raw.split(".");
    if (parts.length > 2) raw = parts[0] + "." + parts.slice(1).join("");
    setAmount(raw);
  }

  function resetForm() {
    setName("");
    setAmount("");
    setCategory("");
    setDate(new Date());
    setRecurring(false);
    setType("expense");
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !amount || !category || !date) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError(null);
    const result = await addTransactionAction({
      name,
      amount: parseFloat(amount),
      category,
      date: date.toISOString(),
      recurring,
      type,
    });
    setLoading(false);
    if (result?.error) {
      setError(result.error);
    } else {
      setOpen(false);
      resetForm();
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) resetForm();
      }}
    >
      <DialogTrigger asChild>
        <Button>+ Add Transaction</Button>
      </DialogTrigger>

      <DialogContent>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Add New Transaction</DialogTitle>
            <DialogDescription>
              Record an income or expense transaction to keep your finances up
              to date.
            </DialogDescription>
          </DialogHeader>

          {error && (
            <p className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 text-sm font-medium">
              {error}
            </p>
          )}

          <FieldGroup className="gap-4">
            <Field className="gap-2">
              <Label className="text-muted-foreground text-xs font-bold">
                Transaction Type
              </Label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setType("expense")}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-bold transition-colors",
                    type === "expense"
                      ? "border-destructive bg-destructive/10 text-destructive"
                      : "border-accent text-muted-foreground hover:border-foreground",
                  )}
                >
                  <span className="text-base">−</span> Expense
                </button>

                <button
                  type="button"
                  onClick={() => setType("income")}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-bold transition-colors",
                    type === "income"
                      ? "border-chart-1 bg-chart-1/10 text-chart-1"
                      : "border-accent text-muted-foreground hover:border-foreground",
                  )}
                >
                  <span className="text-base">+</span> Income
                </button>
              </div>
            </Field>

            <Field className="gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="tx-name"
              >
                Recipient / Sender Name
              </Label>
              <Input
                id="tx-name"
                type="text"
                placeholder="e.g. Savory Bites Bistro"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="tx-amount"
              >
                Amount
              </Label>
              <div className="relative w-full">
                <Input
                  id="tx-amount"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 50.00"
                  value={amount}
                  onChange={handleAmountChange}
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
                htmlFor="tx-category"
              >
                Category
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

            <Field className="gap-1">
              <Label className="text-muted-foreground text-xs font-bold">
                Transaction Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      "border-accent flex h-12 w-full items-center justify-between rounded-lg border px-5 text-sm transition-colors",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <span
                      className={
                        date ? "text-foreground" : "text-muted-foreground"
                      }
                    >
                      {date ? format(date, "dd MMM yyyy") : "Pick a date"}
                    </span>
                    <CalendarIcon className="text-muted-foreground size-4" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => d && setDate(d)}
                    disabled={(d) => d > new Date()}
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <Field className="gap-1">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="recurring"
                  checked={recurring}
                  onCheckedChange={(checked) => setRecurring(checked === true)}
                />
                <Label
                  htmlFor="recurring"
                  className="text-foreground cursor-pointer text-sm font-medium"
                >
                  This is a recurring transaction
                </Label>
              </div>
              <p className="text-muted-foreground text-xs">
                Recurring transactions repeat monthly on the same date.
              </p>
            </Field>
          </FieldGroup>

          <DialogFooter className="w-full">
            <Button className="w-full" type="submit" disabled={loading}>
              <span className="flex items-center gap-2">
                {loading && <LoaderCircle className="size-4 animate-spin" />}
                <span>{loading ? "Adding" : "Add Transaction"}</span>
              </span>
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
