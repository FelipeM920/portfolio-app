import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WorkSection from "../components/WorkSection";
import i18n from "../i18n";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => i18n.changeLanguage("en")}
          className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 shadow"
        >
          🇺🇸 <span className="text-sm font-medium">EN</span>
        </button>
        <button
          onClick={() => i18n.changeLanguage("pt")}
          className="flex items-center gap-1 px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 shadow"
        >
          🇧🇷 <span className="text-sm font-medium">PT</span>
        </button>
      </div>
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </main>
  );
}
