import Image from "next/image";
import Header from "@/components/Header/Header";
import cloudImg from "../public/cloud.png"

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-screen bg-main-color">
      <Header />
      <div className="flex w-full flex-1 font-mono  items-center">
        <article className="flex w-1/2 h-full flex-col">
          <h2 className="font-bold font-main text-4xl mx-8 mt-16"
          >Have you ever thought about what the use of computers would be if the internet went away?</h2>
          <p className="font-main mx-8 mt-8 leading-6"
          >Well, this is an unlikely scenario, but just as people like to stock up on groceries when there is news of wars and lockdowns, wouldn't it be nice to stock up on "digital groceries" on your computer?</p>
        </article>
        <div className="flex w-1/2 h-full">
          <Image className="h-52 w-52" src={cloudImg}  alt="ff" />
        </div>
      </div>
    </main>
  );
}
