const fallbackProfile = {
  name: "ZENG Chen bo",
  englishName: "Magcial",
  role: "AI Application Developer / Large Model Engineer",
  location: "Tai Po District, Hong Kong",
  focus: "LLM Fine-tuning · RAG · Multimodal AI",
  status: "Open to AI engineering and research collaboration",
  summary:
    "MSc AI student at The Education University of Hong Kong, focused on LLM fine-tuning, multimodal teaching agents, RAG systems, speech AI and robot interaction platforms.",
  about: [
    "I work across the full AI application chain: data construction, model fine-tuning, agent architecture, multimodal input, deployment and product interaction.",
    "My recent work includes Qwen-based K12 mathematics teaching agents, Whisper + LLM + TTS oral coaching, RAG educational agents, AI teaching platforms and web-controlled robot interaction systems."
  ],
  contacts: [
    { label: "GitHub", url: "https://github.com/s1161858" },
    { label: "Email", url: "mailto:s1161858@s.eduhk.hk" },
    { label: "Resume PDF", url: "assets/documents/CV-ZENG-Chen-bo.pdf" }
  ],
  skills: [
    {
      icon: "LLM",
      title: "Large Model Engineering",
      text: "Instruction tuning, LoRA/SFT, Qwen-based domain modeling, chain-of-thought guided dialogue."
    },
    {
      icon: "RAG",
      title: "Agent Systems",
      text: "Retrieval-augmented agents, educational workflows, multi-turn tutoring and product integration."
    },
    {
      icon: "MM",
      title: "Multimodal AI",
      text: "OCR + semantic parsing, speech recognition, TTS, image-text question understanding."
    },
    {
      icon: "GPU",
      title: "Deployment",
      text: "End-to-end deployment on GPU clusters, Slurm workflows, API and platform client integration."
    }
  ],
  experience: [
    {
      period: "2025-2026",
      title: "MSc in Artificial Intelligence for Executive Professional",
      org: "The Education University of Hong Kong",
      text: "Coursework includes data science, AI, spatial intelligence, agent development, chatbot integration, LLM fine-tuning, knowledge distillation, reinforcement learning, R and Python."
    },
    {
      period: "2025-2026",
      title: "Student Assistant, Data Science Direction",
      org: "EdUHK, supervised by Prof. Ling Man Ho Alpha",
      text: "Collected and integrated multi-source heterogeneous datasets and replicated deep-learning event/time-series frameworks including SHPP, RMTPP and THP."
    },
    {
      period: "2025-2026",
      title: "AI Application Development and Large Model Engineer",
      org: "EdUHK AIDCEC Team",
      text: "Built Qwen fine-tuned mathematics teaching agents and an English AI oral coaching system based on Whisper, GenAI and Kokoro TTS."
    },
    {
      period: "2025-2026",
      title: "AI Application Development and Large Model Engineer",
      org: "5Gnu MultiMedia Limited (HK)",
      text: "Worked on RAG agents, AI teaching platform integration and Booster K1 robot SDK based distributed control."
    },
    {
      period: "2025-2026",
      title: "Huawei ICT Competition Hong Kong SAR",
      org: "EdUHK Team",
      text: "Won first place in the Group AI category and ranked fourth in the Cloud category."
    }
  ]
};

const fallbackProjects = [];

async function loadJson(path, fallback) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) throw new Error(`Cannot load ${path}`);
    return await response.json();
  } catch (error) {
    console.warn(error);
    return fallback;
  }
}

function setProfileText(profile) {
  document.title = `${profile.englishName || profile.name} | AI Engineer`;
  document.querySelectorAll("[data-profile]").forEach((node) => {
    const key = node.dataset.profile;
    if (profile[key]) node.textContent = profile[key];
  });

  const mark = document.querySelector(".brand-mark");
  if (mark) {
    mark.textContent = (profile.englishName || profile.name).slice(0, 1).toUpperCase();
  }
}

function renderAbout(profile) {
  const about = document.querySelector("#about-content");
  about.innerHTML = "";
  profile.about.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    about.append(paragraph);
  });
}

function renderContacts(profile) {
  const contactLinks = document.querySelector("#contact-links");
  contactLinks.innerHTML = "";
  profile.contacts.forEach((contact) => {
    const link = document.createElement("a");
    link.href = contact.url;
    link.textContent = contact.label;
    if (!contact.url.startsWith("mailto:")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    contactLinks.append(link);
  });
}

function renderSkills(profile) {
  const skillGrid = document.querySelector("#skill-grid");
  skillGrid.innerHTML = "";
  profile.skills.forEach((skill) => {
    const tile = document.createElement("article");
    tile.className = "skill-tile";
    tile.innerHTML = `<span>${skill.icon}</span><h3>${skill.title}</h3><p>${skill.text}</p>`;
    skillGrid.append(tile);
  });
}

function renderExperience(profile) {
  const list = document.querySelector("#experience-list");
  list.innerHTML = "";
  profile.experience.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item";
    row.innerHTML = `
      <time>${item.period}</time>
      <div>
        <h3>${item.title}</h3>
        <p><strong>${item.org}</strong></p>
        <p>${item.text}</p>
      </div>
    `;
    list.append(row);
  });
}

