import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image
        width={40}
        height={40}
        src="/icons/icon-app.png"
        alt=""
        className="h-8 w-8 sm:h-10 sm:w-10"
        placeholder="empty"
        priority
      />

      <div className="relative h-8 w-24.25 sm:w-30.5">
        <Image
          src="/icons/logo-large.svg"
          alt="finance"
          fill
          className="object-contain"
          placeholder="empty"
          priority
        />
      </div>
    </>
  );
}

export function LogoDark() {
  return (
    <>
      <Image
        width={40}
        height={40}
        src="/icons/icon-app-dark.png"
        alt=""
        className="h-8 w-8 sm:h-10 sm:w-10"
        placeholder="empty"
        priority
      />

      <div className="relative h-8 w-24.25 sm:w-30.5">
        <Image
          src="/icons/logo-dark.svg"
          alt="finance"
          fill
          className="object-contain"
          placeholder="empty"
          priority
        />
      </div>
    </>
  );
}
