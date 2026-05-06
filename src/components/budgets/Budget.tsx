"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FieldSeparator } from "../ui/field";
import { ActionMenu } from "../shared/ActionMenu";
import { EditBudget } from "./EditBudget";
import { DeleteBudget } from "./DeleteBudget";
import { ProgressBudget } from "../ui/progress";

export default function Budget() {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const progress = (22 / 60) * 100;

  return (
    <div className="bg-background rounded-12 flex w-full flex-col gap-5 px-5 py-6 sm:p-8">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-chart-1 size-4 rounded-full"></div>
          <h2 className="text-primary text-xl font-bold">Entertainment</h2>
        </div>

        <ActionMenu
          items={[
            {
              label: "Edit Budget",
              onClick: () => setEditOpen(true),
            },
            {
              label: "Delete Budget",
              variant: "destructive",
              onClick: () => setDeleteOpen(true),
            },
          ]}
        />

        <EditBudget open={editOpen} onOpenChange={setEditOpen} />
        <DeleteBudget open={deleteOpen} onOpenChange={setDeleteOpen} />
      </div>

      <div className="flex w-full flex-col gap-4">
        <p className="text-muted-foreground text-sm">Maximum of $50.00</p>

        <ProgressBudget value={progress} />

        <div className="flex w-full items-center justify-between">
          <div className="border-chart-1 flex w-full items-center gap-4 border-l-4 pl-4">
            <div className="flex flex-col items-start gap-1">
              <p className="text-muted-foreground text-xs">Spent</p>
              <span className="text-primary text-sm font-bold">$15.00</span>
            </div>
          </div>

          <div className="border-secondary flex w-full items-center gap-4 border-l-4 pl-4">
            <div className="flex flex-col items-start gap-1">
              <p className="text-muted-foreground text-xs">Remaining</p>
              <span className="text-primary text-sm font-bold">$35.00</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary rounded-12 sm-p-5 flex flex-col gap-5 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-primary text-base font-bold">Latest Spending</h3>
          <Link
            className="group hover:text-primary text-muted-foreground focus-visible:outline-primary flex items-center gap-3 rounded-xs text-sm capitalize transition-colors focus-visible:outline-1"
            href="/transactions"
          >
            See details
            <svg
              width="5"
              height="9"
              viewBox="0 0 5 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.640312 0.109986L4.39031 3.85999C4.42518 3.89481 4.45284 3.93617 4.47171 3.9817C4.49058 4.02722 4.50029 4.07602 4.50029 4.1253C4.50029 4.17458 4.49058 4.22338 4.47171 4.2689C4.45284 4.31443 4.42518 4.35578 4.39031 4.39061L0.640313 8.14061C0.587867 8.19312 0.521022 8.22888 0.44824 8.24337C0.375458 8.25787 0.300012 8.25044 0.231454 8.22203C0.162895 8.19363 0.104307 8.14552 0.063105 8.08379C0.0219034 8.02207 -5.82985e-05 7.94951 9.97705e-08 7.8753L-2.28065e-07 0.375299C-5.86328e-05 0.301088 0.0219031 0.228528 0.0631046 0.166805C0.104306 0.105083 0.162895 0.0569735 0.231453 0.0285664C0.300012 0.000158297 0.375458 -0.00726797 0.44824 0.00722597C0.521022 0.0217199 0.587867 0.0574817 0.640312 0.109986Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              className="hidden rounded-full sm:block"
              width={32}
              height={32}
              alt=""
              src="/avatars/buzz-marketing-group.jpg"
            />
            <p className="text-primary text-xs font-bold">
              Savory Bites Bistro
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-primary text-xs font-bold">-$55.50</span>
            <span className="text-muted-foreground text-xs">19 Aug 2024</span>
          </div>
        </div>

        <FieldSeparator className="-my-5" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              className="hidden rounded-full sm:block"
              width={32}
              height={32}
              alt=""
              src="/avatars/buzz-marketing-group.jpg"
            />
            <p className="text-primary text-xs font-bold">
              Savory Bites Bistro
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-primary text-xs font-bold">-$55.50</span>
            <span className="text-muted-foreground text-xs">19 Aug 2024</span>
          </div>
        </div>

        <FieldSeparator className="-my-5" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              className="hidden rounded-full sm:block"
              width={32}
              height={32}
              alt=""
              src="/avatars/buzz-marketing-group.jpg"
            />
            <p className="text-primary text-xs font-bold">
              Savory Bites Bistro
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-primary text-xs font-bold">-$55.50</span>
            <span className="text-muted-foreground text-xs">19 Aug 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}
