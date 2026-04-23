import Image from "next/image";

export function Logo() {
  return (
    <>
      <Image
        width={40}
        height={40}
        src="/icons/icon-app.png"
        alt=""
        className="xs:h-10 xs:w-10 h-8 w-8"
        placeholder="empty"
        priority
      />

      <div className="xs:w-30.5 relative h-8 w-24.25">
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
        className="xs:h-10 xs:w-10 h-8 w-8"
        placeholder="empty"
        priority
      />

      <div className="xs:w-30.5 relative h-8 w-24.25">
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
