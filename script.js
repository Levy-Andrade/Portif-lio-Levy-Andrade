/**
 * ═══════════════════════════════════════════════════════════════════════
 *  PORTFÓLIO LEVY ANDRADE — script.js  (Versão Refatorada 2.0)
 *  Autor         : Levy Andrade da Silva
 *  Co-autoria    : Zyntek Digital Experience
 *  Última revisão: 2026
 * ═══════════════════════════════════════════════════════════════════════
 *
 *  ÍNDICE DE MÓDULOS
 *  ─────────────────
 *  01. CONFIGURAÇÕES GERAIS
 *  02. SELETORES GLOBAIS (DOM)
 *  03. UTILITÁRIOS
 *  04. PRELOADER
 *  05. CURSOR CUSTOMIZADO
 *  06. PARTÍCULAS DE FUNDO
 *  07. HEADER & NAVEGAÇÃO ATIVA
 *  08. SCROLL SUAVE & BOTÃO VOLTAR AO TOPO
 *  09. MENU MOBILE
 *  10. TEMA DARK / LIGHT
 *  11. INTERNACIONALIZAÇÃO (i18n)
 *  12. EFEITO TYPING + GLITCH
 *  13. PARALLAX 3D — CYBERFRAME
 *  14. SCROLL REVEAL
 *  15. CARROSSEL DE PROJETOS
 *  16. MODAL DINÂMICO DE PROJETOS
 *  17. FORMULÁRIO DE ORÇAMENTO (Zyntek)
 *  18. EFEITO 3D NAS SKILL CARDS
 *  19. RIPPLE EFFECT NOS BOTÕES
 *  20. BOTÃO DOWNLOAD CURRÍCULO
 *  21. PARALLAX NA SEÇÃO DE CONTATO
 *  22. EVENT LISTENERS GLOBAIS
 *  23. INICIALIZAÇÃO
 * ═══════════════════════════════════════════════════════════════════════
 */

"use strict";

/* ══════════════════════════════════════════════════════════════════════
   01. CONFIGURAÇÕES GERAIS
   ══════════════════════════════════════════════════════════════════════ */
const CONFIG = Object.freeze({
  /* — LocalStorage keys — */
  STORAGE_THEME:    "levy_portfolio_theme",
  STORAGE_LANGUAGE: "levy_portfolio_lang",

  /* — SessionStorage key (preloader) — */
  PRELOADER_SESSION_KEY: "zyntek_preloader_shown",

  /* — Tipagem — */
  FULL_NAME:    "Levy de Andrade da Silva",
  GLITCH_CHARS: "!<>-_\\/[]{}—=+*^?#",

  /* — Links WhatsApp — */
  WA_LEVY:   "https://wa.me/5544984271446?text=Ol%C3%A1%20Levy%2C%20vi%20seu%20portf%C3%B3lio%2C%20achei%20interessante%2C%20podemos%20conversar%3F",
  WA_ZYNTEK: "https://wa.me/554488317870?text=Ol%C3%A1%20equipe%20Zyntek%2C%20vim%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.",

  /* — Timings (ms) — */
  PRELOADER_DURATION_MS:    2800,
  SCROLL_THRESHOLD:           60,
  SCROLL_TOP_THRESHOLD:      400,
  CAROUSEL_SWIPE_THRESHOLD:   50,
  CAROUSEL_RESIZE_DEBOUNCE_MS:120,
  GLITCH_INTERVAL_MS:       9000,
  TYPING_PAUSE_FULL_MS:     5000,
  TYPING_PAUSE_EMPTY_MS:    1200,
  TYPING_GLITCH_DELAY_MS:   3500,
});


/* ══════════════════════════════════════════════════════════════════════
   02. SELETORES GLOBAIS (DOM)
   — Todos os seletores centralizados num único objeto.
   — Seletores inexistentes retornam null sem causar erros.
   ══════════════════════════════════════════════════════════════════════ */
const DOM = Object.freeze({
  /* Preloader */
  preloader:        document.getElementById("zyntek-preloader"),
  preloaderFill:    document.getElementById("preloaderBarFill"),
  preloaderPercent: document.getElementById("preloaderPercent"),

  /* Header */
  header:           document.getElementById("header"),
  scrollTopBtn:     document.getElementById("scrollTop"),

  /* Menu Mobile */
  mobileMenuBtn:    document.getElementById("mobileMenuBtn"),
  mobileMenu:       document.getElementById("mobileMenu"),

  /* Tema */
  themeToggle:      document.getElementById("themeToggle"),
  themeIcon:        document.getElementById("themeIcon"),
  mobileThemeToggle: document.getElementById("mobileThemeToggle"),
  mobileThemeIcon:   document.getElementById("mobileThemeIcon"),

  /* Idioma */
  langBtn:          document.getElementById("langBtn"),
  langDropdown:     document.getElementById("langDropdown"),
  currentLang:      document.getElementById("currentLang"),

  /* Hero */
  typingName:       document.getElementById("typingName"),
  cyberFrame:       document.getElementById("cyberFrame"),
  downloadCvBtn:    document.getElementById("downloadCV"),

  /* Carrossel de projetos */
  projectStage:     document.getElementById("projectsStage"),
  projectPrev:      document.getElementById("projectPrev"),
  projectNext:      document.getElementById("projectNext"),
  carouselDots:     document.getElementById("carouselDots"),

  /* Modal de projeto */
  projectModal:     document.getElementById("projectModal"),
  pmodalClose:      document.getElementById("pmodalClose"),
  pmodalCat:        document.getElementById("pmodalCat"),
  pmodalTitle:      document.getElementById("pmodalTitle"),
  pmodalTags:       document.getElementById("pmodalTags"),
  pmodalMedia:      document.getElementById("pmodalMedia"),
  pmodalDesc:       document.getElementById("pmodalDesc"),
  pmodalDetails:    document.getElementById("pmodalDetails"),
  pmodalDeploy:     document.getElementById("pmodalDeploy"),
  pmodalGithub:     document.getElementById("pmodalGithub"),

  /* Formulário de orçamento */
  budgetForm:       document.getElementById("budgetForm"),

  /* Cursor */
  cursorDot:        document.getElementById("cursorDot"),
  cursorOutline:    document.getElementById("cursorOutline"),

  /* Partículas */
  particlesBg:      document.getElementById("particlesBg"),

  /* Seção de contato (para parallax) */
  contactSection:   document.querySelector(".contact-section"),
});


/* ══════════════════════════════════════════════════════════════════════
   03. UTILITÁRIOS
   ══════════════════════════════════════════════════════════════════════ */
const Utils = {

  /**
   * Injeta uma tag <style> com id único no <head>.
   * Evita duplicatas em re-inicializações.
   */
  injectStyle(key, css) {
    const styleId = `injected-style-${key}`;
    if (document.getElementById(styleId)) return;
    const style = document.createElement("style");
    style.id          = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  },

  /**
   * Módulo aritmético sempre positivo — util para carrossel circular.
   * @param {number} n — índice atual
   * @param {number} m — total de itens
   */
  mod(n, m) {
    return ((n % m) + m) % m;
  },

  /**
   * Debounce genérico.
   * @param {Function} fn — função a ser debounced
   * @param {number}   ms — delay em milissegundos
   */
  debounce(fn, ms) {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), ms);
    };
  },

  /**
   * Verifica suporte a hover real (exclui touch-only).
   */
  hasHover() {
    return window.matchMedia("(hover: hover)").matches;
  },

  /**
   * Verifica preferência por movimento reduzido.
   */
  prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
};


/* ══════════════════════════════════════════════════════════════════════
   04. PRELOADER
   — Barra de progresso animada via rAF.
   — Exibido apenas uma vez por sessão (sessionStorage).
   ══════════════════════════════════════════════════════════════════════ */
function initPreloader() {
  const { preloader, preloaderFill, preloaderPercent } = DOM;
  if (!preloader) return;

  /* Já exibiu nesta sessão → oculta imediatamente */
  if (sessionStorage.getItem(CONFIG.PRELOADER_SESSION_KEY)) {
    preloader.classList.add("preloader-hidden");
    return;
  }

  preloader.removeAttribute("hidden");

  let progress  = 0;
  let rafId     = null;
  let dismissed = false;
  const startTime = performance.now();

  /* Atualiza a barra suavemente via lerp */
  function updateBar(now) {
    const elapsed   = now - startTime;
    const rawTarget = Math.min((elapsed / CONFIG.PRELOADER_DURATION_MS) * 100, 97);
    progress       += (rawTarget - progress) * 0.06;

    const pct = Math.round(progress);
    if (preloaderFill)    preloaderFill.style.width    = pct + "%";
    if (preloaderPercent) preloaderPercent.textContent = pct + "%";

    if (progress < 97 && !dismissed) rafId = requestAnimationFrame(updateBar);
  }

  rafId = requestAnimationFrame(updateBar);

  /* Completa a barra e oculta o preloader */
  function hidePreloader() {
    if (dismissed) return;
    dismissed = true;
    cancelAnimationFrame(rafId);

    if (preloaderFill) {
      preloaderFill.style.transition = "width 0.3s ease";
      preloaderFill.style.width      = "100%";
    }
    if (preloaderPercent) preloaderPercent.textContent = "100%";

    setTimeout(() => {
      preloader.classList.add("preloader-hidden");
      sessionStorage.setItem(CONFIG.PRELOADER_SESSION_KEY, "1");
    }, 350);
  }

  /* Dispara ao carregar a página ou após timeout de segurança */
  window.addEventListener("load", hidePreloader, { once: true });
  setTimeout(hidePreloader, 3000);
}


