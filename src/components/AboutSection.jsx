import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800 text-white p-8"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">
        {t("about.title")}
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
        <img
          src="/profile.jpg"
          alt="Profile Avatar"
          className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
        />
        <div>
          <p className="mb-4">{t("about.description")}</p>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.linkedin.com/in/felipe-ribeiro-moraes/?locale=en_US"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/FelipeM920"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:felipedemoraes.dev@gmail.com"
              className="hover:text-blue-400"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
