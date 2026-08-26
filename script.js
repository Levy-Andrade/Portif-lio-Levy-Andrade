/*=====================================================================
  PORTFÓLIO LEVY ANDRADE — SCRIPT.JS
  Interatividade Completa, Terminal, i18n, Canvas Global, Temas & Projetos
======================================================================*/

document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================================
     01. SISTEMA DE INTERNACIONALIZAÇÃO (i18n)
  =================================================================== */
  const translations = {
    pt: {
      menu_home: "Home",
      menu_about: "Sobre",
      menu_education: "Formação",
      menu_skills: "Skills",
      menu_soft: "Perfil",
      menu_zyntek: "Zyntek",
      menu_projects: "Projetos",
      menu_contact: "Contatos",
      contact_button: "Entre em contato",
      whatsapp_tooltip: "Fale comigo!",
      mobile_theme_label: "Tema",
      hero_badge: "Full Stack Developer",
      hero_stack: "Desenvolvedor Full Stack | JavaScript | TypeScript | React | Java | Spring Boot | MySQL",
      hero_description: "Desenvolvedor focado em construir aplicações web completas e eficientes. Combino a robustez do ecossistema Java no backend com a flexibilidade do JavaScript e TypeScript no frontend para transformar regras de negócio em sistemas funcionais, seguros e de alto impacto.",
      hero_contact: "Entre em Contato",
      hero_cv: "Download Currículo",
      hero_status: "Disponível para novos projetos",
      scroll_text: "Role para explorar",
      about_badge: "— SOBRE MIM —",
      about_title: "Construindo soluções através da tecnologia.",
      about_subtitle: "Transformando desafios em experiências digitais inteligentes.",
      about_heading: "Muito prazer, sou Levy Andrade.",
      about_text_one: "Minha trajetória profissional é marcada pela busca constante por evolução, unindo tecnologia, engenharia de software e pensamento estratégico para desenvolver soluções digitais que geram valor para empresas e usuários.",
      about_text_two: "Atualmente concentro meus estudos e projetos em Engenharia de Software, desenvolvimento Full Stack e UI/UX Design, construindo aplicações modernas com foco em qualidade de código, arquitetura escalável e experiência do usuário.",
      about_text_three: "Além do desenvolvimento técnico, sou co-fundador da Zyntek, onde aplico minha experiência para estruturar ecossistemas web robustos, landing pages institucionais de alta conversão e plataformas digitais completas.",
      about_stat_dev: "Developer",
      about_stat_design: "Designer",
      about_button: "Vamos Conversar",
      education_badge: "— FORMAÇÃO —",
      education_title: "Jornada de aprendizado contínuo.",
      education_subtitle: "Cada etapa construída com dedicação e propósito.",
      education_degrees_heading: "Graduação Acadêmica",
      education_ads_period: "Fev/2023 – Abr/2026",
      education_ads_title: "Análise e Desenvolvimento de Sistemas",
      education_ads_institution: "Graduação — UNIPAR (Universidade Paranaense)",
      education_ads_text: "Formação técnica e acadêmica em desenvolvimento de sistemas, algoritmos, banco de dados, engenharia de software e fundamentos da computação aplicada ao desenvolvimento de soluções modernas.",
      education_eng_period: "Início previsto: 2027",
      education_eng_title: "Graduação em Engenharia de Software",
      education_eng_institution: "Nova Graduação • Planejada",
      education_eng_text: "Próximo passo acadêmico focado no aprofundamento de arquitetura de sistemas complexos, qualidade de processos de software, gerência de projetos e engenharia de requisitos corporativos.",
      education_featured_heading: "Certificações & Formações em Destaque",
      education_aws_period: "Concluído",
      education_aws_title: "AWS Certified AI Practitioner (AIF-C01)",
      education_aws_text_meta: "Udemy · Curso preparatório para certificação",
      education_gcp_period: "Concluído",
      education_gcp_title: "GCP — Associate Cloud Engineer",
      education_gcp_text_meta: "Udemy · Curso preparatório para certificação",
      education_ocp_period: "Concluído",
      education_ocp_title: "Java SE 11 Developer — 1Z0-819 OCP (Parte 1)",
      education_ocp_text_meta: "Udemy · Preparação para certificação Oracle",
      education_java_period: "Em andamento",
      education_java_title: "Java e Spring Boot — Formação Completa",
      education_java_text_meta: "Udemy · APIs REST, microsserviços, JWT, Spring Security, JPA/Hibernate",
      education_courses_heading: "Formação Complementar",
      education_azure_period: "Concluído",
      education_azure_title: "DP-420: Microsoft Azure Cosmos DB",
      education_azure_text_meta: "Udemy · Guia de exame hands-on",
      education_f5_period: "Concluído",
      education_f5_title: "F5 201 Exam Preparation",
      education_f5_text_meta: "Udemy · Curso completo com exames práticos",
      education_db_period: "Concluído",
      education_db_title: "Administrando Banco de Dados",
      education_db_text_meta: "Fundação Bradesco — Escola Virtual · Curso autoinstrucional",
      education_csharp1_period: "Concluído",
      education_csharp1_title: "C# Completo — POO + Projetos",
      education_csharp1_text_meta: "Udemy · Programação orientada a objetos aplicada em projetos práticos",
      education_csharp2_period: "Concluído",
      education_csharp2_title: "C# Primeiros Passos",
      education_csharp2_text_meta: "Udemy · Lógica de programação e construção de algoritmos",
      education_python_period: "Concluído",
      education_python_title: "Python: Domine a Programação",
      education_python_text_meta: "Udemy · Fundamentos da linguagem aplicados a scripts e automações",
      education_english_period: "Em andamento",
      education_english_title: "Inglês do Zero ao Avançado",
      education_english_text_meta: "Udemy · Comunicação técnica e leitura de documentação",
      education_highlight_title: "Aprendizado Contínuo",
      education_highlight_text: "Acredito que a evolução profissional é construída diariamente através da prática, pesquisa e constante atualização tecnológica, buscando sempre excelência no desenvolvimento de software moderno.",
      skills_badge: "— SKILLS —",
      skills_title: "Tecnologias que transformam ideias em soluções.",
      skills_description: "Uma combinação entre engenharia de software, desenvolvimento full stack e design de experiência para construir aplicações modernas, escaláveis e de alto desempenho.",
      skills_cat_languages: "Linguagens de Programação",
      skills_cat_frontend: "Front-end — Frameworks & Bibliotecas",
      skills_cat_backend: "Back-end — Frameworks & APIs",
      skills_cat_database: "Banco de Dados",
      skills_cat_cloud: "Cloud & Infraestrutura",
      skills_cat_tools: "Ferramentas & Versionamento",
      skills_cat_agile: "Metodologias Ágeis",
      skills_cat_design: "Design & Prototipação",
      skills_footer_title: "Evolução Contínua",
      skills_footer_text: "A tecnologia evolui diariamente e meu objetivo é acompanhar essa transformação através de boas práticas de engenharia, entregando soluções modernas, performáticas, seguras e escaláveis.",
      soft_badge: "— PERFIL PROFISSIONAL —",
      soft_title: "Além do código: como eu entrego valor.",
      soft_subtitle: "Competências comportamentais que sustentam entregas consistentes dentro de um time de engenharia de software.",
      soft_problem_title: "Resolução Analítica de Problemas",
      soft_problem_text: "Identifico gargalos técnicos com rapidez e proponho soluções eficientes, escaláveis e sustentáveis a longo prazo.",
      soft_team_title: "Colaboração em Equipe",
      soft_team_text: "Adapto-me rapidamente a ambientes dinâmicos, comunico-me com clareza e contribuo ativamente com o time.",
      soft_autonomy_title: "Autonomia e Proatividade",
      soft_autonomy_text: "Assumo responsabilidades e conduzo desafios técnicos até a entrega, sem depender de supervisão constante.",
      soft_learning_title: "Curva de Aprendizado Rápida",
      soft_learning_text: "Absorvo novas tecnologias, ferramentas e regras de negócio com agilidade, aplicando-as em contexto real.",
      soft_organization_title: "Organização e Disciplina Técnica",
      soft_organization_text: "Estruturo meu trabalho com atenção constante a padrões de código e boas práticas de desenvolvimento.",
      soft_agile_title: "Metodologias Ágeis",
      soft_agile_text: "Familiaridade com rituais Scrum, sprints e entregas incrementais em times multidisciplinares.",
      soft_automation_title: "Mentalidade de Automação",
      soft_automation_text: "Busco automatizar processos repetitivos, reduzindo retrabalho e elevando a eficiência do time.",
      zyntek_badge: "— ZYNTEK —",
      zyntek_title: "Engenharia de Software, Design e Estratégia Digital.",
      zyntek_subtitle: "Desenvolvendo plataformas web e soluções digitais sob medida com alto padrão técnico.",
      zyntek_company_title: "Construindo a próxima geração de produtos digitais.",
      zyntek_text_intro: "A Zyntek é um estúdio de desenvolvimento e inovação digital focado em criar aplicações web robustas, sistemas corporativos e experiências digitais memoráveis. Nascemos com o propósito de unir engenharia de software sólida e design de produto refinado.",
      zyntek_text_two: "Sob a liderança técnica de Levy Andrade e sócios co-fundadores, combinamos o poder do ecossistema Java e Spring Boot no backend com interfaces dinâmicas em React, TypeScript e Tailwind CSS, garantindo que cada projeto entregue velocidade, segurança e escalabilidade real.",
      zyntek_text_three: "O Zynk é a nossa identidade e guardião de qualidade, representando nosso compromisso com código limpo, foco na experiência do usuário e entrega ágil para transformar regras de negócio em sistemas de alto valor.",
      zyntek_stat_tech: "Sistemas Escaláveis",
      zyntek_stat_design: "Interfaces de Alto Padrão",
      zyntek_stat_ai: "Soluções Inteligentes",
      zyntek_button: "Conheça a Zyntek",
      zyntek_projects: "Ver Projetos",
      projects_badge: "— PROJETOS —",
      projects_title: "Soluções digitais desenvolvidas para gerar impacto.",
      projects_subtitle: "Cada projeto representa uma combinação entre engenharia de software, design estratégico e tecnologia moderna.",
      project_button: "Ver Projeto",
      project_ras: "Landing Page institucional de alta performance, desenvolvida com foco em conversão, animações modernas e experiência mobile premium.",
      project_zyntek: "Plataforma institucional construída com identidade visual futurista, animações de alta fidelidade e engenharia de código focada em escalabilidade corporativa.",
      project_portfolio: "Portfólio profissional de publicidade e branding, desenvolvido com alta performance, transições fluidas, interface clean e experiência totalmente responsiva.",
      project_system: "Landing page institucional desenvolvida para o segmento automotivo, focada em conversão, agendamentos e exibição de serviços com design moderno e totalmente responsivo.",
      project_webgame: "Aplicação web dinâmica que replica a mecânica de combate por turnos da franquia Pokémon. Construído integrando uma API escalável a um ecossistema front-end otimizado.",
      project_finance: "Dashboard financeiro inteligente projetado para transformar dados complexos em decisões estratégicas através de relatórios e gráficos interativos em tempo real.",
      projects_footer_title: "Tem uma ideia para transformar em realidade?",
      projects_footer_text: "Vamos construir uma solução moderna, escalável e personalizada para o seu negócio utilizando as melhores práticas de engenharia de software.",
      projects_footer_button: "Iniciar Projeto",
      modal_deploy: "Acessar Deploy",
      modal_repo: "Acessar Repositório",
      contact_badge: "— CONTATOS —",
      contact_title: "Vamos construir o futuro do seu projeto.",
      contact_description: "Estou disponível para oportunidades, projetos, parcerias estratégicas e desenvolvimento de soluções digitais personalizadas.",
      label_name: "Nome Completo *",
      label_company: "Nome da Empresa",
      label_phone: "Telefone / WhatsApp *",
      label_message: "Descrição da Ideia do Projeto *",
      contact_send: "Inicie seu Projeto via WhatsApp",
      hub_button: "Vamos Conversar",
      footer_description: "Não serei derrotado pelos limites atuais. Estou aqui para criar soluções que desafiam o que é possível através da engenharia de software e design de vanguarda.",
      footer_navigation: "Navegação",
      footer_stack: "Stack",
      footer_contact: "Zyntek",
      footer_cta_title: "Vamos construir algo extraordinário?",
      footer_cta_text: "Transformo desafios complexos em soluções digitais de alto impacto. Vamos construir o próximo projeto juntos?",
      footer_cta_button: "Entre em Contato",
      footer_copyright: "© 2026 Portfólio Levy Andrade. Todos os direitos reservados.",
      footer_signature: "Desenvolvido por Levy Andrade e Co-fundador da Zyntek."
    },
    en: {
      menu_home: "Home",
      menu_about: "About",
      menu_education: "Education",
      menu_skills: "Skills",
      menu_soft: "Profile",
      menu_zyntek: "Zyntek",
      menu_projects: "Projects",
      menu_contact: "Contact",
      contact_button: "Get in touch",
      whatsapp_tooltip: "Chat with me!",
      mobile_theme_label: "Theme",
      hero_badge: "Full Stack Developer",
      hero_stack: "Full Stack Developer | JavaScript | TypeScript | React | Java | Spring Boot | MySQL",
      hero_description: "Developer focused on building complete, efficient web applications. Combining Java backend robustness with JavaScript and TypeScript frontend versatility to transform business requirements into scalable, secure, and impactful systems.",
      hero_contact: "Get in Touch",
      hero_cv: "Download Resume",
      hero_status: "Available for new projects",
      scroll_text: "Scroll to explore",
      about_badge: "— ABOUT ME —",
      about_title: "Building solutions through technology.",
      about_subtitle: "Turning complex challenges into intelligent digital experiences.",
      about_heading: "Nice to meet you, I'm Levy Andrade.",
      about_text_one: "My career path is driven by continuous learning and evolution, combining technology, software engineering, and strategic thinking to build digital solutions that truly deliver value.",
      about_text_two: "Currently focused on Software Engineering, Full Stack development, and UI/UX Design, creating modern applications with emphasis on code quality, architecture, and user experience.",
      about_text_three: "In addition to engineering, I am co-founder of Zyntek, where I craft high-end web ecosystems, high-converting landing pages, and scalable digital solutions.",
      about_stat_dev: "Developer",
      about_stat_design: "Designer",
      about_button: "Let's Talk",
      education_badge: "— EDUCATION —",
      education_title: "Continuous learning journey.",
      education_subtitle: "Every milestone built with passion and dedication.",
      education_degrees_heading: "Academic Degrees",
      education_ads_period: "Feb/2023 – Apr/2026",
      education_ads_title: "Analysis and Systems Development",
      education_ads_institution: "Bachelor's Degree — UNIPAR University",
      education_ads_text: "Technical and academic foundation in software development, algorithms, databases, software engineering, and applied computer science.",
      education_eng_period: "Expected: 2027",
      education_eng_title: "B.S. in Software Engineering",
      education_eng_institution: "Second Degree • Planned",
      education_eng_text: "Advanced academic focus on complex distributed architectures, software quality, project management, and requirements engineering.",
      education_featured_heading: "Featured Certifications & Training",
      education_aws_period: "Completed",
      education_aws_title: "AWS Certified AI Practitioner (AIF-C01)",
      education_aws_text_meta: "Udemy · Certification Preparation Course",
      education_gcp_period: "Completed",
      education_gcp_title: "GCP — Associate Cloud Engineer",
      education_gcp_text_meta: "Udemy · Cloud Engineering Certification Prep",
      education_ocp_period: "Completed",
      education_ocp_title: "Java SE 11 Developer — 1Z0-819 OCP (Part 1)",
      education_ocp_text_meta: "Udemy · Oracle Certification Preparation",
      education_java_period: "In Progress",
      education_java_title: "Java & Spring Boot — Complete Track",
      education_java_text_meta: "Udemy · REST APIs, Microservices, JWT, Spring Security, JPA/Hibernate",
      education_courses_heading: "Complementary Courses",
      education_azure_period: "Completed",
      education_azure_title: "DP-420: Microsoft Azure Cosmos DB",
      education_azure_text_meta: "Udemy · Hands-on Exam Prep",
      education_f5_period: "Completed",
      education_f5_title: "F5 201 Exam Preparation",
      education_f5_text_meta: "Udemy · Complete Training with Practice Exams",
      education_db_period: "Completed",
      education_db_title: "Database Administration",
      education_db_text_meta: "Fundação Bradesco · Database Architecture & SQL",
      education_csharp1_period: "Completed",
      education_csharp1_title: "Complete C# — OOP + Projects",
      education_csharp1_text_meta: "Udemy · Object-Oriented Programming with real applications",
      education_csharp2_period: "Completed",
      education_csharp2_title: "C# Fundamentals",
      education_csharp2_text_meta: "Udemy · Programming Logic & Algorithms",
      education_python_period: "Completed",
      education_python_title: "Python: Master the Language",
      education_python_text_meta: "Udemy · Scripts, Data Processing & Automations",
      education_english_period: "In Progress",
      education_english_title: "English: Zero to Advanced",
      education_english_text_meta: "Udemy · Technical Communication & Documentation",
      education_highlight_title: "Lifelong Learning",
      education_highlight_text: "I believe true engineering growth is forged daily through deliberate practice, research, and keeping up with cutting-edge industry standards.",
      skills_badge: "— SKILLS —",
      skills_title: "Technologies that turn ideas into software.",
      skills_description: "A combination of software engineering, full stack development, and design to build modern, scalable, and high-performance applications.",
      skills_cat_languages: "Programming Languages",
      skills_cat_frontend: "Front-end — Frameworks & Libraries",
      skills_cat_backend: "Back-end — Frameworks & APIs",
      skills_cat_database: "Databases",
      skills_cat_cloud: "Cloud & Infrastructure",
      skills_cat_tools: "Tools & Version Control",
      skills_cat_agile: "Agile Methodologies",
      skills_cat_design: "Design & Prototyping",
      skills_footer_title: "Continuous Evolution",
      skills_footer_text: "Technology evolves every day. My mission is to lead that transformation through clean code, modern architecture, and exceptional software quality.",
      soft_badge: "— PROFESSIONAL PROFILE —",
      soft_title: "Beyond code: how I deliver value.",
      soft_subtitle: "Core interpersonal and behavioral skills that empower consistent, high-standard software delivery.",
      soft_problem_title: "Analytical Problem Solving",
      soft_problem_text: "Rapidly diagnosing technical bottlenecks and delivering sustainable, scalable, and robust solutions.",
      soft_team_title: "Team Collaboration",
      soft_team_text: "Seamlessly adapting to agile teams with clear, proactive, and transparent communication.",
      soft_autonomy_title: "Autonomy & Ownership",
      soft_autonomy_text: "Taking complete ownership of complex technical challenges from inception to production delivery.",
      soft_learning_title: "Fast Learning Curve",
      soft_learning_text: "Quickly mastering new frameworks, technologies, and domain rules to apply them in real-world scenarios.",
      soft_organization_title: "Technical Discipline",
      soft_organization_text: "Structuring projects with strict adherence to architectural standards and clean code conventions.",
      soft_agile_title: "Agile Mindset",
      soft_agile_text: "Experienced with Scrum workflows, sprint planning, and rapid incremental delivery cycles.",
      soft_automation_title: "Automation Focus",
      soft_automation_text: "Automating repetitive workflows to minimize friction and boost team throughput.",
      zyntek_badge: "— ZYNTEK —",
      zyntek_title: "Software Engineering, Design & Digital Strategy.",
      zyntek_subtitle: "Building custom web platforms and high-standard digital products.",
      zyntek_company_title: "Crafting the next generation of digital platforms.",
      zyntek_text_intro: "Zyntek is a digital development studio focused on engineering robust web applications, enterprise systems, and memorable user experiences.",
      zyntek_text_two: "Led by Levy Andrade and co-founders, we blend the power of Java and Spring Boot with reactive frontends in React, TypeScript, and Tailwind CSS.",
      zyntek_text_three: "Zynk is our symbol of engineering excellence, embodying our commitment to clean code, user-centric design, and scalable execution.",
      zyntek_stat_tech: "Scalable Systems",
      zyntek_stat_design: "High-End UI/UX",
      zyntek_stat_ai: "Smart Automations",
      zyntek_button: "Discover Zyntek",
      zyntek_projects: "View Projects",
      projects_badge: "— PROJECTS —",
      projects_title: "Digital solutions engineered for real impact.",
      projects_subtitle: "Each project represents a blend of clean architecture, strategic UI/UX, and modern tech.",
      project_button: "View Project",
      project_ras: "High-performance landing page designed for conversion, featuring interactive pricing tables and mobile-first experience.",
      project_zyntek: "Corporate digital ecosystem designed with futuristic visual identity, high-fidelity animations, and scalable web architecture.",
      project_portfolio: "Advertising and branding portfolio developed with ultra-fast transitions, clean UI, and responsive design.",
      project_system: "Automotive institutional landing page focused on appointment bookings and premium service showcase.",
      project_webgame: "Dynamic web turn-based battle simulator inspired by Pokémon, featuring asynchronous state management and real-time interface rendering.",
      project_finance: "Intelligent financial analytics dashboard turning complex cash-flow metrics into actionable insights in real-time.",
      projects_footer_title: "Have a project in mind?",
      projects_footer_text: "Let's build a modern, high-performance, and scalable digital solution tailored to your goals.",
      projects_footer_button: "Start Project",
      modal_deploy: "Visit Live Deploy",
      modal_repo: "View Source Code",
      contact_badge: "— CONTACT —",
      contact_title: "Let's build the future of your project.",
      contact_description: "Available for new software challenges, enterprise projects, and strategic technical partnerships.",
      label_name: "Full Name *",
      label_company: "Company Name",
      label_phone: "Phone / WhatsApp *",
      label_message: "Project Details *",
      contact_send: "Start Project via WhatsApp",
      hub_button: "Let's Connect",
      footer_description: "I will not be defeated by current limits. I am here to build software solutions that challenge what is possible.",
      footer_navigation: "Navigation",
      footer_stack: "Stack",
      footer_contact: "Zyntek",
      footer_cta_title: "Ready to build something extraordinary?",
      footer_cta_text: "I transform complex ideas into reliable, high-impact digital systems. Let's create together.",
      footer_cta_button: "Get in Touch",
      footer_copyright: "© 2026 Levy Andrade Portfolio. All rights reserved.",
      footer_signature: "Built by Levy Andrade & Co-founder of Zyntek."
    },
    es: {
      menu_home: "Inicio",
      menu_about: "Sobre Mí",
      menu_education: "Formación",
      menu_skills: "Habilidades",
      menu_soft: "Perfil",
      menu_zyntek: "Zyntek",
      menu_projects: "Proyectos",
      menu_contact: "Contacto",
      contact_button: "Contáctame",
      whatsapp_tooltip: "¡Hablemos!",
      mobile_theme_label: "Tema",
      hero_badge: "Full Stack Developer",
      hero_stack: "Desarrollador Full Stack | JavaScript | TypeScript | React | Java | Spring Boot | MySQL",
      hero_description: "Desarrollador enfocado en construir aplicaciones web completas y eficientes. Combino la solidez de Java en backend con la versatilidad de JavaScript y TypeScript en frontend para transformar reglas de negocio en soluciones seguras y de alto impacto.",
      hero_contact: "Contáctame",
      hero_cv: "Descargar CV",
      hero_status: "Disponible para nuevos proyectos",
      scroll_text: "Desplaza para explorar",
      about_badge: "— SOBRE MÍ —",
      about_title: "Construyendo soluciones a través de la tecnología.",
      about_subtitle: "Transformando desafíos en experiencias digitales inteligentes.",
      about_heading: "Mucho gusto, soy Levy Andrade.",
      about_text_one: "Mi trayectoria profesional se basa en la evolución constante, combinando tecnología, diseño estratégico y visión empresarial para crear soluciones que generen verdadero valor.",
      about_text_two: "Actualmente concentro mis estudios en Ingeniería de Software, desarrollo Full Stack y UI/UX Design, construyendo aplicaciones modernas con enfoque en escalabilidad y experiencia de usuario.",
      about_text_three: "Además, soy cofundador de Zyntek, donde diseño soluciones web prémium y arquitecturas digitales de alto rendimiento.",
      about_stat_dev: "Developer",
      about_stat_design: "Designer",
      about_button: "Hablemos",
      education_badge: "— FORMACIÓN —",
      education_title: "Jornada de aprendizaje continuo.",
      education_subtitle: "Cada etapa construida com dedicación y propósito.",
      education_degrees_heading: "Grados Académicos",
      education_ads_period: "Feb/2023 – Abr/2026",
      education_ads_title: "Análisis y Desarrollo de Sistemas",
      education_ads_institution: "Graduación — Universidad UNIPAR",
      education_ads_text: "Formación técnica y académica en desarrollo de software, algoritmos, bases de datos e ingeniería de software aplicada.",
      education_eng_period: "Inicio previsto: 2027",
      education_eng_title: "Grado en Ingeniería de Software",
      education_eng_institution: "Segunda Carrera • Planificada",
      education_eng_text: "Profundización académica en arquitectura de sistemas distribuidos, calidad de software y gestión de proyectos.",
      education_featured_heading: "Certificaciones y Formaciones Destacadas",
      education_aws_period: "Completado",
      education_aws_title: "AWS Certified AI Practitioner (AIF-C01)",
      education_aws_text_meta: "Udemy · Preparación para certificación AWS",
      education_gcp_period: "Completado",
      education_gcp_title: "GCP — Associate Cloud Engineer",
      education_gcp_text_meta: "Udemy · Preparación para certificación Google Cloud",
      education_ocp_period: "Completado",
      education_ocp_title: "Java SE 11 Developer — 1Z0-819 OCP (Parte 1)",
      education_ocp_text_meta: "Udemy · Preparación para certificación Oracle",
      education_java_period: "En Curso",
      education_java_title: "Java y Spring Boot — Formação Completa",
      education_java_text_meta: "Udemy · APIs REST, Microservicios, JWT, Spring Security, JPA/Hibernate",
      education_courses_heading: "Formación Complementaria",
      education_azure_period: "Completado",
      education_azure_title: "DP-420: Microsoft Azure Cosmos DB",
      education_azure_text_meta: "Udemy · Guía práctica para examen Azure",
      education_f5_period: "Completado",
      education_f5_title: "F5 201 Exam Preparation",
      education_f5_text_meta: "Udemy · Curso completo con exámenes prácticos",
      education_db_period: "Completado",
      education_db_title: "Administración de Bases de Datos",
      education_db_text_meta: "Fundación Bradesco · Modelado y SQL",
      education_csharp1_period: "Completado",
      education_csharp1_title: "C# Completo — POO + Proyectos",
      education_csharp1_text_meta: "Udemy · Programación orientada a objetos con proyectos reales",
      education_csharp2_period: "Completado",
      education_csharp2_title: "C# Primeros Pasos",
      education_csharp2_text_meta: "Udemy · Lógica de programación y algoritmos",
      education_python_period: "Completado",
      education_python_title: "Python: Domina la Programación",
      education_python_text_meta: "Udemy · Scripts, análisis y automatización",
      education_english_period: "En Curso",
      education_english_title: "Inglés desde Cero a Avanzado",
      education_english_text_meta: "Udemy · Comunicación técnica y lectura de documentación",
      education_highlight_title: "Aprendizaje Continuo",
      education_highlight_text: "La evolución profesional se forja diariamente mediante la práctica, la investigación y la adopción de las mejores tecnologías de la industria.",
      skills_badge: "— SKILLS —",
      skills_title: "Tecnologías que convierten ideas en software.",
      skills_description: "Una combinación entre ingeniería de software, desarrollo full stack y diseño para construir aplicaciones modernas y escalables.",
      skills_cat_languages: "Lenguajes de Programación",
      skills_cat_frontend: "Front-end — Frameworks y Librerías",
      skills_cat_backend: "Back-end — Frameworks y APIs",
      skills_cat_database: "Bases de Datos",
      skills_cat_cloud: "Cloud e Infraestructura",
      skills_cat_tools: "Herramientas y Control de Versiones",
      skills_cat_agile: "Metodologías Ágiles",
      skills_cat_design: "Diseño y Prototipado",
      skills_footer_title: "Evolución Continua",
      skills_footer_text: "La tecnología evoluciona a diario y mi objetivo es liderar esa transformación con código limpio y altos estándares de ingeniería.",
      soft_badge: "— PERFIL PROFISSIONAL —",
      soft_title: "Más allá del código: cómo aporto valor.",
      soft_subtitle: "Competencias clave que respaldan entregas consistentes y confiables en equipos de software.",
      soft_problem_title: "Resolución Analítica de Problemas",
      soft_problem_text: "Diagnóstico rápido de problemas técnicos y entrega de soluciones escalables a largo plazo.",
      soft_team_title: "Colaboración en Equipo",
      soft_team_text: "Adaptación ágil a dinámicas de equipo con comunicación clara y transparente.",
      soft_autonomy_title: "Autonomía y Proactividad",
      soft_autonomy_text: "Responsabilidad integral en el desarrollo y entrega de soluciones técnicas complejas.",
      soft_learning_title: "Rápida Curva de Aprendizaje",
      soft_learning_text: "Asimilación veloz de nuevas herramientas y reglas de negocio aplicadas al entorno real.",
      soft_organization_title: "Disciplina Técnica",
      soft_organization_text: "Estructuración de proyectos con rigurosa atención a buenas prácticas de código.",
      soft_agile_title: "Metodologías Ágiles",
      soft_agile_text: "Experiencia en rituales Scrum, sprints e entregas incrementales de alto valor.",
      soft_automation_title: "Mentalidade de Automatización",
      soft_automation_text: "Automatización de procesos recurrentes para elevar la eficiencia operativa.",
      zyntek_badge: "— ZYNTEK —",
      zyntek_title: "Ingeniería de Software, Diseño y Estrategia Digital.",
      zyntek_subtitle: "Desarrollando plataformas web y soluciones a medida con alto nivel técnico.",
      zyntek_company_title: "Construyendo la próxima generación de productos digitales.",
      zyntek_text_intro: "Zyntek es un estudio de desarrollo digital enfocado en aplicaciones web robustas, sistemas empresariales y experiencias interactivas.",
      zyntek_text_two: "Liderado por Levy Andrade y sus socios, combinamos Java y Spring Boot con React, TypeScript y Tailwind CSS.",
      zyntek_text_three: "Zynk es nuestro guardián de calidad, reflejando nuestro compromiso con el código limpio y productos escalables.",
      zyntek_stat_tech: "Sistemas Escalables",
      zyntek_stat_design: "Diseño Prémium",
      zyntek_stat_ai: "Automatización Inteligente",
      zyntek_button: "Conoce Zyntek",
      zyntek_projects: "Ver Proyectos",
      projects_badge: "— PROYECTOS —",
      projects_title: "Soluciones digitales para generar impacto.",
      projects_subtitle: "Cada proyecto fusiona arquitectura sólida, diseño estratégico y tecnologías modernas.",
      project_button: "Ver Proyecto",
      project_ras: "Landing page institucional de alto rendimiento, optimizada para conversión y experiencia móvil prémium.",
      project_zyntek: "Ecosistema digital corporativo con identidad futurista, animaciones fluidas y arquitectura escalable.",
      project_portfolio: "Portafolio profesional de publicidad y branding con transiciones fluidas y diseño responsivo.",
      project_system: "Landing page para el sector automotriz, enfocada en reservas de servicios y conversión.",
      project_webgame: "Simulador de combate por turnos Pokémon con gestión de estado asíncrona y renderizado dinámico.",
      project_finance: "Dashboard analítico financiero para transformar datos complejos en decisiones estratégicas.",
      projects_footer_title: "¿Tienes una idea para hacerla realidad?",
      projects_footer_text: "Construyamos una solución moderna, segura y escalable para tu negocio.",
      projects_footer_button: "Iniciar Proyecto",
      modal_deploy: "Ver Deploy en Vivo",
      modal_repo: "Ver Repositorio",
      contact_badge: "— CONTACTO —",
      contact_title: "Construyamos el futuro de tu proyecto.",
      contact_description: "Disponible para nuevas oportunidades, proyectos estratégicos y desarrollo de software a medida.",
      label_name: "Nombre Completo *",
      label_company: "Empresa",
      label_phone: "Teléfono / WhatsApp *",
      label_message: "Detalles del Proyecto *",
      contact_send: "Iniciar Proyecto por WhatsApp",
      hub_button: "Hablemos",
      footer_description: "No seré derrotado por los límites actuales. Estoy aquí para construir soluciones que desafíen lo posible.",
      footer_navigation: "Navegación",
      footer_stack: "Stack",
      footer_contact: "Zyntek",
      footer_cta_title: "¿Listo para crear algo extraordinario?",
      footer_cta_text: "Transformo desafíos complejos en sistemas digitales de alto impacto. Creemos juntos.",
      footer_cta_button: "Ponerse en Contacto",
      footer_copyright: "© 2026 Portafolio Levy Andrade. Todos os direitos reservados.",
      footer_signature: "Desarrollado por Levy Andrade y Cofundador de Zyntek."
    }
  };

  let currentLanguage = localStorage.getItem('preferredLang') || 'pt';

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'pt';
    currentLanguage = lang;
    localStorage.setItem('preferredLang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    const currentLangLabel = document.getElementById('currentLang');
    if (currentLangLabel) {
      currentLangLabel.textContent = lang.toUpperCase();
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
      const btnLang = btn.getAttribute('data-language');
      const isSelected = btnLang === lang;
      btn.classList.toggle('active', isSelected);
      btn.setAttribute('aria-selected', isSelected ? 'true' : 'false');
      btn.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
    });
  }

  // Inicializar i18n
  applyLanguage(currentLanguage);

  // Dropdown de Idioma (Desktop)
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle('open');
      langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Event Listeners de Botões de Idioma (Desktop & Mobile)
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-language');
      if (selectedLang) {
        applyLanguage(selectedLang);
        if (langDropdown) {
          langDropdown.classList.remove('open');
          if (langBtn) langBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });


  /* ===================================================================
     02. CONTROLE DE TEMA (DARK / LIGHT)
  =================================================================== */
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const mobileThemeIcon = document.getElementById('mobileThemeIcon');

  function updateThemeIcons(theme) {
    const iconClass = theme === 'light' ? 'ri-sun-line' : 'ri-moon-clear-line';
    if (themeIcon) themeIcon.className = iconClass;
    if (mobileThemeIcon) mobileThemeIcon.className = iconClass;
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('preferredTheme', theme);
    updateThemeIcons(theme);
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
  }

  const savedTheme = localStorage.getItem('preferredTheme') || 'dark';
  setTheme(savedTheme);

  function toggleTheme() {
    const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);


  /* ===================================================================
     03. PARTICLES CANVAS — REDE NEURAL GLOBAL (EM TODAS AS SEÇÕES)
  =================================================================== */
  const canvas = document.getElementById('networkCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 90);

    const mouse = { x: null, y: null, radius: 170 };

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    window.addEventListener('click', (e) => {
      for (let i = 0; i < 5; i++) {
        const p = new Particle();
        p.x = e.clientX;
        p.y = e.clientY;
        p.vx = (Math.random() - 0.5) * 4;
        p.vy = (Math.random() - 0.5) * 4;
        particles.push(p);
        if (particles.length > particleCount + 20) particles.shift();
      }
    });

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.9;
        this.vy = (Math.random() - 0.5) * 0.9;
        this.radius = Math.random() * 2 + 1.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 2.2;
            this.y -= (dy / distance) * force * 2.2;
          }
        }
      }

      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(155, 130, 245, 0.85)' : 'rgba(124, 92, 240, 0.75)';
        ctx.shadowBlur = isDark ? 8 : 4;
        ctx.shadowColor = isDark ? 'rgba(155, 130, 245, 0.6)' : 'rgba(124, 92, 240, 0.4)';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 145) {
            const alpha = (1 - dist / 145) * (isDark ? 0.45 : 0.35);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDark ? `rgba(155, 130, 245, ${alpha})` : `rgba(124, 92, 240, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }


  /* ===================================================================
     04.1. MODAL PARTICLES CANVAS (ANIMAÇÃO DENTRO DO MODAL)
  =================================================================== */
  const modalCanvas = document.getElementById('modalCanvas');
  let modalAnimationId = null;

  function initModalCanvas() {
    if (!modalCanvas) return;
    const mctx = modalCanvas.getContext('2d');
    let mWidth = (modalCanvas.width = modalCanvas.parentElement.offsetWidth || 700);
    let mHeight = (modalCanvas.height = modalCanvas.parentElement.offsetHeight || 500);

    let mParticles = [];
    const count = 28;

    for (let i = 0; i < count; i++) {
      mParticles.push({
        x: Math.random() * mWidth,
        y: Math.random() * mHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1
      });
    }

    function animateModalParticles() {
      mctx.clearRect(0, 0, mWidth, mHeight);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      for (let i = 0; i < mParticles.length; i++) {
        let p = mParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > mWidth) p.vx *= -1;
        if (p.y < 0 || p.y > mHeight) p.vy *= -1;

        mctx.beginPath();
        mctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        mctx.fillStyle = isDark ? 'rgba(155, 130, 245, 0.5)' : 'rgba(124, 92, 240, 0.4)';
        mctx.fill();

        for (let j = i + 1; j < mParticles.length; j++) {
          let p2 = mParticles[j];
          let d = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d < 110) {
            let a = (1 - d / 110) * 0.25;
            mctx.beginPath();
            mctx.moveTo(p.x, p.y);
            mctx.lineTo(p2.x, p2.y);
            mctx.strokeStyle = isDark ? `rgba(155, 130, 245, ${a})` : `rgba(124, 92, 240, ${a})`;
            mctx.lineWidth = 1;
            mctx.stroke();
          }
        }
      }

      modalAnimationId = requestAnimationFrame(animateModalParticles);
    }

    animateModalParticles();
  }


  /* ===================================================================
     04.2. FOOTER CANVAS (ONDAS SUTIS & PARTÍCULAS NO FUNDO PRETO)
  =================================================================== */
  const footerCanvas = document.getElementById('footerCanvas');
  if (footerCanvas) {
    const fctx = footerCanvas.getContext('2d');
    let fWidth = (footerCanvas.width = footerCanvas.parentElement.offsetWidth || window.innerWidth);
    let fHeight = (footerCanvas.height = footerCanvas.parentElement.offsetHeight || 400);

    window.addEventListener('resize', () => {
      if (footerCanvas.parentElement) {
        fWidth = footerCanvas.width = footerCanvas.parentElement.offsetWidth || window.innerWidth;
        fHeight = footerCanvas.height = footerCanvas.parentElement.offsetHeight || 400;
      }
    });

    let waveStep = 0;
    const fPoints = 35;

    function animateFooterCanvas() {
      fctx.clearRect(0, 0, fWidth, fHeight);
      waveStep += 0.02;

      fctx.beginPath();
      for (let i = 0; i <= fPoints; i++) {
        const x = (fWidth / fPoints) * i;
        const y = fHeight * 0.55 + Math.sin(waveStep + i * 0.25) * 26 + Math.cos(waveStep * 0.6 + i * 0.15) * 14;
        if (i === 0) fctx.moveTo(x, y);
        else fctx.lineTo(x, y);
      }
      fctx.strokeStyle = 'rgba(155, 130, 245, 0.22)';
      fctx.lineWidth = 2;
      fctx.stroke();

      // Segunda onda defasada
      fctx.beginPath();
      for (let i = 0; i <= fPoints; i++) {
        const x = (fWidth / fPoints) * i;
        const y = fHeight * 0.62 + Math.cos(waveStep * 0.8 + i * 0.3) * 22;
        if (i === 0) fctx.moveTo(x, y);
        else fctx.lineTo(x, y);
      }
      fctx.strokeStyle = 'rgba(124, 92, 240, 0.16)';
      fctx.lineWidth = 1.5;
      fctx.stroke();

      requestAnimationFrame(animateFooterCanvas);
    }

    animateFooterCanvas();
  }


  /* ===================================================================
     05. SPEED DIAL FAB (MENU FLUTUANTE MULTIFUNÇÕES)
  =================================================================== */
  const fabContainer = document.getElementById('floatingFabContainer');
  const fabMainBtn = document.getElementById('fabMainBtn');
  const fabScrollTop = document.getElementById('fabScrollTop');

  if (fabContainer && fabMainBtn) {
    fabMainBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = fabContainer.classList.toggle('open');
      fabMainBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!fabContainer.contains(e.target)) {
        fabContainer.classList.remove('open');
        fabMainBtn.setAttribute('aria-expanded', 'false');
      }
    });

    if (fabScrollTop) {
      fabScrollTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        fabContainer.classList.remove('open');
        fabMainBtn.setAttribute('aria-expanded', 'false');
      });
    }
  }


  /* ===================================================================
     06. CUSTOM CURSOR
  =================================================================== */
  const cursorDot = document.getElementById('cursorDot');
  const cursorOutline = document.getElementById('cursorOutline');

  if (cursorDot && cursorOutline && window.matchMedia('(hover: hover)').matches) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });

    function animateCursor() {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverElements = 'a, button, input, textarea, .tech-card, .project-card, .skill-card, .edu-degree-card, .course-card, .fab-main-btn, .fab-item';
    document.querySelectorAll(hoverElements).forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '52px';
        cursorOutline.style.height = '52px';
        cursorOutline.style.borderColor = 'rgba(124, 92, 240, 0.85)';
      });
      el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '36px';
        cursorOutline.style.height = '36px';
        cursorOutline.style.borderColor = 'rgba(155, 130, 245, 0.55)';
      });
    });
  }


  /* ===================================================================
     07. TYPING EFFECT (HERO)
  =================================================================== */
  const typingElement = document.getElementById('typingName');
  if (typingElement) {
    // ✏️ [EDITE AQUI: TÍTULOS E CARGOS DO EFEITO DE DIGITAÇÃO NO HERO]
    const roles = [
      "Levy Andrade",
      "Software Engineer",
      "Full Stack Developer",
      "Co-Founder @ Zyntek",
      "Web Architecture & UI/UX"
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDelay = 2200;

    function typeLoop() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        speed = pauseDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
      }

      setTimeout(typeLoop, speed);
    }

    typeLoop();
  }


  /* ===================================================================
     08. TERMINAL LINUX INTERATIVO
  =================================================================== */
  const termInput = document.getElementById('termInput');
  const termHistory = document.getElementById('termHistory');
  const terminalBody = document.getElementById('terminalBody');

  if (termInput && termHistory && terminalBody) {
    const cmdHistory = [];
    let historyIndex = -1;

    // ✏️ [EDITE AQUI: RESPOSTAS DOS COMANDOS DO TERMINAL INTERATIVO]
    const commands = {
      help: () => `Comandos disponíveis:\n  <span class="t-hl">whoami</span>       - Informações sobre Levy Andrade\n  <span class="t-hl">stack</span>        - Exibe stack de tecnologias (JSON)\n  <span class="t-hl">education</span>    - Cursos e certificações\n  <span class="t-hl">skills</span>       - Competências técnicas\n  <span class="t-hl">projects</span>     - Lista principais projetos\n  <span class="t-hl">zyntek</span>       - Estúdio de desenvolvimento Zyntek\n  <span class="t-hl">contact</span>      - Links para contato e WhatsApp\n  <span class="t-hl">social</span>       - Redes sociais e GitHub\n  <span class="t-hl">status</span>       - Status profissional atual\n  <span class="t-hl">theme</span>        - Alterna tema claro/escuro\n  <span class="t-hl">clear</span>        - Limpa o terminal`,
      
      whoami: () => `levy_andrade\nSoftware Engineer & Co-Founder @ Zyntek\nEspecialista em Java, Spring Boot, React, TypeScript e Engenharia de Software.`,
      
      stack: () => `{\n  "languages": ["Java", "JavaScript", "TypeScript", "C#", "Python", "HTML5", "CSS3"],\n  "frontend":  ["React", "Tailwind CSS", "Vite"],\n  "backend":   ["Spring Boot", "Node.js", "APIs REST", "JWT / Spring Security"],\n  "database":  ["MySQL", "Modelagem de Dados"],\n  "cloud":     ["AWS", "Microsoft Azure", "Google Cloud", "Docker"],\n  "tools":     ["Git", "GitHub", "Postman", "Figma"]\n}`,
      
      education: () => `Graduações:\n• Análise e Desenvolvimento de Sistemas — UNIPAR (2023–2026)\n• Engenharia de Software (Planejada para 2027)\n\nCertificações:\n• AWS Certified AI Practitioner (AIF-C01)\n• GCP Associate Cloud Engineer\n• Java SE 11 Developer — 1Z0-819 OCP (Parte 1)\n• Formação Java e Spring Boot`,
      
      skills: () => `Back-end: Java, Spring Boot, Node.js, REST APIs, MySQL, JWT\nFront-end: React, TypeScript, JavaScript, Tailwind CSS, Vite\nCloud: AWS, Azure, GCP, Docker\nDesign: UI/UX, Design Systems, Figma`,
      
      projects: () => `Destaques do Portfólio:\n1. Zyntek Connect (Plataforma Institucional & SaaS)\n2. R.A.S Premium (Landing Page de Alta Conversão)\n3. Pokémon Battle Arena (Web Game React + Spring Boot)\n4. Zynk Finance Dashboard (SaaS Platform)\n5. Portfólio Lorraini Paris (Branding & Design)\n6. Garagem 7 (Landing Page Automotiva)\n\nRole até a seção #projetos para interagir com a vitrine completa!`,
      
      zyntek: () => `Zyntek Digital Experience\nEstúdio de desenvolvimento de software de alta performance.\nSite: https://zyntekconnect.com.br/`,
      
      // ✏️ [EDITE AQUI: SEUS DADOS DE CONTATO NO TERMINAL]
      contact: () => `WhatsApp: +55 (44) 98427-1446\nE-mail: levyandrade2109@gmail.com\nLinkedIn: https://www.linkedin.com/in/levy-andrade/`,
      
      social: () => `GitHub:   https://github.com/Levy-Andrade\nLinkedIn: https://www.linkedin.com/in/levy-andrade/\nInstagram: https://www.instagram.com/levy.andrade.393`,
      
      status: () => `✓ Status: Em constante evolução. Aberto a projetos e novas parcerias.`,
      
      theme: () => {
        toggleTheme();
        return `Tema alterado com sucesso para: ${document.documentElement.getAttribute('data-theme')}`;
      },
      
      date: () => new Date().toLocaleString(),
      sudo: () => `Acesso concedido. Você é o administrador do seu próprio futuro.`,
      repo: () => `Repositório oficial: https://github.com/Levy-Andrade`
    };

    termInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = termInput.value.trim();
        const cmd = rawCmd.toLowerCase();

        if (rawCmd !== '') {
          cmdHistory.push(rawCmd);
          historyIndex = cmdHistory.length;
        }

        const cmdLine = document.createElement('div');
        cmdLine.className = 't-line';
        cmdLine.innerHTML = `<span class="t-prompt">levy@zyntek</span><span class="t-sep">:</span><span class="t-dir">~</span><span class="t-dollar">$</span><span class="t-cmd">${rawCmd}</span>`;
        termHistory.appendChild(cmdLine);

        if (cmd === 'clear' || cmd === 'cls') {
          termHistory.innerHTML = '';
        } else if (commands[cmd]) {
          const out = document.createElement('div');
          out.className = 't-output';
          out.innerHTML = commands[cmd]().replace(/\n/g, '<br>');
          termHistory.appendChild(out);
        } else if (rawCmd.startsWith('echo ')) {
          const out = document.createElement('div');
          out.className = 't-output';
          out.textContent = rawCmd.substring(5);
          termHistory.appendChild(out);
        } else if (rawCmd.startsWith('cat ')) {
          const file = rawCmd.substring(4).trim();
          const out = document.createElement('div');
          out.className = 't-output';
          if (file === 'stack.json') out.innerHTML = commands.stack().replace(/\n/g, '<br>');
          else if (file === 'education.json') out.innerHTML = commands.education().replace(/\n/g, '<br>');
          else out.innerHTML = `<span class="t-error">cat: ${file}: Arquivo não encontrado</span>`;
          termHistory.appendChild(out);
        } else if (rawCmd !== '') {
          const out = document.createElement('div');
          out.className = 't-output t-error';
          out.innerHTML = `Comando não reconhecido: '${rawCmd}'. Digite <span class="t-hl">help</span> para lista de comandos.`;
          termHistory.appendChild(out);
        }

        termInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
      } else if (e.key === 'ArrowUp') {
        if (historyIndex > 0) {
          historyIndex--;
          termInput.value = cmdHistory[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (historyIndex < cmdHistory.length - 1) {
          historyIndex++;
          termInput.value = cmdHistory[historyIndex];
        } else {
          historyIndex = cmdHistory.length;
          termInput.value = '';
        }
      }
    });

    terminalBody.addEventListener('click', () => {
      termInput.focus();
    });
  }


  /* ===================================================================
     09. FILTRO DINÂMICO E PRÉVIA EM VÍDEO NO HOVER DE PROJETOS
  =================================================================== */
  const projectsFilterContainer = document.getElementById('projectsFilter');
  const projectCards = document.querySelectorAll('.project-card');

  if (projectsFilterContainer && projectCards.length > 0) {
    const categories = ['Todos'];
    projectCards.forEach(card => {
      const cat = card.getAttribute('data-cat');
      if (cat && !categories.includes(cat)) {
        categories.push(cat);
      }
    });

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = `filter-btn ${cat === 'Todos' ? 'active' : ''}`;
      btn.textContent = cat;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', cat === 'Todos' ? 'true' : 'false');

      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-cat');
          if (cat === 'Todos' || cardCat === cat) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 250);
          }
        });
      });

      projectsFilterContainer.appendChild(btn);
    });
  }

  // Prévia em vídeo automática no Hover de cada card de projeto
  projectCards.forEach(card => {
    const videoSrc = card.getAttribute('data-video');
    const imgWrap = card.querySelector('.project-img-wrap');

    if (videoSrc && imgWrap) {
      let previewVideo = null;

      card.addEventListener('mouseenter', () => {
        if (!previewVideo) {
          previewVideo = document.createElement('video');
          previewVideo.className = 'project-hover-video';
          previewVideo.src = videoSrc;
          previewVideo.muted = true;
          previewVideo.loop = true;
          previewVideo.playsInline = true;
          previewVideo.setAttribute('aria-hidden', 'true');
          imgWrap.appendChild(previewVideo);
        }

        card.classList.add('video-active');
        previewVideo.play().catch(() => {});
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('video-active');
        if (previewVideo) {
          previewVideo.pause();
        }
      });
    }
  });


  /* ===================================================================
     10. MODAL DE PROJETOS (LAYOUT VERTICAL: VÍDEO GRANDE + 3 BOTÕES)
  =================================================================== */
  const projectModal = document.getElementById('projectModal');
  const pmodalClose = document.getElementById('pmodalClose');
  const pmodalCat = document.getElementById('pmodalCat');
  const pmodalTitle = document.getElementById('pmodalTitle');
  const pmodalTags = document.getElementById('pmodalTags');
  const pmodalMedia = document.getElementById('pmodalMedia');
  const pmodalDesc = document.getElementById('pmodalDesc');
  const pmodalDetails = document.getElementById('pmodalDetails');
  const pmodalDeploy = document.getElementById('pmodalDeploy');
  const pmodalGithub = document.getElementById('pmodalGithub');
  const pmodalContact = document.getElementById('pmodalContact');

  function openProjectModal(card) {
    if (!projectModal) return;

    const title = card.getAttribute('data-title') || '';
    const cat = card.getAttribute('data-cat') || '';
    const desc = card.getAttribute('data-desc') || '';
    const tags = (card.getAttribute('data-tags') || '').split(',');
    const video = card.getAttribute('data-video') || '';
    const image = card.getAttribute('data-image') || '';
    const deploy = card.getAttribute('data-deploy') || '#';
    const github = card.getAttribute('data-github') || '#';
    const details = card.getAttribute('data-details') || '';

    if (pmodalCat) pmodalCat.textContent = cat;
    if (pmodalTitle) pmodalTitle.textContent = title;
    if (pmodalDesc) pmodalDesc.textContent = desc;
    if (pmodalDetails) pmodalDetails.textContent = details ? `Arquitetura: ${details}` : '';

    if (pmodalTags) {
      pmodalTags.innerHTML = '';
      tags.forEach(t => {
        if (t.trim()) {
          const span = document.createElement('span');
          span.textContent = t.trim();
          pmodalTags.appendChild(span);
        }
      });
    }

    if (pmodalMedia) {
      if (video) {
        pmodalMedia.innerHTML = `<video src="${video}" autoplay muted loop playsinline controls style="width:100%; border-radius:14px;"></video>`;
      } else if (image) {
        pmodalMedia.innerHTML = `<img src="${image}" alt="${title}" style="width:100%; border-radius:14px;">`;
      } else {
        pmodalMedia.innerHTML = `<div style="height:260px; display:flex; align-items:center; justify-content:center; background:#14141c; border-radius:14px; font-size:3.5rem; color:var(--primary-light);"><i class="ri-code-box-line"></i></div>`;
      }
    }

    if (pmodalDeploy) {
      pmodalDeploy.href = deploy;
      pmodalDeploy.style.display = deploy && deploy !== '#' ? 'inline-flex' : 'none';
    }

    if (pmodalGithub) {
      pmodalGithub.href = github;
      pmodalGithub.style.display = github && github !== '#' ? 'inline-flex' : 'none';
    }

    if (pmodalContact) {
      const msg = encodeURIComponent(`Olá Levy! Vi o projeto "${title}" no seu portfólio e gostaria de conversar sobre uma solução similar.`);
      pmodalContact.href = `https://wa.me/5544984271446?text=${msg}`;
    }

    projectModal.hidden = false;
    setTimeout(() => {
      projectModal.classList.add('open');
      document.body.style.overflow = 'hidden';
      initModalCanvas();
    }, 10);
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('open');
    document.body.style.overflow = '';
    if (modalAnimationId) cancelAnimationFrame(modalAnimationId);
    setTimeout(() => {
      projectModal.hidden = true;
      if (pmodalMedia) pmodalMedia.innerHTML = '';
    }, 300);
  }

  document.querySelectorAll('.btn-open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.project-card');
      if (card) openProjectModal(card);
    });
  });

  // Também abre modal ao clicar no próprio card
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.closest('.btn-project') && !e.target.closest('a')) {
        openProjectModal(card);
      }
    });
  });

  if (pmodalClose) pmodalClose.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
    }
  });


  /* ===================================================================
     11. FORMULÁRIO DE ORÇAMENTO COM MÁSCARA & WHATSAPP
  =================================================================== */
  const budgetForm = document.getElementById('budgetForm');
  const inputPhone = document.getElementById('inputPhone');

  if (inputPhone) {
    inputPhone.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length > 11) val = val.slice(0, 11);

      if (val.length > 6) {
        val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
      } else if (val.length > 2) {
        val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
      } else if (val.length > 0) {
        val = `(${val}`;
      }
      e.target.value = val;
    });
  }

  if (budgetForm) {
    budgetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inputName')?.value.trim() || '';
      const company = document.getElementById('inputCompany')?.value.trim() || '';
      const phone = document.getElementById('inputPhone')?.value.trim() || '';
      const message = document.getElementById('inputMessage')?.value.trim() || '';

      const errName = document.getElementById('errorName');
      const errPhone = document.getElementById('errorPhone');
      const errMessage = document.getElementById('errorMessage');

      let hasError = false;

      if (errName) errName.textContent = '';
      if (errPhone) errPhone.textContent = '';
      if (errMessage) errMessage.textContent = '';

      if (!name) {
        if (errName) errName.textContent = 'Por favor, informe seu nome completo.';
        hasError = true;
      }

      if (!phone || phone.length < 14) {
        if (errPhone) errPhone.textContent = 'Por favor, informe um telefone/WhatsApp válido.';
        hasError = true;
      }

      if (!message) {
        if (errMessage) errMessage.textContent = 'Por favor, descreva brevemente a ideia do projeto.';
        hasError = true;
      }

      if (hasError) return;

      const formattedMsg = `*Novo Contato via Portfólio*\n\n*Nome:* ${name}\n*Empresa:* ${company || 'Não informada'}\n*WhatsApp:* ${phone}\n\n*Mensagem / Ideia:*\n${message}`;
      const waUrl = `https://wa.me/5544984271446?text=${encodeURIComponent(formattedMsg)}`;

      window.open(waUrl, '_blank');
      budgetForm.reset();
    });
  }


  /* ===================================================================
     12. HEADER SCROLL, SCROLL SPY & TIMELINE PROGRESS
  =================================================================== */
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav .mobile-link');
  const timelineRailFill = document.querySelector('.edu-rail-fill');
  const timelineElement = document.querySelector('.edu-timeline');
  const timelineNodes = document.querySelectorAll('.edu-node');
  const timelineCards = document.querySelectorAll('.edu-degree-card, .course-card');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Scroll Spy
    let currentSectionId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });

    // Animação Dinâmica da Timeline
    if (timelineElement && timelineRailFill) {
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
        const totalHeight = rect.height;
        const currentScrolled = (windowHeight * 0.75) - rect.top;
        const progress = Math.min(Math.max((currentScrolled / totalHeight) * 100, 0), 100);
        timelineRailFill.style.height = `${progress}%`;

        timelineNodes.forEach(node => {
          const nodeRect = node.getBoundingClientRect();
          if (nodeRect.top < windowHeight * 0.7) {
            node.classList.add('active');
          } else {
            node.classList.remove('active');
          }
        });

        timelineCards.forEach(card => {
          const cardRect = card.getBoundingClientRect();
          if (cardRect.top < windowHeight * 0.72) {
            card.classList.add('active');
          } else {
            card.classList.remove('active');
          }
        });
      }
    }
  });


  /* ===================================================================
     13. INTERSECTION OBSERVER (REVEAL ANIMATIONS)
  =================================================================== */
  const revealElements = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => revealObserver.observe(el));


  /* ===================================================================
     14. SPOTLIGHT & 3D TILT EFFECT EM CARDS (SKILLS & PROJETOS)
  =================================================================== */
  const interactiveCards = document.querySelectorAll('.tech-card, .skill-card, .project-card, .cyber-frame');

  interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      if (card.classList.contains('cyber-frame')) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      if (card.classList.contains('cyber-frame')) {
        card.style.transform = '';
      }
    });
  });


  /* ===================================================================
     15. MENU MOBILE DRAWER
  =================================================================== */
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  function openMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    if (backdrop) backdrop.classList.add('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('mobile-menu-active');
  }

  function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    if (backdrop) backdrop.classList.remove('open');
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('mobile-menu-active');
  }

  if (menuBtn) menuBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  if (backdrop) backdrop.addEventListener('click', closeMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

});