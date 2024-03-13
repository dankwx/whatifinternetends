"use client";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import SoftwareList from "@/components/SoftwaresList/SoftwareList";
import { SetStateAction, useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("main");

  const handleTabClick = (tabId: SetStateAction<string>) => {
    setActiveTab(tabId);
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center overflow-y-scroll bg-main-color">
      <Header />
      <Navbar />
      <div className="flex w-full flex-1 flex-col items-center px-80 font-main">
        <article className="mb-16 flex h-fit w-full flex-col items-center">
          {/* <h2
            id="main"
            style={{ display: activeTab === "main" ? "flex" : "none" }}
            className="mt-16 font-titleFont text-2xl font-bold"
          >
            antecipate your downloads
          </h2>
          <h2
            id="softwares"
            style={{ display: activeTab === "softwares" ? "flex" : "none" }}
            className="mt-16 font-titleFont text-2xl font-bold"
          >
            softwares
          </h2>
          <p
            id="main"
            style={{ display: activeTab === "main" ? "flex" : "none" }}
            className="mt-4 font-main leading-6"
          >
            a collection of must-have programs, guides, and suggestions everyone
            must have on their computers and smartphones in case the internet
            went down
          </p>
          <p
            id="softwares"
            style={{ display: activeTab === "softwares" ? "flex" : "none" }}
            className="mt-4 font-main leading-6"
          >
            a collection of suggested softwares you want to have installed in
            yoour pc
          </p> */}
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
          <div className="bg-slate-3s00 ml-4 h-64 w-full">
            <div
              id="main"
              style={{ display: activeTab === "main" ? "flex" : "none" }}
              className="flex-col"
            >
              <h2 className="mb-4 font-titleFont text-2xl font-extrabold">
                Gear Up for the Offline Apocalypse
              </h2>
              <p className="leading-6">
                Picture this: the internet, that glorious realm of memes and cat
                videos, gone. No worries, mate – here's the lowdown on what you
                need to do to keep your digital sanity intact.
                <br />
                <br />
                First off, stash those digital treasures on an HDD, not an SSD.
                Why? 'Cause HDDs are the cockroaches of storage – they last
                forever. It's like choosing a rusty pickup truck over a shiny
                sports car; practicality over flashiness.
                <br />
                <br />
                Now, let's talk cash. In a post-internet world, your favorite
                games and software could become the digital gold of the
                apocalypse. Those who downloaded and stored locally? They're the
                new kings of the digital realm. Expect prices to skyrocket for
                those who didn't plan ahead. Be the wise one with the foresight
                – it's like investing in Bitcoin before it went interstellar.{" "}
                <br />
                <br />
                So, how do you prepare? Download like there's no tomorrow. Grab
                those essential programs and games, toss 'em on your trusty HDD,
                and pat yourself on the back for being a digital doomsday
                prepper. Sure, it sounds a bit dramatic, but in the world of
                Reddit and 4chan, drama is our middle name. <br />
                <br />
                In a nutshell, we're not saying the internet's going down
                tomorrow, but we are saying: why not be the digital MacGyver
                ready for anything? Prepping for the apocalypse, one downloaded
                meme at a time. Stay savvy, internet warriors.
              </p>
              <h2 className="my-4 font-titleFont text-2xl font-extrabold">
                Optimizing Your Digital Arsenal: Beyond the Download
              </h2>
              <ul>
                <li className="mb-2 font-main text-xl font-semibold">
                  Data Compression Magic
                </li>
                <p className="leading-6">
                  Once you've amassed your trove of essential programs, consider
                  compressing them to save space. Utilize reliable compression
                  tools like 7-Zip or WinRAR. These tools not only reduce file
                  sizes but also make the transfer and storage of your digital
                  arsenal more streamlined.
                </p>
                <li className="my-2 font-main text-xl font-semibold">
                  Organize Like a Pro
                </li>
                <p className="leading-6">
                  A cluttered digital space is the enemy of efficiency. Take the
                  time to organize your downloaded files logically. Create
                  folders for different categories, making it easy to locate
                  specific programs or documents when you need them. A
                  well-organized structure will save you time and frustration
                  down the line.
                </p>
                <li className="my-2 font-main text-xl font-semibold">
                  Stay Informed
                </li>
                <p className="leading-6">
                  The digital landscape is ever-evolving. Regularly check for
                  updates to your stored programs and backup strategies. Being
                  proactive in staying informed ensures that your offline setup
                  remains resilient against potential vulnerabilities.
                </p>
              </ul>
            </div>
            <div
              className="flex-col"
              id="softwares"
              style={{ display: activeTab === "softwares" ? "flex" : "none" }}
            >
              <h2 className="mb-4 font-titleFont text-2xl font-extrabold">
                Softwares List
              </h2>
              <SoftwareList />
            </div>
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
