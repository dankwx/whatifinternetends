import Image from "next/image";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-main-color">
      <Header />
      <div className="flex w-full flex-1 font-mono justify-center items-center">
        <article className="flex flex-col items-center">
          <h2 className="flex font-main mb-4 text-4xl text-center font-bold leading-none tracking-tight text-second-color md:text-5xl lg:text-6xl">What if Internet Ends</h2>
          <p className="font-main font-bold">Site is under construction</p>
        </article>
      </div>
    </main>
  );
}
