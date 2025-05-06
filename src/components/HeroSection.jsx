import React, { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

extend({ OrbitControls });

const projects = [
  {
    id: 1,
    title: "Spread Tecnologia · Full Stack Developer 💻",
    description:
      "Part of a global healthcare project 🌎, working remotely from Brazil 🇧🇷.",
    details:
      "As a Full Stack Developer, I contributed to feature development ⚙️, bug fixing 🐛, functionality testing ✅, code review 🔍, and third-party API integration 🔗. I worked with C#, SQL, React, HTML, CSS, and Metronic, collaborating daily with an international team across time zones using English 🌍.",
    technologies: [
      "React ⚛️",
      "JavaScript ⚡",
      "HTML 🏗️",
      "CSS 🎨",
      "Sass 💅",
      "C# 🔧",
      "SQL 🗄️",
      "Metronic 🖥️",
      "Azure App Service ☁️",
      "Azure DevOps 🚀",
      "Jest 🧪",
      "Selenium 🤖",
      "Git 🔀",
      "Agile Scrum 🏃‍♂️",
    ],
    date: "Mar 2024 - Present",
  },
  {
    id: 2,
    title: "CWI Software · Frontend Developer 🎨",
    description:
      "Worked on a major Brazilian footwear e-commerce platform 👟, as part of a large remote team.",
    details:
      "As a Frontend Developer, I worked on feature development ⚙️, bug fixing 🐛, functionality testing ✅, mentoring 🌱, code reviews 🔍, and led small projects 🚀. Key projects included:\n\n- **Find Your Location 📍**: Led the development of a feature letting users check local store availability using geolocation. Tech: HTML, CSS, Sass, React, JavaScript, TypeScript, Styled Components, REST API.\n\n- **3D Shoe Models 👟🖌️**: Led a feature enabling users to customize 3D shoe models with text and textures. Tech: HTML, CSS, Sass, React, JavaScript, TypeScript, REST API, ThreeJS.",
    technologies: [
      "React ⚛️",
      "JavaScript ⚡",
      "TypeScript 🛠️",
      "HTML 🏗️",
      "CSS 🎨",
      "Sass 💅",
      "Styled Components 🧵",
      "Google Tag Manager 📊",
      "Google Analytics 📈",
      "Jenkins ⚙️",
      "Git 🔀",
      "ThreeJS 🧩",
      "Agile Scrum 🏃‍♂️",
    ],
    date: "Jan 2020 - Jul 2023",
  },
  {
    id: 3,
    title: "CWI Software · Full Stack Developer 💻",
    description:
      "Contributed to a banking software solution 💰 within a collaborative, agile Scrum team.",
    details:
      "As a Full Stack Developer, I worked on feature development ⚙️, bug fixing 🐛, code reviews 🔍, unit testing 🧪, and functionality testing ✅. The project operated under a microservices architecture, delivering robust banking solutions.",
    technologies: [
      "Angular2+ ⚙️",
      "HTML 🏗️",
      "CSS 🎨",
      "C# 🔧",
      "SQL 🗄️",
      "Unit Testing 🧪",
      "Git 🔀",
      "Agile Scrum 🏃‍♂️",
    ],
    date: "Sep 2018 - Jan 2020",
  },
  {
    id: 4,
    title: "CWI Software · Full Stack Developer 💻",
    description:
      "Worked in a small, agile Scrum team 🏃‍♂️, building a robust microservices architecture.",
    details:
      "As a Full Stack Developer, I handled feature development ⚙️, bug fixing 🐛, code reviews 🔍, unit tests 🧪, integration tests 🔗, functionality testing ✅, and mentoring 🌱. I contributed to delivering secure and scalable software solutions.",
    technologies: [
      "AngularJS ⚙️",
      "HTML 🏗️",
      "CSS 🎨",
      "Bootstrap 🎛️",
      "C# 🔧",
      "SQL 🗄️",
      "MongoDB 🍃",
      "ElasticSearch 🔍",
      "Unit Testing 🧪",
      "Integration Tests 🔗",
      "Git 🔀",
      "Agile Scrum 🏃‍♂️",
    ],
    date: "Sep 2015 - Sep 2018",
  },
  {
    id: 5,
    title: "CWI Software · Projeto Crescer 🚀",
    description:
      "Participated in Projeto Crescer, a focused training program in software development 💻.",
    details:
      "Received hands-on training across front-end 🎨, back-end 🔧, UX/UI 🖌️, and database 🗄️, building a strong foundation for full-stack development.",
    technologies: ["Front-End 🌐", "Back-End 🔧", "UX/UI 🖌️", "Database 🗄️"],
    date: "Sep 2015 - Dec 2015",
  },
  {
    id: 6,
    title: "Holdprint Sistemas Inteligentes · Back-End Developer 🔧",
    description:
      "Collaborated with a small team 🤝 to develop and maintain back-end functionalities for a startup 🚀.",
    details:
      "Handled feature development ⚙️, bug fixing 🐛, and unit testing 🧪 to support scalable back-end systems.",
    technologies: [
      "C# 🔧",
      "Windows Forms 🖥️",
      "SQL 🗄️",
      "ADO .NET 🔗",
      "Unit Testing 🧪",
      "TortoiseSVN 🐢",
    ],
    date: "Oct 2014 - Jul 2015",
  },
  {
    id: 7,
    title: "Liberato Salzano · Internship 🛠️",
    description:
      "Worked in the school I.T. lab 🏫, supporting students and teachers with tech needs.",
    details:
      "Handled computer maintenance 🖥️, software installation 💾, and provided hands-on support 🧑‍💻 for classroom and lab environments.",
    technologies: [
      "Computer Maintenance 🛠️",
      "Software Installation 💾",
      "User Support 🤝",
    ],
    date: "Jan 2014 - Sep 2014",
  },
  {
    id: 8,
    title: "City Hall of Novo Hamburgo · Internship 🏛️",
    description:
      "Worked as an intern providing I.T. support and maintenance for the city hall’s staff 💼.",
    details:
      "Handled computer repairs 🖥️, software installations 💾, answered support tickets 🎫, and assisted employees with troubleshooting 🤝 to keep systems running smoothly.",
    technologies: [
      "Computer Repairs 🛠️",
      "Software Installation 💾",
      "Support Tickets 🎫",
      "Troubleshooting 🤝",
    ],
    date: "Jun 2012 - Jan 2014",
  },
  {
    id: 9,
    title: "Personal Portfolio Website 🌐",
    description:
      "A creative, interactive portfolio site to showcase my work, skills, and projects 💼.",
    details:
      "Built using React ⚛️, Tailwind CSS 🎨, Three.js 🧩, and Framer Motion 🎬, this portfolio integrates 3D elements, smooth animations, and stylish design to highlight my professional journey. Features include a project showcase, animated hero section, About Me section, and modals for detailed project views. Hope you like it! 🙂",
    technologies: [
      "React ⚛️",
      "Tailwind CSS 🎨",
      "Three.js 🧩",
      "Framer Motion 🎬",
      "Webpack 📦",
      "Node.js 🌿",
    ],
    date: "2025",
  },
];

function FMModel() {
  const ref = useRef();
  const gltf = useGLTF("/frase.glb");
  const direction = useRef(1);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(time) * 0.5;
    }
  });

  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={1}
      position={[0, 0, 0]}
      rotation={[1.5, Math.PI / 55, 0]}
    />
  );
}

