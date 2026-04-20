import Logo from "../shared/Logo";

export default function Header() {
  return (
    <header className="bg-foreground flex w-full justify-center rounded-br-[8px] rounded-bl-[8px] p-6 md:hidden">
      <Logo />
    </header>
  );
}
