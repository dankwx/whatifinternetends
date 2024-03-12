import Image from "next/image";
import cat from "./cat.png";
export default function Header() {
  return (
    <header className="flex h-32 w-full flex-col items-center justify-center border-b border-solid">
      <Image src={cat} width={65} alt="cat" />
      <h1 className="ml-4 font-titleFont text-2xl font-bold text-terciary-color">
        What if Internet Ends
      </h1>
      <p className="text-sm">Gear Up for the Offline Apocalypse</p>
    </header>
  );
}
