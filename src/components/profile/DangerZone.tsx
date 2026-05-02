export default function DangerZone() {
  return (
    <div className="border-destructive/20 rounded-12 h-fit border p-6 sm:p-8">
      <div className="mb-5 flex flex-col gap-1">
        <h2 className="text-primary text-xl font-bold">Danger Zone</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          These actions are permanent and cannot be undone.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-muted flex flex-col gap-3 rounded-lg p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-foreground text-sm font-bold">Sign out</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Sign out of this device.
            </p>
          </div>
          <button className="border-border text-foreground hover:bg-background bg-accent/50 focus-visible:outline-accent h-10 shrink-0 cursor-pointer rounded-lg border px-4 text-sm font-bold transition-colors focus-visible:outline-2">
            Sign out
          </button>
        </div>

        <div className="bg-destructive/5 border-destructive/15 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-destructive text-sm font-bold">Delete account</p>
            <p className="text-muted-foreground mt-0.5 text-xs">
              Permanently delete all your data.
            </p>
          </div>
          <button className="bg-destructive/10 text-destructive hover:bg-destructive focus-visible:outline-destructive h-10 shrink-0 cursor-pointer rounded-lg px-4 text-sm font-bold transition-colors hover:text-white focus-visible:outline-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
