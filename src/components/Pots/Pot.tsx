import { ProgressBarPot } from "../shared/ProgressBar";

export default function Pot() {
  return (
    <div className="bg-background rounded-12 flex w-full flex-col gap-8 px-5 pt-6 pb-9.5 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-chart-1 size-4 rounded-full"></div>
          <h2 className="text-primary text-xl font-bold">Savings</h2>
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

      <div>
        <div className="mb-4 flex items-center justify-between">
          <p className="text-muted-foreground text-sm">Total Saved</p>
          <span className="text-32 text-primary font-bold">$159.00</span>
        </div>

        <ProgressBarPot />

        <div className="mt-3 flex items-center justify-between">
          <span className="text-muted-foreground text-xs font-bold">7.95%</span>
          <span className="text-muted-foreground text-xs">
            Target of $2,000
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-secondary text-primary hover:bg-background hover:border-accent focus-visible:outline-foreground w-full cursor-pointer rounded-md border border-transparent p-4 text-sm font-bold transition-all focus-visible:outline-2">
          + Add Money
        </button>
        <button className="bg-secondary text-primary hover:bg-background hover:border-accent focus-visible:outline-foreground w-full cursor-pointer rounded-md border border-transparent p-4 text-sm font-bold transition-all focus-visible:outline-2">
          Withdraw
        </button>
      </div>
    </div>
  );
}
