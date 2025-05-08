import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          hero: {
            title: "Hi, I'm Felipe Moraes 👋",
            subtitle: "Full-stack developer with a strong front-end focus",
            cta: "View My Work"
          },
          about: {
            title: "About Me",
            description: "Hey! 👋 I’m a senior full-stack dev with 7+ years of experience building cool websites and web apps across e-commerce, banking, and security companies. I’m into JavaScript, React, C#, and I’ve worked a lot with HTML, CSS, Sass, Angular and SQL. I love teaming up with passionate people, staying curious, and picking up new tech to keep things fresh (I’m diving into Flutter right now to expand my mobile development skills.). Oh — and I speak advanced English 🌍 (EF SET C1), so working with global teams is no problem!"
          },
          projects: {
            title: "My Projects & Work Experience",
            currentlyBadge: "Currently Working 🟢",
            workTypeBadge: "Work Experience",
            personalTypeBadge: "Personal Project",
            linkSite: "Click here to open the site in a new tab",
            linkGithub: "View on GitHub",
            spread: {
              title: "Spread Technology · Full Stack Developer",
              description: "Part of a global healthcare project, working remotely from Brazil 🇧🇷.",
              details: "As a Full Stack Developer, I contributed to feature development, bug fixing, functionality testing, code review, and third-party API integration. I worked with C#, SQL, React, HTML, CSS, and Metronic, collaborating daily with an international team across time zones using English.",
              date: "Mar 2024 - Present"
            },
            cwiEcommerce: {
              title: "CWI Software · Frontend Developer",
              description: "Worked on a major Brazilian footwear e-commerce platform, as part of a large remote team.",
              details: "As a Frontend Developer, I worked on feature development, bug fixing, functionality testing, mentoring, code reviews, and led small projects. Key projects included:\n\n- Find Your Location: Led the development of a feature letting users check local store availability using geolocation.\n- 3D Shoe Models: Led a feature enabling users to customize 3D shoe models with text and textures.",
              date: "Jan 2020 - Jul 2023"
            },
            cwiBanking: {
              title: "CWI Software · Full Stack Developer",
              description: "Contributed to a banking software solution within a collaborative, agile Scrum team.",
              details: "Worked on feature development, bug fixing, code reviews, unit testing, and functionality testing. The project operated under a microservices architecture.",
              date: "Sep 2018 - Jan 2020"
            },
            cwiSecurity: {
              title: "CWI Software · Full Stack Developer",
              description: "Worked in a small, agile Scrum team, building a robust microservices architecture.",
              details: "Handled feature development, bug fixing, code reviews, unit tests, integration tests, functionality testing, and mentoring.",
              date: "Sep 2015 - Sep 2018"
            },
            cwiCrescer: {
              title: "CWI Software · Projeto Crescer",
              description: "Participated in Projeto Crescer, a focused training program in software development.",
              details: "Received hands-on training across front-end, back-end, UX/UI, and database.",
              date: "Sep 2015 - Dec 2015"
            },
            holdprint: {
              title: "Holdprint Sistemas Inteligentes · Back-End Developer",
              description: "Collaborated with a small team to develop and maintain back-end functionalities for a startup.",
              details: "Handled feature development, bug fixing, and unit testing to support scalable back-end systems.",
              date: "Oct 2014 - Jul 2015"
            },
            liberato: {
              title: "Liberato Salzano · Internship",
              description: "Worked in the school I.T. lab, supporting students and teachers with tech needs.",
              details: "Handled computer maintenance, software installation, and provided support for classroom environments.",
              date: "Jan 2014 - Sep 2014"
            },
            cityhall: {
              title: "City Hall of Novo Hamburgo · Internship",
              description: "Worked as an intern providing I.T. support and maintenance for the city hall’s staff.",
              details: "Handled computer repairs, software installations, support tickets, and employee tech assistance.",
              date: "Jun 2012 - Jan 2014"
            },
            portfolio: {
              title: "Personal Website",
              description: "A creative, interactive personal site to showcase my work, skills, and projects.",
              details: "Built with React, Tailwind CSS and Framer Motion, featuring animations, About Me, and detailed modals.",
              date: "2025"
            },
            adocao: {
              title: "Especialista em Adoção",
              description: "A WordPress site helping families connect with a lawyer specializing in child adoption.",
              details: "Built with WordPress, Jetpack, Google Reviews, and Yoast SEO. User-friendly and informative.",
              date: "2024"
            },
            cssArt: {
              title: "CSS Art",
              description: "A GitHub repository for fun and creative CSS drawings.",
              details: "Built using HTML and CSS only — no images or SVGs — just pure styling magic.",
              date: "2023"
            },
            recipeFinder: {
              title: "Recipe Finder",
              description: "A web app to search and discover new recipes using the Edamam API.",
              details: "Under construction. Uses React, Vite, Sass, Swiper, Node and Express to fetch recipe suggestions from the Edaman API.",
              date: "2025"
            }
          },
        },
      },
      pt: {
        translation: {
          hero: {
            title: "Olá, eu sou Felipe Moraes 👋",
            subtitle: "Desenvolvedor full-stack com forte foco em front-end",
            cta: "Veja Meu Trabalho"
          },
          about: {
            title: "Sobre Mim",
            description: "Oi! 👋 Sou um desenvolvedor full-stack sênior com mais de 7 anos de experiência construindo sites e aplicativos web em empresas de e-commerce, bancos e segurança. Estou por dentro de JavaScript, React, C#, e trabalhei bastante com HTML, CSS, Sass, Angular e SQL. Adoro trabalhar em equipe com pessoas apaixonadas, ficar curioso e aprender novas tecnologias para manter as coisas interessantes (atualmente estou me aprofundando no Flutter para expandir minhas habilidades em desenvolvimento mobile). Ah — e falo inglês avançado 🌍 (EF SET C1), então trabalhar com equipes globais não é problema!"
          },
          projects: {
            title: "Meus Projetos & Experiência Profissional",
            currentlyBadge: "Atualmente Trabalhando 🟢",
            workTypeBadge: "Experiência Profissional",
            personalTypeBadge: "Projeto Pessoal",
            linkSite: "Clique aqui para abrir o site em uma nova aba",
            linkGithub: "Veja no GitHub",
            spread: {
              title: "Spread Technology · Desenvolvedor Full Stack",
              description: "Parte de um projeto global na área da saúde, trabalhando remotamente do Brasil 🇧🇷.",
              details: "Como Desenvolvedor Full Stack, atuei no desenvolvimento de funcionalidades, correção de bugs, testes de funcionalidade, revisão de código e integração com APIs de terceiros. Trabalhei com C#, SQL, React, HTML, CSS e Metronic, colaborando diariamente com uma equipe internacional em diferentes fusos horários usando inglês.",
              date: "Mar 2024 - Presente"
            },
            cwiEcommerce: {
              title: "CWI Software · Desenvolvedor Frontend",
              description: "Atuei em uma grande plataforma de e-commerce de calçados no Brasil, como parte de uma equipe remota.",
              details: "Como desenvolvedor frontend, trabalhei no desenvolvimento de funcionalidades, correção de bugs, testes de funcionalidade, mentoria, revisão de código e liderando pequenos projetos. Projetos principais:\n\n- Encontre Sua Localização: liderando o desenvolvimento de uma funcionalidade para verificar disponibilidade em lojas físicas.\n- Modelos 3D de Calçados: funcionalidade de personalização de modelos 3D com textos e texturas.",
              date: "Jan 2020 - Jul 2023"
            },
            cwiBanking: {
              title: "CWI Software · Desenvolvedor Full Stack",
              description: "Contribuí para uma solução de software bancário dentro de uma equipe ágil Scrum colaborativa.",
              details: "Atuei no desenvolvimento de funcionalidades, correção de bugs, revisão de código, testes unitários e testes funcionais. Projeto com arquitetura de microsserviços.",
              date: "Set 2018 - Jan 2020"
            },
            cwiSecurity: {
              title: "CWI Software · Desenvolvedor Full Stack",
              description: "Trabalhei em uma equipe ágil enxuta, desenvolvendo uma arquitetura robusta de microsserviços.",
              details: "Atuei em desenvolvimento, correção de bugs, revisão de código, testes unitários, testes de integração, testes funcionais e mentoria.",
              date: "Set 2015 - Set 2018"
            },
            cwiCrescer: {
              title: "CWI Software · Projeto Crescer",
              description: "Participei do Projeto Crescer, um programa de formação intensivo em desenvolvimento de software.",
              details: "Treinamento prático em front-end, back-end, UX/UI e banco de dados.",
              date: "Set 2015 - Dez 2015"
            },
            holdprint: {
              title: "Holdprint Sistemas Inteligentes · Desenvolvedor Back-End",
              description: "Colaborei com uma pequena equipe para desenvolver e manter funcionalidades de back-end para uma startup.",
              details: "Desenvolvimento de funcionalidades, correção de bugs e testes unitários.",
              date: "Out 2014 - Jul 2015"
            },
            liberato: {
              title: "Liberato Salzano · Estágio",
              description: "Atuei no laboratório de informática da escola, dando suporte técnico a alunos e professores.",
              details: "Manutenção de computadores, instalação de softwares e suporte técnico no ambiente educacional.",
              date: "Jan 2014 - Set 2014"
            },
            cityhall: {
              title: "Prefeitura de Novo Hamburgo · Estágio",
              description: "Estágio prestando suporte e manutenção em TI para os funcionários da prefeitura.",
              details: "Reparo de computadores, instalação de softwares, atendimento de chamados e auxílio técnico aos colaboradores.",
              date: "Jun 2012 - Jan 2014"
            },
            portfolio: {
              title: "Site Pessoal",
              description: "Um site pessoal interativo para apresentar meus trabalhos, habilidades e projetos.",
              details: "Construído com React, Tailwind CSS e Framer Motion, com animações, seção sobre mim e modais para detalhes.",
              date: "2025"
            },
            adocao: {
              title: "Especialista em Adoção",
              description: "Site WordPress para ajudar famílias a se conectarem com advogada especializados em adoção.",
              details: "Desenvolvido com WordPress, Jetpack, widget de avaliações do Google e Yoast SEO. Intuitivo e informativo.",
              date: "2024"
            },
            cssArt: {
              title: "CSS Art",
              description: "Repositório no GitHub com criações artísticas usando apenas HTML e CSS.",
              details: "Feito puramente com HTML e CSS — sem imagens ou SVGs — apenas criatividade no código.",
              date: "2023"
            },
            recipeFinder: {
              title: "Recipe Finder",
              description: "Site para buscar e descobrir receitas usando a API do Edamam.",
              details: "Em Construção. Utiliza React, Vite, Sass, Swiper e Express para exibir sugestões de receitas de forma elegante.",
              date: "2025"
            }
          },
        }
      }
    }
  });

export default i18n;
