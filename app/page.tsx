import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between bg-main-color">
      <div className="flex w-full h-screen font-mono justify-center items-center">
        <article className="flex flex-col items-center">
          <h1 className="flex font-main mb-4 text-4xl text-center font-bold leading-none tracking-tight text-second-color md:text-5xl lg:text-6xl">What if Internet Ends</h1>
          <p className="font-main font-bold">Site is under construction</p>
        </article>
      </div>
    </main>
  );
}