/* ══════════════════════════════════════════════════════════════════════
   05. CURSOR CUSTOMIZADO
   — Apenas em dispositivos com hover real (desktop).
   — Dot segue o mouse diretamente; outline usa interpolação suave.
   ══════════════════════════════════════════════════════════════════════ */
function initCursor() {
  const { cursorDot, cursorOutline } = DOM;
  if (!cursorDot || !cursorOutline) return;
  if (!Utils.hasHover()) return;

  let mouseX = 0, mouseY = 0;
  let outlineX = 0, outlineY = 0;
  let rafId = null;

  /* Dot segue o cursor sem lag */
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top  = mouseY + "px";
  });

  /* Outline interpola suavemente */
  function animateOutline() {
    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;
    cursorOutline.style.left = outlineX + "px";
    cursorOutline.style.top  = outlineY + "px";
    rafId = requestAnimationFrame(animateOutline);
  }

  /* Pausa a animação quando a aba fica oculta */
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else rafId = requestAnimationFrame(animateOutline);
  });

  rafId = requestAnimationFrame(animateOutline);

  /* Expande o outline ao passar sobre elementos interativos */
  document.querySelectorAll("a, button, .skill-card, .project-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursorOutline.style.width       = "60px";
      cursorOutline.style.height      = "60px";
      cursorOutline.style.borderColor = "rgba(139,92,246,.7)";
    });
    el.addEventListener("mouseleave", () => {
      cursorOutline.style.width       = "36px";
      cursorOutline.style.height      = "36px";
      cursorOutline.style.borderColor = "rgba(139,92,246,.5)";
    });
  });
}


/* ══════════════════════════════════════════════════════════════════════
   06. PARTÍCULAS DE FUNDO
   — 35 partículas flutuantes com posição, tamanho e duração aleatórios.
   — Usa DocumentFragment para inserção eficiente no DOM.
   ══════════════════════════════════════════════════════════════════════ */
function initParticles() {
  const { particlesBg } = DOM;
  if (!particlesBg) return;

  Utils.injectStyle("particle-float", `
    @keyframes particle-float {
      0%, 100% { transform: translate(0, 0);       opacity: .5; }
      33%       { transform: translate(20px, -30px); opacity: 1; }
      66%       { transform: translate(-15px, 20px); opacity: .6; }
    }
  `);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < 35; i++) {
    const particle = document.createElement("div");
    const size     = 2 + Math.random() * 4;
    const opacity  = 0.05 + Math.random() * 0.15;
    const duration = 6 + Math.random() * 8;
    const delay    = Math.random() * -8;

    particle.style.cssText = `
      position: absolute; border-radius: 50%;
      background: rgba(139, 92, 246, ${opacity});
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
      animation: particle-float ${duration}s ease-in-out infinite ${delay}s;
    `;
    fragment.appendChild(particle);
  }

  particlesBg.appendChild(fragment);
}


/* ══════════════════════════════════════════════════════════════════════
   07. HEADER & NAVEGAÇÃO ATIVA
   — Adiciona classe "scrolled" ao header quando a página é rolada.
   — Destaca o link ativo no menu usando IntersectionObserver.
   ══════════════════════════════════════════════════════════════════════ */
function initHeader() {
  const { header, scrollTopBtn } = DOM;

  /* Sincroniza estado do header e botão de voltar ao topo */
  function syncHeaderState() {
    const scrolled = window.scrollY > CONFIG.SCROLL_THRESHOLD;
    const showBtn  = window.scrollY > CONFIG.SCROLL_TOP_THRESHOLD;
    if (header)       header.classList.toggle("scrolled", scrolled);
    if (scrollTopBtn) scrollTopBtn.classList.toggle("visible", showBtn);
  }

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  syncHeaderState();

  /* Links ativos via IntersectionObserver */
  const sections = document.querySelectorAll("section[id]");
  const navLinks  = document.querySelectorAll(".nav-link");

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach((section) => observer.observe(section));
}


/* ══════════════════════════════════════════════════════════════════════
   08. SCROLL SUAVE & BOTÃO VOLTAR AO TOPO
   — Intercepta todos os links âncora e aplica scroll suave com offset
     do header fixo.
   ══════════════════════════════════════════════════════════════════════ */
function initSmoothScroll() {
  const { header, scrollTopBtn } = DOM;

  /* Botão "voltar ao topo" */
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Links âncora (#secao) */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      if (!targetId) return;

      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      e.preventDefault();

      const headerHeight = header ? header.offsetHeight : 72;
      const targetTop    = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({ top: targetTop, behavior: "smooth" });

      /* Fecha menu mobile se estiver aberto */
      closeMobileMenu();
    });
  });
}


/* ══════════════════════════════════════════════════════════════════════
   09. MENU MOBILE
   — Toggle do menu hambúrguer.
   — Fecha ao clicar fora, pressionar Escape ou clicar em link.
   ══════════════════════════════════════════════════════════════════════ */

/** Fecha o menu mobile e redefine atributos de acessibilidade. */
function closeMobileMenu() {
  const { mobileMenu: menu, mobileMenuBtn: btn } = DOM;
  if (!menu || !btn) return;
  menu.classList.remove("open");
  menu.setAttribute("aria-hidden", "true");
  btn.classList.remove("open");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-label", "Abrir menu de navegação");
  document.body.classList.remove("mobile-menu-active");
}

function openMobileMenu() {
  const { mobileMenu: menu, mobileMenuBtn: btn } = DOM;
  if (!menu || !btn) return;
  menu.classList.add("open");
  menu.setAttribute("aria-hidden", "false");
  btn.classList.add("open");
  btn.setAttribute("aria-expanded", "true");
  btn.setAttribute("aria-label", "Fechar menu de navegação");
  document.body.classList.add("mobile-menu-active");
}

function initMobileMenu() {
  const { mobileMenuBtn: btn, mobileMenu: menu } = DOM;
  if (!btn || !menu) return;

  /* Alterna abertura/fechamento */
  btn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  /* Fecha ao pressionar Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("open")) {
      closeMobileMenu();
      btn.focus();
    }
  });

  /* Fecha ao clicar fora do menu */
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      closeMobileMenu();
    }
  });

  /* Fecha ao clicar em um link de navegação dentro do menu */
  menu.querySelectorAll(".mobile-link, .mobile-cta").forEach((link) => {
    link.addEventListener("click", () => closeMobileMenu());
  });

  /* Fecha automaticamente se a tela voltar a tamanho desktop */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && menu.classList.contains("open")) {
      closeMobileMenu();
    }
  });
}


/* ══════════════════════════════════════════════════════════════════════
   10. TEMA DARK / LIGHT
   — Persiste preferência no localStorage.
   — Atualiza ícone e meta theme-color.
   — Inicializado antes do DOMContentLoaded para evitar FOUC.
   ══════════════════════════════════════════════════════════════════════ */
function initTheme() {
  const { themeToggle, themeIcon, mobileThemeToggle, mobileThemeIcon } = DOM;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  /** Aplica o tema e persiste no localStorage. */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(CONFIG.STORAGE_THEME, theme);

    const iconClass = theme === "dark" ? "ri-moon-clear-line" : "ri-sun-line";
    if (themeIcon) themeIcon.className = iconClass;
    if (mobileThemeIcon) mobileThemeIcon.className = iconClass;

    if (metaThemeColor) {
      metaThemeColor.content = theme === "dark" ? "#09090b" : "#ffffff";
    }
  }

  /* Carrega preferência salva ou usa "dark" como padrão */
  const savedTheme = localStorage.getItem(CONFIG.STORAGE_THEME) || "dark";
  applyTheme(savedTheme);

  function handleToggleClick() {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  }

  if (themeToggle) themeToggle.addEventListener("click", handleToggleClick);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", handleToggleClick);
}


/* ══════════════════════════════════════════════════════════════════════
   11. INTERNACIONALIZAÇÃO (i18n)
   — Suporta: Português (pt), Inglês (en) e Espanhol (es).
   — Todas as chaves mapeiam diretamente para atributos data-i18n do HTML.
   — Persiste idioma escolhido no localStorage.
   — Atalhos de teclado: Alt+1 (PT), Alt+2 (EN), Alt+3 (ES).
   ══════════════════════════════════════════════════════════════════════ */