export default function HeroSection() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const closeModal = () => setSelectedProject(null);

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
              size: { value: 5 },
              move: {
                enable: true,
                speed: 1,
                direction: "top",
                straight: false,
              },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
            },
          }}
          className="absolute top-0 left-0 w-full h-full z-0"
        />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 w-full h-96 mb-6"
        >
          <div className="w-full max-w-4xl mx-auto h-96">
            <Canvas className="w-full h-full">
              <ambientLight intensity={5} />
              <directionalLight position={[1, 2, 10]} />
              <Suspense fallback={null}>
                <FMModel />
              </Suspense>
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
          <p className="text-xl mb-6">
            Full-stack developer 💻 with a strong front-end focus 🎨⚛️
          </p>
          <a href="#projects">
            <button
              onClick={() => handleSmoothScroll(event, "#projects")}
              className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              View My Work
            </button>
          </a>
          <a href="#about">
            <button
              onClick={() => handleSmoothScroll(event, "#about")}
              className="ml-2 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
            >
              About me
            </button>
          </a>
        </motion.div>
      </section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 text-white p-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 max-w-4xl mx-auto">
          <img
            src="/profile.jpg"
            alt="Profile Avatar"
            className="w-40 h-40 rounded-full object-cover border-4 border-blue-600"
          />
          <div>
            <p className="mb-4">
              Hey! 👋 I’m a senior full-stack dev with 7+ years of experience
              building cool websites and web apps across e-commerce 🛒, banking
              🏦, and security 🔐. I’m into JavaScript ⚡, React ⚛️, C#, and
              I’ve worked a lot with HTML, CSS, Sass, and Angular. I’m all about
              crafting smooth ✨, high-quality 💎, user-friendly 💡 solutions. I
              love teaming up with passionate people 🤝, staying curious 🧠, and
              picking up new tech to keep things fresh (I’m looking at you,
              Flutter 👀). Oh — and I speak advanced English 🌍 (EF SET C1), so
              working with global teams is no problem!
            </p>
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

      <section
        id="projects"
        className="min-h-screen bg-gray-900 text-white p-8"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">
          My Projects & Work Experience 💼✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer block p-6 bg-gray-800 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-4">{project.description}</p>

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
                {selectedProject.title}
              </h2>
              <p className="mb-4">{selectedProject.details}</p>
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
    </main>
  );
}
