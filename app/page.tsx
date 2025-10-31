import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent/HomeContent";

export const metadata: Metadata = {
  title: "Digital Survival Guide - Prepare for Internet Outage | What if Internet Ends",
  description: "Complete guide to preparing for internet apocalypse. Download Wikipedia offline with Kiwix, essential software, games, survival guides, and offline resources. Learn data hoarding, offline entertainment, and digital preparedness.",
  keywords: [
    "internet survival guide",
    "offline wikipedia download",
    "kiwix tutorial",
    "data hoarding guide",
    "internet outage preparedness",
    "offline software collection",
    "digital apocalypse survival",
    "download wikipedia offline",
    "mesh network setup",
    "offline entertainment",
    "plex media server",
    "jellyfin setup",
    "GOG games",
    "retro emulators",
    "offline maps osmand",
    "digital prepper",
    "hard drive backup strategy",
    "local network setup"
  ],
  openGraph: {
    title: "What if Internet Ends - Complete Digital Survival Guide",
    description: "Learn how to prepare for internet outage: download Wikipedia, essential software, offline entertainment, and survival resources.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center overflow-y-scroll bg-main-color">
      <HomeContent />
    </main>
  );
}
