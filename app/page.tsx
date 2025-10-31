"use client";

import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import SoftwareList from "@/components/SoftwaresList/SoftwareList";
import Games from "@/components/Games/Games";
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
                so the internet might die... now what
              </h2>
              <p className="leading-6">
                alright look, imagine this - you wake up one day and the internet 
                is just... gone. poof. no more youtube, no more reddit, no twitter 
                drama, nothing. sounds kinda peaceful right? except you realize 
                you dont have ANYTHING saved locally lmao
                <br />
                <br />
                heres the deal and im being serious now - get yourself some HDDs. 
                not SSDs (those things lose data if you leave em unplugged too long, 
                learned that the hard way). HDDs are like those old nokia phones, 
                indestructible bastards. yeah theyre slower whatever but theyll 
                outlive you and your grandkids probably
                <br />
                <br />
                and yo.. think about this for a sec. when the nets gone, all that 
                stuff you downloaded? thats gonna be VALUABLE. like actually valuable. 
                your neighbor who didnt prep is gonna be begging you for a copy of 
                Office or some random game. you could literally become the richest 
                guy on your block just by having foresight lol
                <br />
                <br />
                so what do you do? just start downloading shit. seriously, everything 
                you think you might need or want. programs, games, movies, docs, 
                whatever. throw it all on a big ass HDD and forget about it. worst 
                case scenario nothing happens and you wasted some electricity. best 
                case? youre prepared and everyone else is screwed
                <br />
                <br />
                anyway this whole site is basically me being paranoid but also... 
                am i wrong tho? better safe than sorry and all that. plus hoarding 
                data is kinda fun ngl
              </p>
              <h2 className="my-4 font-titleFont text-2xl font-extrabold">
                ok here's what you actually need (trust me on this)
              </h2>
              <ul>
                <li className="mb-2 font-main text-xl font-semibold">
                  1. Wikipedia (yeah the ENTIRE thing)
                </li>
                <p className="mb-4 leading-6">
                  im not kidding download all of wikipedia. theres this program called 
                  Kiwix that makes it stupid easy. the whole thing is like 100gb with 
                  images or 50gb without i think? anyway when the internet dies youll 
                  be that guy who knows random facts about everything. "how do i fix 
                  a toilet" boom you got it. "whats the capital of uzbekistan" you know 
                  that too. ultimate flex tbh
                </p>
                
                <li className="mb-2 font-main text-xl font-semibold">
                  2. movies, shows, music... all of it
                </li>
                <p className="mb-4 leading-6">
                  dude start hoarding media RIGHT NOW. i got like 8TB of movies and shows 
                  and its still not enough lol. get Plex or Jellyfin (both free, jellyfin 
                  is more FOSS if you care about that) and boom youre netflix now. no 
                  more "this title is not available in your country" garbage, no 
                  buffering, no subscription fees. just you and your content. 
                  <br/>
                  plus when netflix inevitably dies or removes your favorite show for the 
                  50th time, youll still have it. feels good man
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  3. games (this ones important)
                </li>
                <p className="mb-4 leading-6">
                  GOG is your best friend here - DRM free means you OWN the game, not 
                  just "licensing" it or whatever corporate bs. download your steam library 
                  too but uh... some games have drm so youll need to figure that out yourself 
                  *wink wink*
                  <br/>
                  also GET EMULATORS. all of them. RetroArch, PCSX2, Dolphin, RPCS3, Yuzu 
                  (rip), whatever. and roms... well you didnt hear this from me but theyre 
                  out there. when society collapses and kids wanna play pokemon youll be 
                  a hero
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  4. dev tools (if you code)
                </li>
                <p className="mb-4 leading-6">
                  ok so if youre a dev like me, download EVERYTHING. every IDE, every 
                  compiler, every SDK you can think of. Visual Studio is like 40gb? 
                  download it. entire documentation websites? use HTTrack or wget and 
                  mirror that shit
                  <br/>
                  Stack Overflow has offline dumps somewhere i think.. github repos? 
                  clone em all. Linux ISOs? grab multiple distros cause why not. trust 
                  me you do NOT wanna be stuck trying to remember syntax for some obscure 
                  function when google is dead
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  5. books. lots of books
                </li>
                <p className="mb-4 leading-6">
                  technical manuals, survival guides, cookbooks, car repair stuff, medical 
                  textbooks, fiction novels, comics, manga, literally anything. Z-Library 
                  was absolutely goated for this (pour one out for the homies, they got 
                  taken down but keep coming back under new domains)
                  <br/>
                  use Calibre to organize everything or youll end up with 5000 random pdfs 
                  named "book(1).pdf" and lose your mind. when the internet dies youll wanna 
                  know how to like... fix stuff. or at least have something to read while 
                  everything goes to hell
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  6. maps (actually important)
                </li>
                <p className="mb-4 leading-6">
                  get offline maps NOW. OpenStreetMap has all the data for free, apps like 
                  OsmAnd let you download entire continents. i got all of north america and 
                  europe on my phone just in case
                  <br/>
                  google maps aint gonna work when the servers are down brother. you dont 
                  wanna be that person lost in the middle of nowhere with no navigation. 
                  also grab topographic maps if youre into hiking or whatever
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  7. software installers for literally everything
                </li>
                <p className="mb-4 leading-6">
                  make a folder, call it "software vault" or some shit, and fill it with 
                  offline installers. windows ISOs, linux distros, drivers (GPU drivers are 
                  like 500mb each lmao), browsers, office suites, media players, that random 
                  codec pack, everything
                  <br/>
                  your friends gonna come crying when their pc breaks and they cant download 
                  chrome. you pull out your usb stick with everything and suddenly youre 
                  a god. feels good
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  8. backups (dont skip this)
                </li>
                <p className="mb-4 leading-6">
                  real talk - hard drives WILL fail. not if, WHEN. i lost 2TB once and wanted 
                  to die. so now i do 3 copies minimum. one main drive, one backup, one at 
                  my parents house (in case my place burns down or something)
                  <br/>
                  yeah its paranoid but you know what? when your main drive dies and you have 
                  backups youll feel like a genius. theres some rule called 3-2-1 or whatever 
                  but basically just... have multiple copies in different places. please.
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  9. communication stuff (mesh networks n shit)
                </li>
                <p className="mb-4 leading-6">
                  so when whatsapp and discord die, how you gonna talk to people? mesh 
                  networking apps like Briar or Bridgefy work without internet. theres 
                  also ham radio if youre into that (requires license but whatever)
                  <br/>
                  you can also host your own IRC server locally for LAN chat. or just 
                  make a huge wifi network with your neighbors. idk be creative. the 
                  point is have SOME way to communicate when the big tubes stop working
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  10. random shit you dont think about
                </li>
                <p className="mb-4 leading-6">
                  fonts. yes im serious, download font packs. icon packs too. wallpapers 
                  (you WILL get bored of the same wallpaper trust me). sound effects, stock 
                  photos, 3d models if youre into that
                  <br/>
                  also memes. save your favorite memes. i have a 50gb meme folder and dont 
                  regret it. when everythings offline youll want something to look at that 
                  isnt just... beige nothingness. variety is the spice of life or whatever
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  11. keep updating while you still can
                </li>
                <p className="mb-4 leading-6">
                  before the internet dies (if it does) make sure everythings updated. latest 
                  versions of programs, newest patches, fresh content. you dont wanna be stuck 
                  with buggy 2025 software in 2035 wondering why nothing works right
                  <br/>
                  like when you have internet USE IT. update everything, download new stuff, 
                  refresh your archives. make those last online moments count ya know
                </p>

                <li className="mb-2 font-main text-xl font-semibold">
                  12. dont be a data hoarder hermit
                </li>
                <p className="mb-4 leading-6">
                  share your stuff with friends and family you trust. if your drives die maybe 
                  they have backups. plus when the nets gone you can trade shit. "ill give you 
                  season 4 of better call saul for your copy of photoshop" lmao
                  <br/>
                  build a network of digital preppers. make copies for your homies. distribute 
                  the knowledge. when everything goes down youll all be set instead of just you. 
                  teamwork makes the dream work or whatever
                </p>
              </ul>

              <h2 className="my-4 font-titleFont text-2xl font-extrabold">
                anyway... just do it already
              </h2>
              <p className="mb-6 leading-6">
                look im not saying the internet WILL die tomorrow. or next year. or ever. 
                honestly i have no idea. but heres the thing - it costs you basically nothing 
                to prep. some hard drive space (theyre cheap af now), electricity for 
                downloading, and time. thats it
                <br /><br />
                meanwhile NOT being prepared? youre gonna be so bored. and useless. and mad 
                at yourself. the internets weirdly fragile when you think about it.. solar 
                flare, war, infrastructure just... breaking, your isp being garbage, whatever. 
                lot of ways it could go wrong
                <br /><br />
                so like... stop reading reddit for 5 minutes (i know youre there dont lie), 
                start some downloads, build your digital fortress. future you is either gonna 
                be grateful or youll have wasted a weekend. pretty good odds imo
                <br /><br />
                this whole site is basically me being paranoid and making it everyones problem 
                lmao. but real talk - better to have it and not need it than need it and be 
                completely fucked right?
                <br/><br/>
                ok im done preaching. go download wikipedia or something. do it. right now. 
                ill wait
              </p>
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
            <div
              className="flex-col"
              id="entertainment"
              style={{
                display: activeTab === "entertainment" ? "flex" : "none",
              }}
            >
              <Games />
            </div>
            <div
              className="flex-col"
              id="tutorials"
              style={{ display: activeTab === "tutorials" ? "flex" : "none" }}
            >
              <h2 className="mb-6 font-titleFont text-3xl font-extrabold text-red-600">
                HOW TO BUILD A HOMEMADE BOMB
              </h2>
              <h3 className="mb-4 font-titleFont text-xl font-bold">
                FBI definitely wants you to know
              </h3>

              <p className="mb-6 leading-6">
                nah im not teaching you that ... this is a site about 
                preparing for internet apocalypse not a terrorism manual  right?
                <br/><br/>
                theres actually no "tutorials" (plural) 
                here. just one. singular. and its not even really a tutorial its more like... 
                life advice?
              </p>

              <h2 className="my-6 font-titleFont text-2xl font-extrabold">
                The ACTUAL Tutorial: How to Live Without Internet (Again, or For The First Time)
              </h2>

              <p className="mb-4 leading-6">
                so here's the thing right. some of yall are old enough to remember life before 
                internet. dial-up, or even BEFORE that. and some of you were literally born 
                with an ipad in your hands and have no idea what its like to be... bored. 
                actually bored. not "scroll through tiktok for 3 hours" bored but like 
                "stare at the ceiling and contemplate existence" bored
                <br/><br/>
                when (if?) the internet dies, youre gonna need to remember (or learn) how to 
                actually LIVE without it. and no im not talking about some romanticized "return 
                to nature" bs. im talking practical shit
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 1: Accept That You're Gonna Be Bored AF (At First)
              </h3>
              <p className="mb-4 leading-6">
                real talk the first few weeks are gonna SUCK. your brain is literally addicted 
                to the dopamine hits from notifications and new content. youre gonna reach for 
                your phone every 5 minutes out of habit. its gonna be weird and uncomfortable
                <br/><br/>
                but like... humans lived for thousands of years without internet. you'll adapt. 
                probably. maybe. idk give it time
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 2: Rediscover Hobbies (Remember Those?)
              </h3>
              <p className="mb-4 leading-6">
                reading actual books. drawing. playing instruments. building stuff with your 
                hands. woodworking. cooking (not just following recipe videos, actually 
                experimenting). board games. card games. actually talking to people face to face 
                like some kind of caveman
                <br/><br/>
                all that stuff you said you'd do "if you had more time"? well congrats you got 
                time now. no more excuses. either learn to do stuff or die of boredom. your choice
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 3: Physical Media Is Your New Best Friend
              </h3>
              <p className="mb-4 leading-6">
                this is why i keep telling yall to download everything. when you cant stream 
                anything, that collection of movies and music youve been hoarding? thats your 
                entertainment now. that stack of books? your new library. those games you 
                downloaded? your arcade
                <br/><br/>
                organize it well. make it accessible. treat it like the treasure it is. because 
                it literally will be
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 4: Learn to Fix Shit
              </h3>
              <p className="mb-4 leading-6">
                cant google "how to fix [thing]" anymore. so you better have those repair 
                manuals downloaded (told you about the pdfs section). learn basic repair skills 
                NOW while youtube tutorials still exist
                <br/><br/>
                sewing, basic electronics, car maintenance, plumbing, carpentry. you dont need 
                to be an expert but knowing the basics will save your ass. also makes you 
                valuable to your community which is important when society gets weird
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 5: Community Becomes Everything
              </h3>
              <p className="mb-4 leading-6">
                without internet you cant just order stuff online or ask reddit for help. you 
                need actual real human connections. neighbors, friends, family. build those 
                relationships NOW
                <br/><br/>
                know who has what skills. who can fix cars, who can cook, who knows first aid, 
                who has that massive movie collection (you). create a local network of people 
                who can help each other. basically become amish but with electricity and 
                technology lmao
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 6: Embrace the Slow Life
              </h3>
              <p className="mb-4 leading-6">
                no more instant gratification. no more next-day shipping. no more streaming 
                whatever you want whenever you want. things will be SLOW and you gotta be okay 
                with that
                <br/><br/>
                read a whole book instead of doomscrolling. play a 60 hour rpg instead of 
                watching short videos. have long conversations instead of sending memes. its 
                gonna feel weird at first but honestly? might be better for your mental health. 
                maybe. possibly. jury's still out
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 7: Offline Education
              </h3>
              <p className="mb-4 leading-6">
                remember when i said download wikipedia? this is why. you can still learn stuff 
                without internet if you have the resources. teach yourself new skills from books 
                and manuals. teach others what you know
                <br/><br/>
                create a little library in your community. share knowledge. become that person 
                everyone goes to when they need to know something. its like being a medieval 
                scholar except you have PDFs instead of scrolls
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 8: Get Comfortable With Silence
              </h3>
              <p className="mb-4 leading-6">
                this ones gonna be hard for a lot of people. no background youtube videos. no 
                podcasts while you work. no music streaming 24/7 (unless you downloaded it). 
                just... silence. or nature sounds if youre outside. or people talking nearby
                <br/><br/>
                learn to be alone with your thoughts without immediately reaching for a 
                distraction. meditate or whatever. sounds hippie but its actually useful. your 
                brain needs to learn how to just... exist... without constant stimulation
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 9: Physical Fitness Actually Matters Now
              </h3>
              <p className="mb-4 leading-6">
                when you cant uber eats or doordash, when you gotta walk places because gps is 
                dead and you dont remember how to get anywhere, when you need to actually DO 
                physical things instead of paying someone else to do them... being in decent 
                shape helps
                <br/><br/>
                you dont need to become a gym bro but like... maybe be able to walk more than 
                10 minutes without dying? just a thought. also you'll have more free time 
                without internet so might as well use it for something productive
              </p>

              <h3 className="mb-3 mt-6 font-main text-xl font-semibold">
                Step 10: Keep a Journal or Something
              </h3>
              <p className="mb-4 leading-6">
                cant post your thoughts on twitter anymore. cant update your blog. cant share 
                your daily life on instagram. so... write it down? old school diary style?
                <br/><br/>
                future generations might wanna know what it was like when the internet died. or 
                maybe youll just want to remember. either way, writing stuff down is therapeutic 
                and gives you something to do. plus you can get real dark and honest without 
                worrying about getting cancelled lmao
              </p>

              <h2 className="my-6 font-titleFont text-2xl font-extrabold">
                The Hard Truth Nobody Wants to Hear
              </h2>
              <p className="mb-6 leading-6">
                living without internet is gonna suck at first. like really suck. especially if 
                youre young and never experienced it. but heres the thing - humans are insanely 
                adaptable. we went from caves to skyscrapers. we'll figure out post-internet 
                life too
                <br/><br/>
                some of yall might even prefer it? no more social media toxicity. no more 
                doomscrolling. no more comparing your life to everyone elses highlight reel. 
                just... existing. doing things. being present. revolutionary concept i know
                <br/><br/>
                but also yeah it'll be harder in practical ways. no online banking, no easy 
                communication with people far away, no access to infinite information. trade-offs 
                everywhere
                <br/><br/>
                the people who prep now, who learn skills, who download resources, who build 
                communities - theyre gonna have a WAY easier time adapting. be one of those 
                people. or dont. im not your dad. but dont say i didnt warn you
              </p>

              <h2 className="my-6 font-titleFont text-2xl font-extrabold">
                Final Thoughts (im rambling at this point)
              </h2>
              <p className="mb-6 leading-6">
                this whole "tutorial" is less of a how-to and more of a "heads up this is gonna 
                be weird" kinda thing. theres no step-by-step guide to living without internet 
                because everyones situation is different
                <br/><br/>
                some of you live in cities where communities tight. some of you live in the 
                middle of nowhere. some of you have skills and resources. some of you have 
                nothing. everyones starting point is different
                <br/><br/>
                but the core advice stays the same: prepare now while you can. download 
                everything. learn skills. build relationships. get comfortable with boredom. 
                embrace slower living. be ready to adapt
                <br/><br/>
                and if the internet never dies? well congrats you learned some useful skills 
                and have a sick media collection. not exactly a waste of time is it
                <br/><br/>
                anyway thats it. thats the tutorial. you clicked expecting bomb instructions 
                and got life advice instead. how does that make you feel? betrayed? educated? 
                both? good. character building.
                <br/><br/>
                now go do something productive. or dont. i cant tell you what to do. but maybe 
                spend less time online and more time preparing for the day when "online" isnt 
                an option anymore
                <br/><br/>
                bye!
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
