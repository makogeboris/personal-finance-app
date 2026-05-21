"use client";

import { useState } from "react";
import { ActionMenu } from "../shared/ActionMenu";
import { EditPot } from "./EditPot";
import { DeletePot } from "./DeletePot";
import { AddToPot } from "./AddToPot";
import { WithdrawPot } from "./WithdrawPot";
import { ProgressPot } from "../ui/progress";
import type { Pot as PotType } from "@/types";

export default function Pot({ pot }: { pot: PotType }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const progress = pot.target > 0 ? (pot.saved / pot.target) * 100 : 0;

  return (
    <div className="bg-background rounded-12 flex w-full flex-col gap-8 px-5 pt-6 pb-9.5 lg:p-6">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="size-4 rounded-full"
            style={{ backgroundColor: pot.theme }}
          />
          <h2 className="text-primary text-xl font-bold">{pot.name}</h2>
        </div>

        <ActionMenu
          items={[
            { label: "Edit Pot", onClick: () => setEditOpen(true) },
            {
              label: "Delete Pot",
              variant: "destructive",
              onClick: () => setDeleteOpen(true),
            },
          ]}
        />

        <EditPot
          key={pot.id}
          open={editOpen}
          onOpenChange={setEditOpen}
          pot={pot}
        />
        <DeletePot
          key={`delete-${pot.id}`}
          open={deleteOpen}
          onOpenChange={setDeleteOpen}
          pot={pot}
        />
      </div>

      <div className="@container">
        <div className="flex justify-between gap-6 @lg:gap-12.5 @lg:pl-8">
          <svg width="76" height="116" viewBox="0 0 76 116" fill="none">
            <path
              d="M14.5 2C14.5 0.895431 15.3954 0 16.5 0H59.5C60.6046 0 61.5 0.895431 61.5 2C61.5 3.10457 60.6046 4 59.5 4H16.5C15.3954 4 14.5 3.10457 14.5 2Z"
              fill={pot.theme}
            />
            <g clipPath="url(#clip0)">
              <path
                d="M4 20C4 15.5817 7.58172 12 12 12H64C68.4183 12 72 15.5817 72 20V104C72 108.418 68.4183 112 64 112H12C7.58172 112 4 108.418 4 104V20Z"
                fill="white"
              />
              <rect
                x="0"
                y={112 - (progress / 100) * 120}
                width="76"
                height="120"
                fill={pot.theme}
                style={{ transition: "all 0.5s ease" }}
              />
            </g>
            <path
              d="M64 10C69.5229 10 74 14.4772 74 20V104C74 109.523 69.5229 114 64 114H12C6.47715 114 2 109.523 2 104V20C2 14.4772 6.47715 10 12 10H64Z"
              stroke={pot.theme}
              strokeWidth="4"
            />
            <defs>
              <clipPath id="clip0">
                <path d="M4 20C4 15.5817 7.58172 12 12 12H64C68.4183 12 72 15.5817 72 20V104C72 108.418 68.4183 112 64 112H12C7.58172 112 4 108.418 4 104V20Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="w-full">
            <div className="mb-2 flex items-center justify-between">
              <p className="text-muted-foreground text-sm">{pot.name}</p>
              <span className="text-32 text-primary font-bold">
                ${pot.saved.toFixed(2)}
              </span>
            </div>

            <ProgressPot
              value={progress}
              color={pot.theme}
              className="w-full transition-all duration-500"
            />

            <div className="mt-3 flex items-center justify-between">
              <span className="text-muted-foreground text-xs font-bold">
                {progress.toFixed(2)}%
              </span>
              <span className="text-muted-foreground text-xs">
                Target of ${pot.target.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <AddToPot pot={pot} />
        <WithdrawPot pot={pot} />
      </div>
    </div>
  );
}
