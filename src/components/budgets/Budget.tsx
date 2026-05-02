import Link from "next/link";
import { ProgressBarBudget } from "../shared/ProgressBar";
import Image from "next/image";
import { FieldSeparator } from "../ui/field";

export default function Budget() {
  return (
    <div className="bg-background rounded-12 flex w-full flex-col gap-5 px-5 py-6 sm:p-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-chart-1 size-4 rounded-full"></div>
          <h2 className="text-primary text-xl font-bold">Entertainment</h2>
        </div>

        <button className="focus-visible:outline-foreground cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2">
          <svg
            width="14"
            height="4"
            viewBox="0 0 14 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 1.75C8.5 2.09612 8.39736 2.43446 8.20507 2.72225C8.01278 3.01003 7.73947 3.23434 7.4197 3.36679C7.09993 3.49924 6.74806 3.5339 6.40859 3.46637C6.06913 3.39885 5.75731 3.23218 5.51256 2.98744C5.26782 2.7427 5.10115 2.43087 5.03363 2.09141C4.9661 1.75194 5.00076 1.40007 5.13321 1.0803C5.26567 0.760533 5.48997 0.487221 5.77775 0.294928C6.06554 0.102636 6.40388 0 6.75 0C7.21413 0 7.65925 0.184375 7.98744 0.512563C8.31563 0.840752 8.5 1.28587 8.5 1.75ZM1.75 0C1.40388 0 1.06554 0.102636 0.777753 0.294928C0.489967 0.487221 0.265665 0.760533 0.133212 1.0803C0.000758246 1.40007 -0.0338976 1.75194 0.0336265 2.09141C0.101151 2.43087 0.267822 2.7427 0.512564 2.98744C0.757306 3.23218 1.06913 3.39885 1.40859 3.46637C1.74806 3.5339 2.09993 3.49924 2.4197 3.36679C2.73947 3.23434 3.01278 3.01003 3.20507 2.72225C3.39737 2.43446 3.5 2.09612 3.5 1.75C3.5 1.28587 3.31563 0.840752 2.98744 0.512563C2.65925 0.184375 2.21413 0 1.75 0ZM11.75 0C11.4039 0 11.0655 0.102636 10.7778 0.294928C10.49 0.487221 10.2657 0.760533 10.1332 1.0803C10.0008 1.40007 9.9661 1.75194 10.0336 2.09141C10.1012 2.43087 10.2678 2.7427 10.5126 2.98744C10.7573 3.23218 11.0691 3.39885 11.4086 3.46637C11.7481 3.5339 12.0999 3.49924 12.4197 3.36679C12.7395 3.23434 13.0128 3.01003 13.2051 2.72225C13.3974 2.43446 13.5 2.09612 13.5 1.75C13.5 1.52019 13.4547 1.29262 13.3668 1.0803C13.2788 0.867984 13.1499 0.675066 12.9874 0.512563C12.8249 0.350061 12.632 0.221156 12.4197 0.133211C12.2074 0.0452649 11.9798 0 11.75 0Z"
              fill="#B3B3B3"
            />
          </svg>
        </button>
      </div>

      <div className="flex w-full flex-col gap-4">
        <p className="text-muted-foreground text-sm">Maximum of $50.00</p>

        <ProgressBarBudget />

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
            href="/pots"
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