function projectTypes(projects) {
  return ["All", ...Array.from(new Set(projects.map((project) => project.type).filter(Boolean)))];
}

function renderFilters(projects, onFilter) {
  const filterBar = document.querySelector("#project-filters");
  filterBar.innerHTML = "";
  projectTypes(projects).forEach((type, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = type;
    button.className = index === 0 ? "active" : "";
    button.addEventListener("click", () => {
      filterBar.querySelectorAll("button").forEach((node) => node.classList.remove("active"));
      button.classList.add("active");
      onFilter(type);
    });
    filterBar.append(button);
  });
}

function renderProjects(projects, filter = "All") {
  const grid = document.querySelector("#project-grid");
  const visibleProjects = filter === "All" ? projects : projects.filter((project) => project.type === filter);
  grid.innerHTML = "";

  visibleProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card${project.featured ? " featured" : ""}`;
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--y", `${event.clientY - rect.top}px`);
    });

    const content = document.createElement("div");
    const meta = document.createElement("div");
    meta.className = "project-meta";

    [project.type, project.status, ...(project.tags || [])].filter(Boolean).forEach((item) => {
      const pill = document.createElement("span");
      pill.className = `pill ${String(item).toLowerCase()}`;
      pill.textContent = item;
      meta.append(pill);
    });

    const title = document.createElement("h3");
    title.textContent = project.title;
    const summary = document.createElement("p");
    summary.textContent = project.summary;
    content.append(meta, title, summary);

    const links = document.createElement("div");
    links.className = "project-links";
    (project.links || []).forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.label;
      if (!item.url.startsWith("#")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      links.append(link);
    });

    card.append(content, links);
    grid.append(card);
  });

  document.querySelector("#project-count").textContent = `${projects.length}+`;
}

function renderActivityGrid(projects) {
  const grid = document.querySelector("#activity-grid");
  grid.innerHTML = "";
  const source = projects.length ? projects : [{ featured: true }, { featured: false }];
  const weights = source.flatMap((project, index) => {
    const base = project.featured ? 4 : 2;
    return [base, Math.max(1, base - 1), (index % 4) + 1];
  });

  Array.from({ length: 84 }).forEach((_, index) => {
    const cell = document.createElement("span");
    const weight = weights[index % weights.length] || 1;
    cell.dataset.level = String((weight + index) % 5);
    grid.append(cell);
  });
}

function setupCommandPalette() {
  const overlay = document.querySelector("#command-overlay");
  const open = () => {
    overlay.hidden = false;
    overlay.querySelector("a")?.focus();
  };
  const close = () => {
    overlay.hidden = true;
    document.querySelector("[data-open-command]")?.focus();
  };

  document.querySelector("[data-open-command]").addEventListener("click", open);
  document.querySelector("[data-close-command]").addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });
  overlay.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
  window.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      open();
    }
    if (event.key === "Escape" && !overlay.hidden) close();
  });
}

function setupCanvas() {
  const canvas = document.querySelector("#hero-canvas");
  const context = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let points = [];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * ratio);
    canvas.height = Math.floor(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.min(90, Math.max(36, Math.floor(window.innerWidth / 18)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    }));
  }

  function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    context.fillStyle = "rgba(114, 240, 255, 0.62)";
    context.strokeStyle = "rgba(122, 184, 255, 0.18)";

    points.forEach((point, index) => {
      if (!prefersReducedMotion) {
        point.x += point.vx;
        point.y += point.vy;
        if (point.x < 0 || point.x > window.innerWidth) point.vx *= -1;
        if (point.y < 0 || point.y > window.innerHeight) point.vy *= -1;
      }

      context.beginPath();
      context.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
      context.fill();

      for (let next = index + 1; next < points.length; next += 1) {
        const other = points[next];
        const distance = Math.hypot(point.x - other.x, point.y - other.y);
        if (distance < 145) {
          context.globalAlpha = 1 - distance / 145;
          context.beginPath();
          context.moveTo(point.x, point.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
      context.globalAlpha = 1;
    });

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

async function init() {
  const [profile, projects] = await Promise.all([
    loadJson("content/profile.json", fallbackProfile),
    loadJson("content/projects.json", fallbackProjects)
  ]);

  setProfileText(profile);
  renderAbout(profile);
  renderContacts(profile);
  renderSkills(profile);
  renderExperience(profile);
  renderFilters(projects, (type) => renderProjects(projects, type));
  renderProjects(projects);
  renderActivityGrid(projects);
  setupCommandPalette();
  setupCanvas();
  document.querySelector("#year").textContent = new Date().getFullYear();
}

init();
