import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const { t } = useTranslation();

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <>
      <section
        id="projects"
        className="min-h-screen bg-gray-900 text-white p-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          {t("projects.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer block p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.type === "work" ? "bg-blue-700" : "bg-green-600"
                }`}
              >
                {project.type === "work"
                  ? t("projects.workTypeBadge")
                  : t("projects.personalTypeBadge")}
              </span>
              {project.current && (
                <span className="text-xs px-2 py-1 ml-2 bg-yellow-600 text-white rounded-full mr-2">
                  {t("projects.currentlyBadge")}
                </span>
              )}
              <h2 className="text-2xl font-semibold mb-2 mt-3">
                {t(project.title)}
              </h2>
              {project.type === "work" && (
                <p className="text-sm text-gray-400 mb-1">{t(project.date)}</p>
              )}
              <p className="text-gray-400 mb-4">{t(project.description)}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-8 rounded-lg max-w-md w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white text-xl hover:text-red-500"
              >
                &times;
              </button>
              <h2 className="text-3xl font-bold mb-4">
                {t(selectedProject.title)}
              </h2>
              <p className="mb-4">{t(selectedProject.details)}</p>
              {selectedProject.link && (
                <div className="my-6">
                  <p className="mt-2 text-sm text-gray-400">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300"
                    >
                      {t("projects.linkSite")}
                    </a>
                  </p>
                </div>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mb-4 px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                >
                  <FaGithub className="mr-2" />
                  {t("projects.linkGithub")}
                </a>
              )}
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white text-sm px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
