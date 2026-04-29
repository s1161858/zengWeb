const fallbackProfile = {
  name: "你的名字",
  role: "个人网站 / 项目档案",
  location: "中国 / 可远程协作",
  focus: "软件开发、AI 应用、数据项目",
  status: "持续更新作品集",
  summary:
    "这里可以放你的个人介绍、作品集、项目复盘、论文/文章和联系方式。先部署到 GitHub Pages，之后绑定个人域名。",
  about: [
    "这里是你的个人介绍。建议写清楚你是谁、正在做什么、擅长什么、希望别人如何与你合作。",
    "你可以把更完整的经历、技能栈、教育背景或工作经历继续拆到 content 目录下维护。"
  ],
  contacts: [
    { label: "GitHub", url: "https://github.com/your-github-name" },
    { label: "Email", url: "mailto:your-email@example.com" }
  ],
  notes: [
    {
      date: "2026-04-29",
      text: "创建个人网站初版结构，支持 GitHub Pages 部署。"
    }
  ]
};

const fallbackProjects = [
  {
    title: "项目名称示例",
    type: "Web",
    status: "building",
    featured: true,
    summary: "用两三句话说明项目解决了什么问题、你的职责是什么、最终产出是什么。",
    tags: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "代码", url: "https://github.com/your-github-name/project" }
    ]
  }
];

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
  document.title = `${profile.name} | 个人网站`;
  document.querySelectorAll("[data-profile]").forEach((node) => {
    const key = node.dataset.profile;
    if (profile[key]) node.textContent = profile[key];
  });

  const mark = document.querySelector(".brand-mark");
  if (mark) {
    mark.textContent = profile.name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0])
      .join("")
      .toUpperCase();
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

function renderNotes(profile) {
  const list = document.querySelector("#notes-list");
  list.innerHTML = "";
  profile.notes.forEach((note) => {
    const item = document.createElement("li");
    const time = document.createElement("time");
    const text = document.createElement("span");
    time.dateTime = note.date;
    time.textContent = note.date;
    text.textContent = note.text;
    item.append(time, text);
    list.append(item);
  });
}

function renderProjects(projects) {
  const grid = document.querySelector("#project-grid");
  grid.innerHTML = "";

  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card${project.featured ? " featured" : ""}`;

    const content = document.createElement("div");
    const meta = document.createElement("div");
    meta.className = "project-meta";

    [project.type, project.status, ...(project.tags || [])].filter(Boolean).forEach((item) => {
      const pill = document.createElement("span");
      pill.className = `pill ${item}`;
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
      link.target = "_blank";
      link.rel = "noreferrer";
      links.append(link);
    });

    card.append(content, links);
    grid.append(card);
  });
}

async function init() {
  const [profile, projects] = await Promise.all([
    loadJson("content/profile.json", fallbackProfile),
    loadJson("content/projects.json", fallbackProjects)
  ]);

  setProfileText(profile);
  renderAbout(profile);
  renderContacts(profile);
  renderNotes(profile);
  renderProjects(projects);
  document.querySelector("#year").textContent = new Date().getFullYear();
}

init();