/* ── OBJETO DE TRADUÇÕES COMPLETO ─────────────────────────────────── */
const translations = {

  /* ══════════════════════════════════════════════════════════════════
     PORTUGUÊS
     ══════════════════════════════════════════════════════════════════ */
  pt: {
    /* Navegação */
    menu_home:       "Home",
    menu_about:      "Sobre",
    menu_education:  "Formação",
    menu_skills:     "Skills",
    menu_zyntek:     "Zyntek",
    menu_projects:   "Projetos",
    menu_contact:    "Contatos",

    /* Header / CTA */
    contact_button:   "Entre em contato",
    whatsapp_tooltip: "Fale comigo!",

    /* Hero */
    hero_badge:       "Full Stack Developer",
    hero_stack:       "Desenvolvedor Full Stack | JavaScript | React | Java | MySQL",
    hero_description: "Desenvolvedor focado em construir aplicações web completas e eficientes. Combino a robustez do ecossistema Java no backend com a flexibilidade do JavaScript no frontend para transformar regras de negócio em sistemas funcionais, seguros e de alto impacto.",
    hero_contact:     "Entre em Contato",
    hero_cv:          "Download Currículo",
    hero_status:      "Disponível para novos projetos",
    scroll_text:      "Role para explorar",

    /* Sobre */
    about_badge:       "— SOBRE MIM —",
    about_title:       "Construindo soluções através da tecnologia.",
    about_subtitle:    "Transformando desafios em experiências digitais inteligentes.",
    about_heading:     "Muito prazer, sou Levy Andrade.",
    about_text_one:    "Minha trajetória profissional é marcada pela busca constante por evolução, unindo <span class=\"hl\">tecnologia,</span> criatividade e pensamento estratégico para desenvolver soluções digitais que realmente geram valor para empresas e pessoas.",
    about_text_two:    "Atualmente concentro meus estudos e projetos em <span class=\"hl\">Engenharia de Software,</span> desenvolvimento <span class=\"hl\">Full Stack</span> e <span class=\"hl\">UI/UX Design</span>, construindo aplicações modernas com foco em qualidade, escalabilidade e experiência do usuário.",
    about_text_three:  "Além do desenvolvimento técnico, sou co-fundador da <span class=\"hl\">Zyntek</span>, onde aplico toda minha expertise para criar experiências digitais premium, identidades visuais estratégicas e soluções web de alto impacto.",
    about_stat_dev:    "Developer",
    about_stat_design: "Designer",
    about_button:      "Vamos Conversar",

    /* Formação */
    education_badge:           "— FORMAÇÃO —",
    education_title:           "Jornada de aprendizado contínuo.",
    education_subtitle:        "Cada etapa construída com dedicação e propósito.",
    education_ads_period:      "Concluída (2023 - 2026)",
    education_ads_title:       "Análise e Desenvolvimento de Sistemas",
    education_ads_institution: "Graduação — Unipar",
    education_ads_text:        "Formação técnica e acadêmica em desenvolvimento de sistemas, algoritmos, banco de dados, engenharia de software e fundamentos da computação aplicada ao desenvolvimento de soluções modernas.",
    education_english_period:  "Em andamento",
    education_english_title:   "Inglês do Zero ao Avançado",
    education_english_text:    "Aperfeiçoamento contínuo da comunicação técnica para atuação em projetos internacionais, leitura de documentação e colaboração global.",
    education_java_period:     "Em andamento",
    education_java_title:      "Java e Spring Boot",
    education_java_institution:"Formação Completa — Udemy",
    education_java_text:       "Especialização em desenvolvimento backend, APIs REST, microsserviços, autenticação JWT, Spring Security, JPA, Hibernate e integração com bancos de dados.",
    education_eng_period:      "Em breve",
    education_eng_title:       "Bacharelado em Engenharia de Software",
    education_eng_institution: "Nova Graduação • Planejada",
    education_eng_text:        "Próximo passo acadêmico focado no aprofundamento de arquitetura de sistemas complexos, qualidade de processos de software, gerência de projetos e engenharia de requisitos corporativos.",
    education_highlight_title: "Aprendizado Contínuo",
    education_highlight_text:  "Acredito que a evolução profissional é construída diariamente através da prática, pesquisa e constante atualização tecnológica, buscando sempre excelência no desenvolvimento de software moderno.",

    /* Skills */
    skills_badge:        "— SKILLS —",
    skills_title:        "Tecnologias que transformam ideias em soluções.",
    skills_description:  "Uma combinação entre engenharia de software, desenvolvimento full stack e design de experiência para construir aplicações modernas, escaláveis e de alto desempenho.",
    skill_html5:         "Estruturação de páginas web modernas utilizando semântica avançada, acessibilidade e boas práticas de SEO.",
    skill_css:           "Estilização de layouts complexos, animações, responsividade e design fluido para uma excelente experiência visual.",
    skill_js:            "Desenvolvimento moderno utilizando ES6+, manipulação do DOM, animações avançadas e lógica de aplicações.",
    skill_react:         "Construção de interfaces modernas, reutilizáveis e performáticas utilizando componentes e arquitetura escalável.",
    skill_java:          "Desenvolvimento backend robusto utilizando orientação a objetos, APIs REST, arquitetura em camadas e aplicações corporativas.",
    skill_mysql:         "Modelagem relacional, consultas avançadas, procedures, otimização e integração com aplicações backend.",
    skill_spring:        "Criação de APIs modernas, autenticação JWT, microsserviços, JPA, Hibernate e integração com bancos relacionais.",
    skill_tailwind:      "Desenvolvimento ágil de interfaces de alta performance com foco em produtividade através de classes utilitárias.",
    skill_vite:          "Ferramenta de build extremamente rápida para projetos frontend modernos, otimizando o tempo de carregamento e o fluxo de trabalho.",
    skill_saas:          "Arquitetura e desenvolvimento de soluções baseadas em Software como Serviço, com foco em escalabilidade, nuvem e alta disponibilidade.",
    skill_github:        "Versionamento de código, colaboração ágil e automação de deploy através de fluxos de CI/CD e workflows modernos.",
    skills_footer_title: "Evolução Contínua",
    skills_footer_text:  "A tecnologia evolui diariamente e meu objetivo é acompanhar essa transformação através de estudos, projetos reais e boas práticas de engenharia, entregando soluções modernas, performáticas, seguras e escaláveis.",

    /* Zyntek */
    zyntek_badge:         "— ZYNTEK —",
    zyntek_title:         "Tecnologia, criatividade e inovação caminhando juntas.",
    zyntek_company_title: "Muito além de uma software house.",
    zyntek_text_intro:    "A Zyntek atua na vanguarda do desenvolvimento de software, fundindo <span class=\"hl\">engenharia de elite</span>, inteligência artificial e design de alto padrão. Nascemos da união de três mentes obcecadas por tecnologia, conectadas na faculdade com o propósito de transformar visões audaciosas em <span class=\"hl\">potências de mercado</span>.",
    zyntek_text_two:      "Mais do que linhas de código ou sites comuns, criamos ecossistemas robustos e sob medida. Essa entrega única é simbolizada pelo <span class=\"hl\">Zynk</span>, nosso guardião tecnológico e identidade cyberpunk, que representa a fusão entre a <span class=\"hl\">mentalidade ágil</span> da nova geração tech e a solidez que o mercado corporativo exige.",
    zyntek_text_three:    "Somos a força motriz dedicada a gerar lucro, <span class=\"hl\">automação</span> e autoridade máxima para o seu negócio, projetando soluções <span class=\"hl\">escaláveis e seguras</span> para estruturar, blindar e expandir suas operações rumo à liderança absoluta do mercado.",
    zyntek_stat_tech:     "Sistemas Escaláveis",
    zyntek_stat_design:   "Interfaces de Alto Padrão",
    zyntek_stat_ai:       "Soluções Inteligentes",
    zyntek_button:        "Conheça a Zyntek",
    zyntek_projects:      "Ver Projetos",

    /* Projetos */
    projects_badge:         "— PROJETOS —",
    projects_title:         "Soluções digitais desenvolvidas para gerar impacto.",
    projects_subtitle:      "Cada projeto representa uma combinação entre engenharia de software, design estratégico e tecnologia moderna.",
    project_ras:            "Landing Page institucional de alta performance, desenvolvida com foco em conversão, animações modernas e experiência mobile premium.",
    project_zyntek:         "Plataforma institucional construída com identidade visual futurista, animações de alta fidelidade e engenharia de código focada em escalabilidade corporativa.",
    project_portfolio:      "Portfólio profissional de publicidade e branding, desenvolvido com alta performance, transições fluidas, interface clean e experiência totalmente responsiva.",
    project_system:         "Landing page institucional desenvolvida para o segmento automotivo, focada em conversão, agendamentos e exibição de serviços com design moderno e totalmente responsivo.",
    project_webgame:        "Aplicação web dinâmica que replica a mecânica de combate por turnos da franquia Pokémon. Construído integrando uma API escalável a um ecossistema front-end otimizado, o sistema gerencia logs de ações, cálculo de dano e atualização imediata da interface.",
    project_finance:        "Dashboard financeiro inteligente projetado para transformar dados complexos em decisões estratégicas através de relatórios e gráficos interativos em tempo real.",
    project_button:         "Ver Projeto",
    projects_footer_title:  "Tem uma ideia para transformar em realidade?",
    projects_footer_text:   "Vamos construir uma solução moderna, escalável e personalizada para o seu negócio utilizando as melhores práticas de engenharia de software.",
    projects_footer_button: "Iniciar Projeto",

    /* Modal */
    modal_deploy: "Acessar Deploy",
    modal_repo:   "Acessar Repositório",

    /* Contato */
    contact_badge:       "— CONTATOS —",
    contact_title:       "Vamos construir o futuro do seu projeto.",
    contact_description: "Estou disponível para oportunidades, projetos, parcerias estratégicas e desenvolvimento de soluções digitais personalizadas.",
    label_name:          "Nome Completo *",
    label_company:       "Nome da Empresa",
    label_phone:         "Telefone / WhatsApp *",
    label_message:       "Descrição da Ideia do Projeto *",
    contact_send:        "Inicie seu Projeto",
    hub_button:          "Vamos Conversar",

    /* Footer */
    footer_navigation:  "Navegação",
    footer_stack:       "Stack",
    footer_contact:     "Zyntek",
    footer_description: "Não serei derrotado pelos limites atuais. Estou aqui para criar soluções que desafiam o que é possível.",
    footer_cta_title:   "Vamos construir algo extraordinário?",
    footer_cta_text:    "Transformo desafios complexos em soluções digitais de alto impacto. Vamos construir o próximo projeto juntos?",
    footer_cta_button:  "Entre em Contato",
    footer_copyright:   "© 2026 Portfólio Levy Andrade. Todos os direitos reservados.",
    footer_signature:   'Desenvolvido por <a href="https://www.linkedin.com/in/levyandrade/" target="_blank" rel="noopener noreferrer">Levy Andrade</a> e CO-fundador da <a href="https://zyntekconnect.com.br/" target="_blank" rel="noopener noreferrer">Zyntek</a>.',
  },


  /* ══════════════════════════════════════════════════════════════════
     INGLÊS
     ══════════════════════════════════════════════════════════════════ */
  en: {
    /* Navegação */
    menu_home:       "Home",
    menu_about:      "About",
    menu_education:  "Education",
    menu_skills:     "Skills",
    menu_zyntek:     "Zyntek",
    menu_projects:   "Projects",
    menu_contact:    "Contact",

    /* Header / CTA */
    contact_button:   "Get in touch",
    whatsapp_tooltip: "Talk to me!",

    /* Hero */
    hero_badge:       "Full Stack Developer",
    hero_stack:       "Full Stack Developer | JavaScript | React | Java | MySQL",
    hero_description: "Developer focused on building complete and efficient web applications. I combine the robustness of the Java ecosystem on the backend with the flexibility of JavaScript on the frontend to transform business rules into functional, secure, and high-impact systems.",
    hero_contact:     "Get in Touch",
    hero_cv:          "Download Resume",
    hero_status:      "Available for new projects",
    scroll_text:      "Scroll to explore",

    /* Sobre */
    about_badge:       "— ABOUT ME —",
    about_title:       "Building solutions through technology.",
    about_subtitle:    "Transforming challenges into intelligent digital experiences.",
    about_heading:     "Nice to meet you, I'm Levy Andrade.",
    about_text_one:    "My professional journey is marked by a constant pursuit of growth, combining <span class=\"hl\">technology,</span> creativity and strategic thinking to develop digital solutions that truly generate value for companies and people.",
    about_text_two:    "I currently focus my studies and projects on <span class=\"hl\">Software Engineering,</span> <span class=\"hl\">Full Stack</span> development and <span class=\"hl\">UI/UX Design</span>, building modern applications focused on quality, scalability and user experience.",
    about_text_three:  "Beyond technical development, I'm co-founder of <span class=\"hl\">Zyntek</span>, where I apply my expertise to create premium digital experiences, strategic visual identities and high-impact web solutions.",
    about_stat_dev:    "Developer",
    about_stat_design: "Designer",
    about_button:      "Let's Talk",

    /* Formação */
    education_badge:           "— EDUCATION —",
    education_title:           "A continuous learning journey.",
    education_subtitle:        "Each step built with dedication and purpose.",
    education_ads_period:      "Completed (2023 - 2026)",
    education_ads_title:       "Systems Analysis and Development",
    education_ads_institution: "Undergraduate Degree — Unipar",
    education_ads_text:        "Technical and academic training in systems development, algorithms, databases, software engineering and fundamentals of computing applied to modern solutions.",
    education_english_period:  "In progress",
    education_english_title:   "English from Zero to Advanced",
    education_english_text:    "Continuous improvement of technical communication for international projects, documentation reading and global collaboration.",
    education_java_period:     "In progress",
    education_java_title:      "Java and Spring Boot",
    education_java_institution:"Full Training — Udemy",
    education_java_text:       "Specialization in backend development, REST APIs, microservices, JWT authentication, Spring Security, JPA, Hibernate and database integration.",
    education_eng_period:      "Coming soon",
    education_eng_title:       "Bachelor's Degree in Software Engineering",
    education_eng_institution: "New Degree • Planned",
    education_eng_text:        "Next academic step focused on deepening complex systems architecture, software process quality, project management and corporate requirements engineering.",
    education_highlight_title: "Continuous Learning",
    education_highlight_text:  "I believe professional growth is built daily through practice, research and constant technological updates, always seeking excellence in modern software development.",

    /* Skills */
    skills_badge:        "— SKILLS —",
    skills_title:        "Technologies that transform ideas into solutions.",
    skills_description:  "A combination of software engineering, full stack development and experience design to build modern, scalable, high-performance applications.",
    skill_html5:         "Structuring modern web pages using advanced semantics, accessibility and SEO best practices.",
    skill_css:           "Styling complex layouts, animations, responsiveness and fluid design for an excellent visual experience.",
    skill_js:            "Modern development using ES6+, DOM manipulation, advanced animations and application logic.",
    skill_react:         "Building modern, reusable, performant interfaces using components and scalable architecture.",
    skill_java:          "Robust backend development using object-oriented programming, REST APIs, layered architecture and enterprise applications.",
    skill_mysql:         "Relational modeling, advanced queries, stored procedures, optimization and backend integration.",
    skill_spring:        "Modern API creation, JWT authentication, microservices, JPA, Hibernate and relational database integration.",
    skill_tailwind:      "Agile development of high-performance interfaces focused on productivity through utility classes.",
    skill_vite:          "Extremely fast build tool for modern frontend projects, optimizing development workflow and loading times.",
    skill_saas:          "Architecture and development of Software as a Service solutions, focusing on scalability, cloud computing, and high availability.",
    skill_github:        "Code versioning, agile collaboration, and deployment automation through modern CI/CD workflows.",
    skills_footer_title: "Continuous Evolution",
    skills_footer_text:  "Technology evolves daily and my goal is to keep up with this transformation through study, real projects and engineering best practices, delivering modern, performant, secure and scalable solutions.",

    /* Zyntek */
    zyntek_badge:         "— ZYNTEK —",
    zyntek_title:         "Technology, creativity and innovation together.",
    zyntek_company_title: "Much more than a software house.",
    zyntek_text_intro:    "Zyntek operates at the forefront of software development, merging <span class=\"hl\">elite engineering</span>, artificial intelligence, and high-end design. We were born from the union of three tech-obsessed minds, connected in college with the purpose of transforming bold visions into <span class=\"hl\">market powerhouses</span>.",
    zyntek_text_two:      "More than just lines of code or ordinary websites, we build robust, custom-tailored ecosystems. This unique delivery is symbolized by <span class=\"hl\">Zynk</span>, our technological guardian and cyberpunk identity, which embodies the fusion of the new tech generation's <span class=\"hl\">agile mindset</span> with the strategic solidity demanded by the corporate market.",
    zyntek_text_three:    "We are the driving force dedicated to generating profit, <span class=\"hl\">automation</span>, and ultimate authority for your business, engineering <span class=\"hl\">scalable and secure</span> solutions to structure, shield, and expand your operations toward absolute market leadership.",
    zyntek_stat_tech:     "Scalable Systems",
    zyntek_stat_design:   "High-Standard Interfaces",
    zyntek_stat_ai:       "Intelligent Solutions",
    zyntek_button:        "Meet Zyntek",
    zyntek_projects:      "See Projects",

    /* Projetos */
    projects_badge:         "— PROJECTS —",
    projects_title:         "Digital solutions built to generate impact.",
    projects_subtitle:      "Each project represents a combination of software engineering, strategic design and modern technology.",
    project_ras:            "High-performance institutional Landing Page focused on conversion for the health and fitness niche. Built with a modern, fully responsive architecture featuring dynamic pricing tables, a local news module, highlights section and multiple WhatsApp quick-capture points.",
    project_zyntek:         "Institutional platform built with a futuristic visual identity, high-fidelity animations and code engineering focused on corporate scalability.",
    project_portfolio:      "Professional advertising and branding portfolio, developed with high performance, fluid transitions, clean interface and fully responsive experience.",
    project_system:         "Institutional landing page developed for the automotive segment, focused on conversion, scheduling and service display with modern, fully responsive design.",
    project_webgame:        "Dynamic web application that replicates the turn-based combat mechanics of the Pokémon franchise. Built integrating a scalable API with an optimized front-end ecosystem, managing action logs, damage calculation and instant UI updates.",
    project_finance:        "Intelligent financial dashboard designed to transform complex data into strategic decisions through real-time interactive reports and charts.",
    project_button:         "View Project",
    projects_footer_title:  "Have an idea to turn into reality?",
    projects_footer_text:   "Let's build a modern, scalable and customized solution for your business using software engineering best practices.",
    projects_footer_button: "Start Project",

    /* Modal */
    modal_deploy: "Access Deploy",
    modal_repo:   "Access Repository",

    /* Contato */
    contact_badge:       "— CONTACT —",
    contact_title:       "Let's build the future of your project.",
    contact_description: "I'm available for opportunities, projects, strategic partnerships and custom digital solutions.",
    label_name:          "Full Name *",
    label_company:       "Company Name",
    label_phone:         "Phone / WhatsApp *",
    label_message:       "Project Idea Description *",
    contact_send:        "Start Your Project",
    hub_button:          "Let's Talk",

    /* Footer */
    footer_navigation:  "Navigation",
    footer_stack:       "Stack",
    footer_contact:     "Zyntek",
    footer_description: "I won't be defeated by current limits. I'm here to create solutions that challenge what's possible.",
    footer_cta_title:   "Let's build something extraordinary?",
    footer_cta_text:    "I transform complex challenges into high-impact digital solutions. Let's build the next project together?",
    footer_cta_button:  "Get in Touch",
    footer_copyright:   "© 2026 Levy Andrade Portfolio. All rights reserved.",
    footer_signature:   'Developed by <a href="https://www.linkedin.com/in/levyandrade/" target="_blank" rel="noopener noreferrer">Levy Andrade</a>, co-founder of <a href="https://zyntekconnect.com.br/" target="_blank" rel="noopener noreferrer">Zyntek</a>.',
  },


  /* ══════════════════════════════════════════════════════════════════
     ESPANHOL
     ══════════════════════════════════════════════════════════════════ */
  es: {
    /* Navegação */
    menu_home:       "Inicio",
    menu_about:      "Sobre mí",
    menu_education:  "Formación",
    menu_skills:     "Habilidades",
    menu_zyntek:     "Zyntek",
    menu_projects:   "Proyectos",
    menu_contact:    "Contacto",

    /* Header / CTA */
    contact_button:   "Contáctame",
    whatsapp_tooltip: "¡Habla conmigo!",

    /* Hero */
    hero_badge:       "Desarrollador Full Stack",
    hero_stack:       "Desarrollador Full Stack | JavaScript | React | Java | MySQL",
    hero_description: "Desarrollador enfocado en construir aplicaciones web completas y eficientes. Combino la robustez del ecosistema Java en el backend con la flexibilidad de JavaScript en el frontend para transformar reglas de negocio en sistemas funcionales, seguros y de alto impacto.",
    hero_contact:     "Contáctame",
    hero_cv:          "Descargar CV",
    hero_status:      "Disponible para nuevos proyectos",
    scroll_text:      "Desplázate para explorar",

    /* Sobre */
    about_badge:       "— SOBRE MÍ —",
    about_title:       "Construyendo soluciones a través de la tecnología.",
    about_subtitle:    "Transformando desafíos en experiencias digitales inteligentes.",
    about_heading:     "Encantado, soy Levy Andrade.",
    about_text_one:    "Mi trayectoria profesional está marcada por la búsqueda constante de evolución, uniendo <span class=\"hl\">tecnología,</span> creatividad y pensamiento estratégico para desarrollar soluciones digitales que realmente generan valor para empresas y personas.",
    about_text_two:    "Actualmente concentro mis estudios y proyectos en <span class=\"hl\">Ingeniería de Software,</span> desarrollo <span class=\"hl\">Full Stack</span> y <span class=\"hl\">UI/UX Design</span>, construyendo aplicaciones modernas con enfoque en calidad, escalabilidad y experiencia del usuario.",
    about_text_three:  "Además del desarrollo técnico, soy cofundador de <span class=\"hl\">Zyntek</span>, donde aplico toda mi experiencia para crear experiencias digitales premium, identidades visuales estratégicas y soluciones web de alto impacto.",
    about_stat_dev:    "Desarrollador",
    about_stat_design: "Diseñador",
    about_button:      "Conversemos",

    /* Formação */
    education_badge:           "— FORMACIÓN —",
    education_title:           "Un viaje de aprendizaje continuo.",
    education_subtitle:        "Cada etapa construida con dedicación y propósito.",
    education_ads_period:      "Concluida (2023 - 2026)",
    education_ads_title:       "Análisis y Desarrollo de Sistemas",
    education_ads_institution: "Graduación — Unipar",
    education_ads_text:        "Formación técnica y académica en desarrollo de sistemas, algoritmos, bases de datos, ingeniería de software y fundamentos de la computación aplicada al desarrollo de soluciones modernas.",
    education_english_period:  "En curso",
    education_english_title:   "Inglés de Cero a Avanzado",
    education_english_text:    "Perfeccionamiento continuo de la comunicación técnica para proyectos internacionales, lectura de documentación y colaboración global.",
    education_java_period:     "En curso",
    education_java_title:      "Java y Spring Boot",
    education_java_institution:"Formación Completa — Udemy",
    education_java_text:       "Especialización en desarrollo backend, APIs REST, microservicios, autenticación JWT, Spring Security, JPA, Hibernate e integración con bases de datos.",
    education_eng_period:      "Próximamente",
    education_eng_title:       "Licenciatura en Ingeniería de Software",
    education_eng_institution: "Nueva Carrera • Planificada",
    education_eng_text:        "Próximo paso académico enfocado en profundizar la arquitectura de sistemas complejos, calidad de procesos de software, gestión de proyectos e ingeniería de requisitos corporativos.",
    education_highlight_title: "Aprendizaje Continuo",
    education_highlight_text:  "Creo que la evolución profesional se construye diariamente a través de la práctica, la investigación y la constante actualización tecnológica, buscando siempre la excelencia en el desarrollo de software moderno.",

    /* Skills */
    skills_badge:        "— HABILIDADES —",
    skills_title:        "Tecnologías que transforman ideas en soluciones.",
    skills_description:  "Una combinación de ingeniería de software, desarrollo full stack y diseño de experiencia para construir aplicaciones modernas, escalables y de alto rendimiento.",
    skill_html5:         "Estructuración de páginas web modernas con semántica avanzada, accesibilidad y buenas prácticas de SEO.",
    skill_css:           "Diseño de layouts complejos, animaciones, responsividad y diseño fluido para una excelente experiencia visual.",
    skill_js:            "Desarrollo moderno con ES6+, manipulación del DOM, animaciones avanzadas y lógica de aplicaciones.",
    skill_react:         "Construcción de interfaces modernas, reutilizables y eficientes mediante componentes y arquitectura escalable.",
    skill_java:          "Desarrollo backend robusto con programación orientada a objetos, APIs REST, arquitectura en capas y aplicaciones empresariales.",
    skill_mysql:         "Modelado relacional, consultas avanzadas, procedimientos almacenados, optimización e integración con aplicaciones backend.",
    skill_spring:        "Creación de APIs modernas, autenticación JWT, microservicios, JPA, Hibernate e integración con bases de datos relacionales.",
    skill_tailwind:      "Desarrollo ágil de interfaces de alto rendimiento con foco en productividad mediante clases utilitarias.",
    skill_vite:          "Herramienta de compilación extremadamente rápida para proyectos frontend modernos, optimizando el tiempo de carga y el flujo de trabajo.",
    skill_saas:          "Arquitectura y desarrollo de soluciones basadas en Software como Servicio, con enfoque en escalabilidad, nube y alta disponibilidad.",
    skill_github:        "Versionado de código, colaboración ágil y automatización de despliegues a través de flujos de CI/CD y workflows modernos.",
    skills_footer_title: "Evolución Continua",
    skills_footer_text:  "La tecnología evoluciona diariamente y mi objetivo es acompañar esa transformación a través del estudio, proyectos reales y buenas prácticas de ingeniería, entregando soluciones modernas, eficientes, seguras y escalables.",

    /* Zyntek */
    zyntek_badge:         "— ZYNTEK —",
    zyntek_title:         "Tecnología, creatividad e innovación juntas.",
    zyntek_company_title: "Mucho más que una software house.",
    zyntek_text_intro:    "Zyntek actúa en la vanguardia del desarrollo de software, fusionando <span class=\"hl\">ingeniería de élite</span>, inteligencia artificial y diseño de alto nivel. Nacimos de la unión de tres mentes obsesionadas con la tecnología, conectadas en la universidad con el propósito de transformar visiones audaces en <span class=\"hl\">potencias del mercado</span>.",
    zyntek_text_two:      "Más que líneas de código o sitios web comunes, creamos ecosistemas robustos y a la medida. Esta entrega única está simbolizada por <span class=\"hl\">Zynk</span>, nuestro guardián tecnológico e identidad cyberpunk, que representa la fusión entre la <span class=\"hl\">mentalidad ágil</span> de la nueva generación tech y la solidez que exige el mercado corporativo.",
    zyntek_text_three:    "Somos la fuerza motriz dedicada a generar ganancias, <span class=\"hl\">automatización</span> y máxima autoridad para tu negocio, proyectando soluciones <span class=\"hl\">escalables y seguras</span> para estructurar, blindar y expandir tus operaciones hacia el liderazgo absoluto del mercado.",
    zyntek_stat_tech:     "Sistemas Escalables",
    zyntek_stat_design:   "Interfaces de Alto Estándar",
    zyntek_stat_ai:       "Soluciones Inteligentes",
    zyntek_button:        "Conocer Zyntek",
    zyntek_projects:      "Ver Proyectos",

    /* Projetos */
    projects_badge:         "— PROYECTOS —",
    projects_title:         "Soluciones digitales desarrolladas para generar impacto.",
    projects_subtitle:      "Cada proyecto representa una combinación de ingeniería de software, diseño estratégico y tecnología moderna.",
    project_ras:            "Landing Page institucional de alto rendimiento enfocada en la conversión para el nicho de salud y fitness. Desarrollada con una arquitectura moderna y 100% responsiva, con tablas dinámicas de planes, módulo de noticias locales y múltiples puntos de captura rápida vinculados a WhatsApp.",
    project_zyntek:         "Plataforma institucional construida con identidad visual futurista, animaciones de alta fidelidad e ingeniería de código enfocada en escalabilidad corporativa.",
    project_portfolio:      "Portafolio profesional de publicidad y branding, desarrollado con alto rendimiento, transiciones fluidas, interfaz limpia y experiencia totalmente responsiva.",
    project_system:         "Landing page institucional desarrollada para el segmento automotriz, enfocada en conversión, agendamientos y exhibición de servicios con diseño moderno y totalmente responsivo.",
    project_webgame:        "Aplicación web dinámica que replica la mecánica de combate por turnos de la franquicia Pokémon. Construida integrando una API escalable con un ecosistema front-end optimizado, gestionando logs de acciones, cálculo de daño y actualización inmediata de la interfaz.",
    project_finance:        "Dashboard financiero inteligente diseñado para transformar datos complejos en decisiones estratégicas a través de informes y gráficos interactivos en tiempo real.",
    project_button:         "Ver Proyecto",
    projects_footer_title:  "¿Tienes una idea para convertir en realidad?",
    projects_footer_text:   "Construyamos una solución moderna, escalable y personalizada para tu negocio utilizando las mejores prácticas de ingeniería de software.",
    projects_footer_button: "Iniciar Proyecto",

    /* Modal */
    modal_deploy: "Acceder al Deploy",
    modal_repo:   "Acceder al Repositorio",

    /* Contato */
    contact_badge:       "— CONTACTO —",
    contact_title:       "Construyamos el futuro de tu proyecto.",
    contact_description: "Disponible para oportunidades, proyectos, asociaciones estratégicas y desarrollo de soluciones digitales personalizadas.",
    label_name:          "Nombre Completo *",
    label_company:       "Nombre de la Empresa",
    label_phone:         "Teléfono / WhatsApp *",
    label_message:       "Descripción de la Idea del Proyecto *",
    contact_send:        "Inicia tu Proyecto",
    hub_button:          "Conversemos",

    /* Footer */
    footer_navigation:  "Navegación",
    footer_stack:       "Stack",
    footer_contact:     "Zyntek",
    footer_description: "No seré derrotado por los límites actuales. Estoy aquí para crear soluciones que desafíen lo posible.",
    footer_cta_title:   "¿Construimos algo extraordinario?",
    footer_cta_text:    "Transformo desafíos complejos en soluciones digitales de alto impacto. ¿Construimos el próximo proyecto juntos?",
    footer_cta_button:  "Contáctame",
    footer_copyright:   "© 2026 Portafolio Levy Andrade. Todos los derechos reservados.",
    footer_signature:   'Desarrollado por <a href="https://www.linkedin.com/in/levyandrade/" target="_blank" rel="noopener noreferrer">Levy Andrade</a>, cofundador de <a href="https://zyntekconnect.com.br/" target="_blank" rel="noopener noreferrer">Zyntek</a>.',
  },
};


