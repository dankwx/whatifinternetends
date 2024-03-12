import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center bg-main-color">
      <Header />
      <Navbar />
      <div className="flex w-full flex-1 flex-col items-center px-80 font-main">
        <article className="mb-16 flex h-fit w-full flex-col items-center">
          <h2 className="mt-16 font-main text-2xl font-bold">
            antecipate your downloads
          </h2>
          <p className="mt-4 font-main leading-6">
            a collection of must have programs, guides and suggestions everyone
            must have on their computers and smartphones in case the internet
            went down
          </p>
        </article>
        <section className="flex w-full">
          <div className="flex w-36 flex-col">
            <div className="border-third-color bg-third-color border border-solid">
              <h2 className="w-full cursor-pointer px-1 py-2">
                What we recommend
              </h2>
              <div className="flex">
                <ul>
                  <li className="w-32 cursor-pointer border-y border-solid px-1 py-2">
                    Softwares
                  </li>
                  <li className="cursor-pointer px-1 py-2">Entertainment</li>
                  <li className="cursor-pointer border-t border-solid px-1 py-2">
                    Tutorials
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-600">
            <h1>yteste</h1>
          </div>
        </section>
      </div>
    </main>
  );
}
