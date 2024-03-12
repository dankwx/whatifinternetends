"use client";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("main");

  const handleTabClick = (tabId: SetStateAction<string>) => {
    setActiveTab(tabId);
  };

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
            a collection of must-have programs, guides, and suggestions everyone
            must have on their computers and smartphones in case the internet
            went down
          </p>
        </article>
        <section className="flex w-full">
          <div className="flex w-36 flex-col">
            <div className="border-third-color bg-third-color border border-solid">
              <div className="flex">
                <ul>
                  <li
                    onClick={() => handleTabClick("main")}
                    className={`w-32 cursor-pointer border-solid px-1 py-2 hover:text-terciary-color ${
                      activeTab === "main" && "font-bold text-terciary-color"
                    }`}
                  >
                    What we recommend
                  </li>
                  <li
                    onClick={() => handleTabClick("softwares")}
                    className={`w-32 cursor-pointer border-y border-solid border-black px-1 py-2 hover:text-terciary-color ${
                      activeTab === "softwares" &&
                      "font-bold text-terciary-color"
                    }`}
                  >
                    Softwares
                  </li>
                  <li
                    onClick={() => handleTabClick("entertainment")}
                    className={`cursor-pointer px-1 py-2 hover:text-terciary-color ${
                      activeTab === "entertainment" &&
                      "font-bold text-terciary-color"
                    }`}
                  >
                    Entertainment
                  </li>
                  <li
                    onClick={() => handleTabClick("tutorials")}
                    className={`cursor-pointer border-t border-solid border-black px-1 py-2 hover:text-terciary-color ${
                      activeTab === "tutorials" &&
                      "font-bold text-terciary-color"
                    }`}
                  >
                    Tutorials
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full bg-slate-300 h-64 ml-4">
            <h2
              id="main"
              style={{ display: activeTab === "main" ? "flex" : "none" }}
            >
              What we recommend
            </h2>
            <h2
              id="softwares"
              style={{ display: activeTab === "softwares" ? "flex" : "none" }}
            >
              Softwares
            </h2>
            <h2
              id="entertainment"
              style={{
                display: activeTab === "entertainment" ? "flex" : "none",
              }}
            >
              Entertainment
            </h2>
            <h2
              id="tutorials"
              style={{ display: activeTab === "tutorials" ? "flex" : "none" }}
            >
              Tutorials
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}