/* ── INICIALIZA I18n ──────────────────────────────────────────────── */
function initI18n() {
  const { langBtn, langDropdown, currentLang } = DOM;

  /**
   * Aplica um idioma a toda a página.
   * — Atualiza todos os elementos com [data-i18n].
   * — Atualiza o indicador de idioma no header.
   * — Marca o botão de idioma como ativo.
   * — Persiste no localStorage.
   * — Atualiza o atributo lang do <html>.
   * @param {string} lang — código do idioma: "pt" | "en" | "es"
   */
  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    /* Atualiza todos os elementos traduzíveis */
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* Atualiza indicador de idioma */
    if (currentLang) currentLang.textContent = lang.toUpperCase();

    /* Atualiza botões de seleção */
    document.querySelectorAll(".lang-option").forEach((btn) => {
      const isActive = btn.dataset.language === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    /* Fecha dropdown */
    if (langDropdown) langDropdown.classList.remove("open");
    if (langBtn)      langBtn.setAttribute("aria-expanded", "false");

    /* Atualiza lang do documento */
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

    /* Persiste no localStorage */
    localStorage.setItem(CONFIG.STORAGE_LANGUAGE, lang);
  }

  /* Toggle do dropdown */
  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.toggle("open");
      langBtn.setAttribute("aria-expanded", String(isOpen));
    });

    /* Fecha dropdown ao clicar fora */
    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
      if (langBtn) langBtn.setAttribute("aria-expanded", "false");
    });

    /* Seleção de idioma via botões do dropdown */
    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLanguage(btn.dataset.language);
      });
    });
  }

  /* Atalhos de teclado: Alt+1, Alt+2, Alt+3 */
  document.addEventListener("keydown", (e) => {
    if (!e.altKey) return;
    const langMap = { "1": "pt", "2": "en", "3": "es" };
    if (langMap[e.key]) applyLanguage(langMap[e.key]);
  });

  /* Carrega idioma salvo ou usa "pt" como padrão */
  const savedLang = localStorage.getItem(CONFIG.STORAGE_LANGUAGE) || "pt";
  applyLanguage(savedLang);
}


