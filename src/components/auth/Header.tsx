import { Logo } from "../shared/Logo";

export default function Header() {
  return (
    <header className="bg-foreground flex w-full items-center justify-center rounded-br-[8px] rounded-bl-[8px] p-6 lg:hidden">
      <Logo />
    </header>
  );
}
