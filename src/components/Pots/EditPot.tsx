"use client";

import Image from "next/image";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
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
  SelectItemColor,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { COLORS, COLOR_MAP_REVERSE } from "@/lib/constants/categories";
import { editPotAction } from "@/actions/pots";
import type { Pot } from "@/types";

const MAX_NAME_LENGTH = 30;

type EditPotProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pot: Pot;
};

export function EditPot({ open, onOpenChange, pot }: EditPotProps) {
  const [name, setName] = useState(pot.name);
  const [target, setTarget] = useState(String(pot.target));
  const [theme, setTheme] = useState(COLOR_MAP_REVERSE[pot.theme] ?? "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleTargetChange(e: React.ChangeEvent<HTMLInputElement>) {
    let raw = e.target.value.replace(/[^0-9.]/g, "");
    const parts = raw.split(".");
    if (parts.length > 2) raw = parts[0] + "." + parts.slice(1).join("");
    setTarget(raw);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !target || !theme) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setError(null);
    const result = await editPotAction({
      id: pot.id,
      name,
      target: parseFloat(target),
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
            <DialogTitle>Edit Pot</DialogTitle>
            <DialogDescription>
              If your saving targets change, feel free to update your pots.
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
                htmlFor="pot-name"
              >
                Pot Name
              </Label>
              <Input
                id="pot-name"
                type="text"
                placeholder="e.g. Rainy Days"
                value={name}
                onChange={(e) =>
                  setName(e.target.value.slice(0, MAX_NAME_LENGTH))
                }
                className="pl-6"
              />
              <FieldDescription className="text-end text-xs">
                {MAX_NAME_LENGTH - name.length} characters left
              </FieldDescription>
            </Field>

            <Field className="relative gap-1">
              <Label
                className="text-muted-foreground text-xs font-bold"
                htmlFor="target"
              >
                Target
              </Label>
              <div className="relative w-full">
                <Input
                  id="target"
                  type="text"
                  inputMode="decimal"
                  placeholder="e.g. 2000"
                  value={target}
                  onChange={handleTargetChange}
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