/* ══════════════════════════════════════════════════════════════════════
   12. EFEITO TYPING + GLITCH
   — Digita o nome completo letra por letra.
   — Aplica efeito glitch periódico.
   — Apaga e redigita em loop.
   ══════════════════════════════════════════════════════════════════════ */
function initTyping() {
  const { typingName } = DOM;
  if (!typingName) return;

  const { FULL_NAME, GLITCH_CHARS } = CONFIG;
  let charIndex    = 0;
  let isDeleting   = false;
  let glitchQueued = false;

  /** Embaralha o texto com caracteres aleatórios e revela progressivamente. */
  function glitchText() {
    let iteration = 0;
    const intervalId = setInterval(() => {
      typingName.textContent = FULL_NAME.split("").map((char, i) => {
        if (i < iteration) return FULL_NAME[i];
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
      }).join("");

      iteration += 0.5;

      if (iteration >= FULL_NAME.length) {
        clearInterval(intervalId);
        typingName.textContent = FULL_NAME;
      }
    }, 30);
  }

  /** Loop principal de digitação / apagamento. */
  function type() {
    typingName.textContent = FULL_NAME.substring(0, charIndex);

    if (!isDeleting) {
      charIndex++;

      if (charIndex > FULL_NAME.length) {
        /* Dispara glitch com delay após completar a digitação */
        if (!glitchQueued) {
          glitchQueued = true;
          setTimeout(() => { glitchText(); glitchQueued = false; }, CONFIG.TYPING_GLITCH_DELAY_MS);
        }
        /* Pausa antes de começar a apagar */
        setTimeout(() => { isDeleting = true; type(); }, CONFIG.TYPING_PAUSE_FULL_MS);
        return;
      }
      /* Velocidade de digitação variável para realismo */
      setTimeout(type, 80 + Math.random() * 40);

    } else {
      charIndex--;

      if (charIndex < 0) {
        isDeleting = false;
        charIndex  = 0;
        setTimeout(type, CONFIG.TYPING_PAUSE_EMPTY_MS);
        return;
      }
      /* Apagamento mais rápido que a digitação */
      setTimeout(type, 30);
    }
  }

  /* Inicia com pequeno delay inicial */
  setTimeout(type, 800);

  /* Glitch periódico independente do ciclo de digitação */
  setInterval(glitchText, CONFIG.GLITCH_INTERVAL_MS);
}


