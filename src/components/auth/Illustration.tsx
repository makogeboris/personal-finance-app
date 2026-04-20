import Logo from "../shared/Logo";

export default function Illustration() {
  return (
    <div
      className="hidden flex-col items-start justify-between p-5 md:flex"
      style={{
        backgroundImage: "url('/images/illustration-authentication.svg')",
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <Logo />

      {/* <div className="flex flex-col items-end gap-4">
        <h3 className="text-xl font-bold text-white">
          Keep track of your money and save for your future
        </h3>
        <p className="text-sm font-normal text-white">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div> */}
    </div>
  );
}
