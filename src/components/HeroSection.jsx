import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const { t } = useTranslation();

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="bg-gray-900 text-white">
      <section className="relative flex flex-col items-center justify-center h-screen p-8 text-center">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "#0f172a" },
            particles: {
              number: { value: 50 },
              size: { value: 2 },
              move: {
                enable: true,
                speed: 0.3,
                direction: "left",
                straight: false,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
            },
          }}
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full mb-6"
        >
          <div className="w-full max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold">{t("hero.title")}</h1>
          </div>
          <p className="text-xl mb-6">{t("hero.subtitle")}</p>
          <a href="#projects">
            <button
              onClick={() => handleSmoothScroll(event, "#projects")}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              {t("hero.cta")}
            </button>
          </a>
          <a href="#about">
            <button
              onClick={() => handleSmoothScroll(event, "#about")}
              className="ml-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              {t("about.title")}
            </button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