/* ══════════════════════════════════════════════════════════════════════
   13. PARALLAX 3D — CYBERFRAME
   — Aplica rotação 3D suave na moldura de perfil conforme
     o mouse se move pela tela.
   — Apenas em dispositivos com hover real.
   ══════════════════════════════════════════════════════════════════════ */
function initCyberFrame() {
  const { cyberFrame } = DOM;
  if (!cyberFrame) return;
  if (!Utils.hasHover()) return;

  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 14;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    cyberFrame.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  }, { passive: true });
}


/* ══════════════════════════════════════════════════════════════════════
   14. SCROLL REVEAL
   — Revela elementos com [data-reveal] ao entrarem no viewport.
   — Respeita prefers-reduced-motion.
   ══════════════════════════════════════════════════════════════════════ */
function initReveal() {
  const revealEls = document.querySelectorAll("[data-reveal]");
  if (!revealEls.length) return;

  /* Se o usuário prefere menos movimento, revela tudo de uma vez */
  if (Utils.prefersReducedMotion()) {
    revealEls.forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("revealed");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
}


/* ══════════════════════════════════════════════════════════════════════
   15. CARROSSEL DE PROJETOS
   — Exibe 3 cards no desktop (esquerdo, central, direito).
   — Exibe 1 card no mobile (< 900px).
   — Suporta: setas de navegação, dots clicáveis, swipe touch e resize.
   ══════════════════════════════════════════════════════════════════════ */
function initProjectCarousel() {
  const {
    projectStage: stage,
    projectPrev:  prevBtn,
    projectNext:  nextBtn,
    carouselDots: dotsWrap,
  } = DOM;

  if (!stage) return;

  const cards = Array.from(stage.querySelectorAll(".project-card"));
  if (!cards.length) return;

  const GAP = 24;
  let centerIndex = 0;

  /** Retorna quantos cards são visíveis simultaneamente. */
  function getVisibleCount() {
    return window.innerWidth <= 900 ? 1 : 3;
  }

  /** Calcula a largura de cada card baseada no espaço disponível. */
  function calcCardWidth(visibleCount) {
    return (stage.offsetWidth - GAP * (visibleCount - 1)) / visibleCount;
  }

  /** Cria os dots de navegação. */
  function buildDots() {
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    cards.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.className = "c-dot";
      dot.dataset.index = i;
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Ir para projeto ${i + 1}`);
      dot.addEventListener("click", () => { centerIndex = i; render(); });
      dotsWrap.appendChild(dot);
    });
  }

  /** Sincroniza o estado visual dos dots com o índice atual. */
  function updateDots() {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll(".c-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === centerIndex);
      dot.setAttribute("aria-selected", i === centerIndex ? "true" : "false");
      dot.setAttribute("aria-current",  i === centerIndex ? "true" : "false");
    });
  }

  /**
   * Posiciona e configura visualmente um card.
   * @param {HTMLElement} card      — elemento do card
   * @param {number}      leftPx   — posição left em px
   * @param {number}      widthPx  — largura em px
   * @param {string}      className — "pc-left" | "pc-center" | "pc-right"
   */
  function placeCard(card, leftPx, widthPx, className) {
    card.style.left          = leftPx + "px";
    card.style.width         = widthPx + "px";
    card.style.opacity       = className === "pc-center" ? "1" : "0.75";
    card.style.pointerEvents = "auto";
    card.classList.add(className);
  }

  /** Re-renderiza o carrossel completo. */
  function render() {
    const visible = getVisibleCount();
    const cardW   = calcCardWidth(visible);

    /* Reseta todos os cards */
    cards.forEach((card) => {
      card.classList.remove("pc-left", "pc-center", "pc-right");
      card.style.transform     = "";
      card.style.opacity       = "0";
      card.style.pointerEvents = "none";
      card.style.width         = cardW + "px";
    });

    if (visible === 1) {
      /* Mobile: apenas o card central */
      const center = cards[Utils.mod(centerIndex, cards.length)];
      center.style.left          = "0px";
      center.style.opacity       = "1";
      center.style.pointerEvents = "auto";
      center.classList.add("pc-center");
      stage.style.minHeight      = center.offsetHeight + "px";
    } else {
      /* Desktop: esquerdo + central + direito */
      const idxLeft   = Utils.mod(centerIndex - 1, cards.length);
      const idxCenter = Utils.mod(centerIndex,     cards.length);
      const idxRight  = Utils.mod(centerIndex + 1, cards.length);

      placeCard(cards[idxLeft],   0,                 cardW, "pc-left");
      placeCard(cards[idxCenter], cardW + GAP,        cardW, "pc-center");
      placeCard(cards[idxRight],  (cardW + GAP) * 2, cardW, "pc-right");

      requestAnimationFrame(() => {
        stage.style.minHeight = (cards[idxCenter].offsetHeight + 16) + "px";
      });
    }

    updateDots();
  }

  /* Setas de navegação */
  if (prevBtn) prevBtn.addEventListener("click", () => {
    centerIndex = Utils.mod(centerIndex - 1, cards.length);
    render();
  });
  if (nextBtn) nextBtn.addEventListener("click", () => {
    centerIndex = Utils.mod(centerIndex + 1, cards.length);
    render();
  });

  /* Suporte a swipe touch */
  let touchStartX = 0;
  stage.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  stage.addEventListener("touchend", (e) => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (delta >  CONFIG.CAROUSEL_SWIPE_THRESHOLD) { centerIndex = Utils.mod(centerIndex + 1, cards.length); render(); }
    if (delta < -CONFIG.CAROUSEL_SWIPE_THRESHOLD) { centerIndex = Utils.mod(centerIndex - 1, cards.length); render(); }
  });

  /* Re-renderiza ao redimensionar janela (com debounce) */
  window.addEventListener("resize", Utils.debounce(render, CONFIG.CAROUSEL_RESIZE_DEBOUNCE_MS), { passive: true });

  /* Inicializa */
  buildDots();
  requestAnimationFrame(() => requestAnimationFrame(render));
}


/* ══════════════════════════════════════════════════════════════════════
   16. MODAL DINÂMICO DE PROJETOS
   — Layout duas colunas: mídia (esquerda) + texto + botões (direita).
   — Acessibilidade: focus trap, Escape, aria-hidden em body scroll.
   — Mídia: suporte a vídeo local, YouTube embed e imagem fallback.
   ══════════════════════════════════════════════════════════════════════ */
function initProjectModal() {
  const {
    projectModal: backdrop,
    pmodalClose:  closeBtn,
    pmodalCat,
    pmodalTitle,
    pmodalTags,
    pmodalMedia,
    pmodalDesc,
    pmodalDetails,
    pmodalDeploy,
    pmodalGithub,
  } = DOM;

  if (!backdrop) return;

  /* Elemento focado antes de abrir o modal (restaurar ao fechar) */
  let lastFocusedElement = null;

  /**
   * Injeta o conteúdo de mídia na coluna esquerda do modal.
   * Prioridade: vídeo MP4 / YouTube → imagem do card → placeholder.
   * @param {HTMLElement} card  — card do projeto
   * @param {string}      video — URL do vídeo ou ""
   * @param {string}      title — título do projeto
   */
  function buildMediaContent(card, video, title) {
    pmodalMedia.innerHTML = "";

    if (video && video !== "#") {
      /* YouTube */
      if (video.includes("youtube.com") || video.includes("youtu.be")) {
        const embedUrl = video
          .replace("watch?v=", "embed/")
          .replace("youtu.be/", "www.youtube.com/embed/");
        const iframe = document.createElement("iframe");
        iframe.src         = `${embedUrl}?autoplay=1&mute=1&loop=1&rel=0`;
        iframe.allow       = "autoplay; fullscreen";
        iframe.title       = title;
        iframe.style.cssText = "width:100%;height:100%;border:none;display:block;";
        pmodalMedia.appendChild(iframe);
        return;
      }

      /* Vídeo local */
      const vid = document.createElement("video");
      vid.src         = video;
      vid.autoplay    = true;
      vid.muted       = true;
      vid.loop        = true;
      vid.controls    = true;
      vid.playsInline = true;
      vid.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
      pmodalMedia.appendChild(vid);
      return;
    }

    /* Fallback: imagem de capa do card */
    const cardImg = card.querySelector(".project-img-wrap img");
    if (cardImg && cardImg.src) {
      const img = document.createElement("img");
      img.src          = cardImg.src;
      img.alt          = title;
      img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
      pmodalMedia.appendChild(img);
      return;
    }

    /* Placeholder genérico */
    pmodalMedia.innerHTML = `
      <div class="pmodal-media-placeholder">
        <i class="ri-video-line" aria-hidden="true"></i>
        <span>Prévia em breve</span>
      </div>`;
  }

  /**
   * Abre o modal com os dados do card selecionado.
   * @param {HTMLElement} card — card do projeto clicado
   */
  function openModal(card) {
    const title   = card.dataset.title   || "Projeto";
    const cat     = card.dataset.cat     || "";
    const desc    = card.dataset.desc    || "";
    const tags    = card.dataset.tags    || "";
    const video   = card.dataset.video   || "";
    const deploy  = card.dataset.deploy  || "";
    const github  = card.dataset.github  || "";
    const details = card.dataset.details || "";

    /* Preenche cabeçalho */
    if (pmodalCat)   pmodalCat.textContent   = cat;
    if (pmodalTitle) pmodalTitle.textContent = title;
    if (pmodalDesc)  pmodalDesc.textContent  = desc;

    /* Tags de tecnologia */
    if (pmodalTags) {
      pmodalTags.innerHTML = tags.split(",")
        .filter(Boolean)
        .map((t) => `<span>${t.trim()}</span>`)
        .join("");
    }

    /* Detalhes técnicos (coluna direita) */
    if (pmodalDetails) {
      pmodalDetails.textContent   = details;
      pmodalDetails.style.display = details ? "block" : "none";
    }

    /* Mídia (coluna esquerda) */
    buildMediaContent(card, video, title);

    /* Botão Deploy: exibe apenas se tiver link real */
    if (pmodalDeploy) {
      const hasDeploy = deploy && deploy !== "#";
      pmodalDeploy.href          = hasDeploy ? deploy : "#";
      pmodalDeploy.style.display = hasDeploy ? "" : "none";
    }

    /* Botão GitHub: exibe apenas se tiver link real */
    if (pmodalGithub) {
      const hasGithub = github && github !== "#";
      pmodalGithub.href          = hasGithub ? github : "#";
      pmodalGithub.style.display = hasGithub ? "" : "none";
    }

    /* Acessibilidade */
    lastFocusedElement = document.activeElement;
    backdrop.removeAttribute("hidden");
    backdrop.setAttribute("aria-modal", "true");
    backdrop.setAttribute("role", "dialog");

    requestAnimationFrame(() => backdrop.classList.add("pmodal-open"));

    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }

  /** Fecha o modal e restaura o estado da página. */
  function closeModal() {
    backdrop.classList.remove("pmodal-open");
    setTimeout(() => {
      backdrop.setAttribute("hidden", "");
      if (pmodalMedia) pmodalMedia.innerHTML = "";
      if (pmodalTags)  pmodalTags.innerHTML  = "";
      document.body.style.overflow = "";
      if (lastFocusedElement) lastFocusedElement.focus();
    }, 350);
  }

  /* Delegação de clique nos botões "Ver Projeto" */
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".btn-open-modal");
    if (!trigger) return;
    const card = trigger.closest(".project-card");
    if (card) openModal(card);
  });

  /* Fechar pelo botão X */
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  /* Fechar clicando no backdrop */
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) closeModal();
  });

  /* Fechar com Escape */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !backdrop.hasAttribute("hidden")) closeModal();
  });
}


/* ══════════════════════════════════════════════════════════════════════
   17. FORMULÁRIO DE ORÇAMENTO (Zyntek)
   — Valida nome, telefone e descrição do projeto.
   — Envia mensagem formatada via WhatsApp da Zyntek.
   — Limpa erros inline conforme o usuário digita.
   ══════════════════════════════════════════════════════════════════════ */
function initBudgetForm() {
  const { budgetForm: form } = DOM;
  if (!form) return;

  /**
   * Exibe uma mensagem de erro inline em um campo.
   * @param {string} fieldId — id do input
   * @param {string} errorId — id do elemento de erro
   * @param {string} message — texto do erro
   */
  function showFieldError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (field) field.classList.add("invalid");
    if (error) error.textContent = message;
  }

  /**
   * Remove a mensagem de erro inline de um campo.
   * @param {string} fieldId — id do input
   * @param {string} errorId — id do elemento de erro
   */
  function clearFieldError(fieldId, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (field) field.classList.remove("invalid");
    if (error) error.textContent = "";
  }

  /* Mapa de campos → ids de erro */
  const errorMap = {
    inputName:    "errorName",
    inputPhone:   "errorPhone",
    inputMessage: "errorMessage",
  };

  /* Limpa erros ao digitar */
  Object.keys(errorMap).forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", () => clearFieldError(id, errorMap[id]));
  });

  /* Submissão do formulário */
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome     = document.getElementById("inputName")?.value.trim()    || "";
    const empresa  = document.getElementById("inputCompany")?.value.trim() || "";
    const telefone = document.getElementById("inputPhone")?.value.trim()   || "";
    const projeto  = document.getElementById("inputMessage")?.value.trim() || "";

    let isValid = true;

    if (!nome || nome.length < 2) {
      showFieldError("inputName", "errorName", "Por favor, informe seu nome completo.");
      isValid = false;
    } else {
      clearFieldError("inputName", "errorName");
    }

    if (!telefone || telefone.replace(/\D/g, "").length < 10) {
      showFieldError("inputPhone", "errorPhone", "Informe um WhatsApp válido com DDD.");
      isValid = false;
    } else {
      clearFieldError("inputPhone", "errorPhone");
    }

    if (!projeto || projeto.length < 10) {
      showFieldError("inputMessage", "errorMessage", "Descreva seu projeto em pelo menos 10 caracteres.");
      isValid = false;
    } else {
      clearFieldError("inputMessage", "errorMessage");
    }

    if (!isValid) return;

    /* Monta mensagem formatada para o WhatsApp da Zyntek */
    const mensagem = [
      "◤━━━━━━━━━━━━━━━━━◥",
      "         Z Y N T E K",
      "◣━━━━━━━━━━━━━━━━━◢",
      "",
      `Cliente: ${nome}`,
      `Empresa: ${empresa || "Não informado"}`,
      `Contato: ${telefone}`,
      "",
      "━━━━━━━━━━━━━━━━━━━",
      "",
      "DESCRIÇÃO DO PROJETO",
      "",
      `"${projeto}"`,
      "",
      "━━━━━━━━━━━━━━━━━━━",
      "",
      "Tenho interesse em desenvolver este projeto com a Zyntek e gostaria de receber uma análise estratégica.",
      "",
      "Aguardo o contato da equipe.",
      "Obrigado.",
    ].join("\n");

    window.open(
      `https://wa.me/554488317870?text=${encodeURIComponent(mensagem)}`,
      "_blank",
      "noopener,noreferrer"
    );

    form.reset();
  });
}


/* ══════════════════════════════════════════════════════════════════════
   18. EFEITO 3D NAS SKILL CARDS
   — Aplica rotação perspectiva 3D conforme a posição do mouse
     sobre o card.
   — Apenas em dispositivos com hover real.
   ══════════════════════════════════════════════════════════════════════ */
function initSkillCards() {
  if (!Utils.hasHover()) return;

  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect    = card.getBoundingClientRect();
      const x       = e.clientX - rect.left;
      const y       = e.clientY - rect.top;
      const rotateY = (x - rect.width  / 2) / 18;
      const rotateX = -(y - rect.height / 2) / 18;
      card.style.transition = "transform .08s linear";
      card.style.transform  = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    }, { passive: true });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "transform .45s cubic-bezier(.22,1,.36,1)";
      card.style.transform  = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)";
    });
  });
}


/* ══════════════════════════════════════════════════════════════════════
   19. RIPPLE EFFECT NOS BOTÕES
   — Cria um efeito de onda ao clicar em botões primários, secundários
     e de projeto.
   ══════════════════════════════════════════════════════════════════════ */
function initRippleEffect() {
  Utils.injectStyle("ripple-anim", `
    @keyframes ripple-anim { to { transform: scale(2.5); opacity: 0; } }
  `);

  document.querySelectorAll(".btn-primary, .btn-secondary, .btn-project").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const size   = Math.max(this.clientWidth, this.clientHeight);
      const rect   = this.getBoundingClientRect();
      const ripple = document.createElement("span");

      ripple.style.cssText = `
        position: absolute; pointer-events: none; border-radius: 50%;
        width: ${size}px; height: ${size}px;
        left: ${e.clientX - rect.left - size / 2}px;
        top:  ${e.clientY - rect.top  - size / 2}px;
        background: rgba(255,255,255,.2);
        transform: scale(0);
        animation: ripple-anim .6s ease-out forwards;
      `;

      if (window.getComputedStyle(this).position === "static") {
        this.style.position = "relative";
      }
      this.style.overflow = "hidden";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
}


/* ══════════════════════════════════════════════════════════════════════
   20. BOTÃO DOWNLOAD CURRÍCULO
   — Feedback visual de "Baixando..." durante 1 segundo.
   — Exibe "Download iniciado" por 1,8 segundos antes de restaurar.
   ══════════════════════════════════════════════════════════════════════ */
function initDownloadCV() {
  const { downloadCvBtn: btn } = DOM;
  if (!btn) return;

  btn.addEventListener("click", function () {
    /* Previne cliques duplicados durante o estado de loading */
    if (this.classList.contains("loading")) return;

    const textEl   = this.querySelector(".download-text");
    const origText = textEl ? textEl.innerHTML : "";

    this.classList.add("loading");
    if (textEl) textEl.innerHTML = "Baixando...";

    setTimeout(() => {
      this.classList.remove("loading");
      this.classList.add("success");
      if (textEl) textEl.innerHTML = "Download iniciado";

      setTimeout(() => {
        this.classList.remove("success");
        if (textEl) textEl.innerHTML = origText;
      }, 1800);
    }, 1000);
  });
}


/* ══════════════════════════════════════════════════════════════════════
   21. PARALLAX NA SEÇÃO DE CONTATO
   — Desloca suavemente o background-position conforme o scroll.
   — Apenas em dispositivos com hover real e sem prefers-reduced-motion.
   ══════════════════════════════════════════════════════════════════════ */
function initContactParallax() {
  const section = DOM.contactSection;
  if (!section) return;
  if (!Utils.hasHover()) return;
  if (Utils.prefersReducedMotion()) return;

  let rafScheduled = false;

  function applyParallax() {
    const rect  = section.getBoundingClientRect();
    const viewH = window.innerHeight;

    /* Progresso de 0 (seção acima) a 1 (seção abaixo da tela) */
    const progress = (viewH - rect.top) / (viewH + rect.height);
    const clamped  = Math.max(0, Math.min(1, progress));

    /* Deslocamento máximo: ±30px */
    const offsetY  = (clamped - 0.5) * 60;

    section.style.backgroundPositionY = `calc(50% + ${offsetY}px)`;
    rafScheduled = false;
  }

  window.addEventListener("scroll", () => {
    if (!rafScheduled) {
      rafScheduled = true;
      requestAnimationFrame(applyParallax);
    }
  }, { passive: true });

  /* Estado inicial */
  applyParallax();
}


/* ══════════════════════════════════════════════════════════════════════
   22. EVENT LISTENERS GLOBAIS
   — Registra listeners que não pertencem a nenhum módulo específico.
   ══════════════════════════════════════════════════════════════════════ */
function initGlobalListeners() {
  /* Fecha o dropdown de idioma ao pressionar Escape */
  const { langBtn, langDropdown } = DOM;
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && langDropdown && langDropdown.classList.contains("open")) {
      langDropdown.classList.remove("open");
      if (langBtn) langBtn.setAttribute("aria-expanded", "false");
    }
  });
}


/* ══════════════════════════════════════════════════════════════════════
   23. INICIALIZAÇÃO
   — initPreloader e initTheme executados imediatamente (antes do DOM
     estar pronto) para evitar FOUC (Flash of Unstyled Content).
   — Demais módulos aguardam o DOMContentLoaded.
   ══════════════════════════════════════════════════════════════════════ */
(function bootstrap() {

  /* ── Executados antes do DOM completo (evitam FOUC) ─── */
  initPreloader();
  initTheme();

  /* ── Executados após DOM completo ─────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    initCursor();
    initParticles();
    initHeader();
    initSmoothScroll();
    initMobileMenu();
    initI18n();
    initTyping();
    initCyberFrame();
    initReveal();
    initProjectCarousel();
    initProjectModal();
    initBudgetForm();
    initSkillCards();
    initRippleEffect();
    initDownloadCV();
    initContactParallax();
    initGlobalListeners();

    /* Marca o documento como carregado (para animações CSS) */
    document.body.classList.add("loaded");
  });

})();