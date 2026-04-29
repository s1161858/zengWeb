const languageNames = {
  "zh-CN": "简",
  "zh-TW": "繁",
  en: "EN"
};

const projectLinks = {
  math: "projects/k12-math-agent/README.md",
  oral: "projects/english-oral-coach/README.md",
  rag: "projects/education-rag-agent/README.md",
  platform: "projects/ai-teaching-platform/README.md",
  robot: "projects/booster-k1-control/README.md",
  timeseries: "projects/time-series-event-modeling/README.md",
  paper: "projects/vocabulary-semantic-network/README.md",
  huawei: "projects/huawei-ict-competition/README.md"
};

const shared = {
  name: "ZENG Chen bo",
  englishName: "Magical",
  location: "Hong Kong / ShenZhen",
  github: "s1161858",
  contacts: [
    { key: "github", url: "https://github.com/s1161858" },
    { key: "email", url: "mailto:s1161858@s.eduhk.hk" },
    { key: "resume", url: "assets/documents/CV-ZENG-Chen-bo.pdf" }
  ]
};

const content = {
  "zh-CN": {
    ui: {
      "nav.projects": "项目",
      "nav.experience": "经历",
      "nav.stack": "能力",
      "nav.contact": "联系",
      "label.location": "地区",
      "label.currentFocus": "当前方向",
      "hero.eyebrow": "作品集 / AI 工程",
      "hero.kickerLeft": "AI 工程师",
      "hero.kickerRight": "智能体构建者",
      "hero.titleLine": "构建多模态智能体、RAG 系统与可落地的 AI 教学平台。",
      "hero.tag1": "Qwen 微调",
      "hero.tag2": "RAG 智能体",
      "hero.tag3": "语音 AI",
      "hero.tag4": "机器人交互",
      "button.projects": "查看项目",
      "button.resume": "查看简历",
      "activity.meta": "移动到项目节点",
      "activity.title": "浏览我的 AI 项目",
      "activity.text": "在矩阵中移动鼠标，预览项目方向、状态和简介。",
      "metric.education": "教育",
      "metric.award": "奖项",
      "metric.projects": "项目",
      "stack.eyebrow": "能力地图",
      "stack.title": "把模型、数据和产品链路接起来",
      "projects.eyebrow": "精选项目",
      "projects.title": "项目作品集",
      "projects.text": "项目资料可以放在 <code>projects/项目英文名/</code>，展示文字统一维护在 <code>content/projects.json</code>。",
      "experience.eyebrow": "经历",
      "experience.title": "教育与经历",
      "about.eyebrow": "关于",
      "about.title": "关于我",
      "contact.eyebrow": "联系",
      "contact.title": "联系与资料",
      "contact.text": "后续如果你购买个人域名，按 <code>docs/CUSTOM_DOMAIN.md</code> 添加 CNAME 和 DNS 记录。",
      "command.title": "快速导航",
      "command.projects": "查看项目",
      "command.experience": "查看经历",
      "command.stack": "查看能力",
      "command.resume": "打开简历 PDF",
      "footer.deploy": "部署说明"
    },
    profile: {
      role: "AI 应用开发 / 大模型工程师",
      focus: "LLM 微调 · RAG · 多模态 AI",
      status: "开放 AI 工程与研究合作",
      summary:
        "香港教育大学人工智能硕士学生，专注 LLM 微调、多模态教学智能体、RAG 系统、语音 AI 与机器人交互平台。"
    },
    labels: {
      all: "全部",
      link: "项目资料",
      github: "GitHub",
      email: "邮箱",
      resume: "简历"
    },
    skills: [
      {
        icon: "LLM",
        title: "大模型工程",
        text: "围绕 Qwen 等基座模型进行指令微调、LoRA/SFT、领域数据构建和链式推理教学对话。"
      },
      {
        icon: "RAG",
        title: "智能体系统",
        text: "设计教育场景 RAG Agent，把私有知识库、检索流程、多轮问答和产品交互串联起来。"
      },
      {
        icon: "MM",
        title: "多模态 AI",
        text: "处理 OCR、图文题目理解、语音识别、TTS 和图文语义解析等输入链路。"
      },
      {
        icon: "GPU",
        title: "部署与集成",
        text: "在 GPU 集群和 Slurm 环境中部署模型服务，并打通 API、前后端与应用场景。"
      }
    ],
    experience: [
      {
        period: "2025-2026",
        title: "人工智能硕士",
        org: "香港教育大学",
        text: "课程覆盖数据科学、人工智能、空间智能、Agent 开发、聊天机器人集成、LLM 微调、知识蒸馏、强化学习、R 和 Python。"
      },
      {
        period: "2025-2026",
        title: "学生助理，数据科学方向",
        org: "香港教育大学，Prof. Ling Man Ho Alpha 指导",
        text: "整理多源异构数据集，覆盖时间序列、事件标签和协变量特征，并复现 SHPP、RMTPP、THP 等深度学习事件建模框架。"
      },
      {
        period: "2025-2026",
        title: "AI 应用开发与大模型工程师",
        org: "EdUHK AIDCEC Team",
        text: "参与 Qwen 微调数学教学智能体，以及基于 Whisper、GenAI 和 Kokoro TTS 的英语 AI 口语教练系统。"
      },
      {
        period: "2025-2026",
        title: "AI 应用开发与大模型工程师",
        org: "5Gnu MultiMedia Limited (HK)",
        text: "参与 RAG 智能体、AI 教学平台集成，以及基于 Booster K1 Robot SDK 的分布式控制系统。"
      },
      {
        period: "2025-2026",
        title: "华为 ICT 大赛香港赛区",
        org: "EdUHK Team",
        text: "代表香港教育大学参赛，获得 Group AI 组第一名，Cloud 组第四名。"
      }
    ],
    about: [
      "我关注从研究原型到产品落地的完整 AI 应用链路：数据构建、模型微调、智能体架构、多模态输入、部署和交互体验。",
      "近期项目集中在 Qwen 数学教学智能体、Whisper + LLM + TTS 口语教练、教育 RAG Agent、AI 教学平台和 Web 机器人控制。"
    ],
    projects: [
      {
        id: "math",
        category: "llm",
        type: "大模型",
        status: "研究中",
        featured: true,
        title: "K12 数学多模态教学智能体",
        summary:
          "基于 Qwen 微调的 K12 数学教学智能体，结合指令微调、苏格拉底式引导、思维链拆解、OCR 与图文语义理解。",
        tags: ["Qwen", "SFT", "OCR", "教育"]
      },
      {
        id: "oral",
        category: "speech",
        type: "语音 AI",
        status: "开发中",
        featured: true,
        title: "英语 AI 口语教练系统",
        summary:
          "基于 Whisper、GenAI 和 Kokoro TTS 的口语练习系统，结合 LoRA 口音适配、SFT 反馈生成和 GPU 集群部署。",
        tags: ["Whisper", "LoRA", "TTS", "Slurm"]
      },
      {
        id: "rag",
        category: "agent",
        type: "智能体",
        status: "开发中",
        featured: false,
        title: "教育场景 RAG Agent",
        summary: "面向教育场景的检索增强智能体，用于连接私有知识、教学逻辑和多轮问答流程。",
        tags: ["RAG", "Agent", "教育"]
      },
      {
        id: "platform",
        category: "platform",
        type: "平台",
        status: "开发中",
        featured: false,
        title: "AI 教学平台",
        summary: "连接学校教师、导师和学生的教学平台，工作包括微调配置、前后端集成和应用场景设计。",
        tags: ["全栈", "FT", "产品"]
      },
      {
        id: "robot",
        category: "robotics",
        type: "机器人",
        status: "开发中",
        featured: false,
        title: "Booster K1 机器人 Web 控制",
        summary: "基于 Booster K1 Robot SDK 的分布式控制架构，支持 Web 远程控制、动作规划回放和多模态交互。",
        tags: ["Robot SDK", "Web Control", "API"]
      },
      {
        id: "timeseries",
        category: "data",
        type: "数据",
        status: "研究中",
        featured: false,
        title: "时间序列事件建模复现",
        summary: "围绕多源异构数据进行数据工程和深度学习框架复现，覆盖时间序列、事件标签和协变量特征。",
        tags: ["SHPP", "RMTPP", "THP"]
      },
      {
        id: "paper",
        category: "research",
        type: "论文",
        status: "研究中",
        featured: false,
        title: "AI + 混合语义网络词汇学习论文",
        summary: "一篇关于利用人工智能与混合语义网络协同提升大学生英语词汇长期掌握效率的在投论文。",
        tags: ["论文", "语义网络", "AI"]
      },
      {
        id: "huawei",
        category: "competition",
        type: "竞赛",
        status: "已获奖",
        featured: false,
        title: "华为 ICT 大赛 2025-2026",
        summary: "代表香港教育大学参加香港赛区比赛，获得 Group AI 组第一名，并在 Cloud 组获得第四名。",
        tags: ["AI", "Cloud", "Award"]
      }
    ]
  },
  "zh-TW": {
    ui: {
      "nav.projects": "專案",
      "nav.experience": "經歷",
      "nav.stack": "能力",
      "nav.contact": "聯絡",
      "label.location": "地區",
      "label.currentFocus": "目前方向",
      "hero.eyebrow": "作品集 / AI 工程",
      "hero.kickerLeft": "AI 工程師",
      "hero.kickerRight": "智能體構建者",
      "hero.titleLine": "構建多模態智能體、RAG 系統與可落地的 AI 教學平台。",
      "hero.tag1": "Qwen 微調",
      "hero.tag2": "RAG 智能體",
      "hero.tag3": "語音 AI",
      "hero.tag4": "機器人互動",
      "button.projects": "查看專案",
      "button.resume": "查看履歷",
      "activity.meta": "移動到專案節點",
      "activity.title": "瀏覽我的 AI 專案",
      "activity.text": "在矩陣中移動滑鼠，預覽專案方向、狀態和簡介。",
      "metric.education": "教育",
      "metric.award": "獎項",
      "metric.projects": "專案",
      "stack.eyebrow": "能力地圖",
      "stack.title": "把模型、資料和產品鏈路接起來",
      "projects.eyebrow": "精選專案",
      "projects.title": "專案作品集",
      "projects.text": "專案資料可以放在 <code>projects/專案英文名/</code>，展示文字統一維護在 <code>content/projects.json</code>。",
      "experience.eyebrow": "經歷",
      "experience.title": "教育與經歷",
      "about.eyebrow": "關於",
      "about.title": "關於我",
      "contact.eyebrow": "聯絡",
      "contact.title": "聯絡與資料",
      "contact.text": "後續如果你購買個人網域，按 <code>docs/CUSTOM_DOMAIN.md</code> 添加 CNAME 和 DNS 記錄。",
      "command.title": "快速導航",
      "command.projects": "查看專案",
      "command.experience": "查看經歷",
      "command.stack": "查看能力",
      "command.resume": "打開履歷 PDF",
      "footer.deploy": "部署說明"
    },
    profile: {
      role: "AI 應用開發 / 大模型工程師",
      focus: "LLM 微調 · RAG · 多模態 AI",
      status: "開放 AI 工程與研究合作",
      summary:
        "香港教育大學人工智慧碩士學生，專注 LLM 微調、多模態教學智能體、RAG 系統、語音 AI 與機器人互動平台。"
    },
    labels: {
      all: "全部",
      link: "專案資料",
      github: "GitHub",
      email: "電郵",
      resume: "履歷"
    },
    skills: [
      {
        icon: "LLM",
        title: "大模型工程",
        text: "圍繞 Qwen 等基座模型進行指令微調、LoRA/SFT、領域資料構建和鏈式推理教學對話。"
      },
      {
        icon: "RAG",
        title: "智能體系統",
        text: "設計教育場景 RAG Agent，把私有知識庫、檢索流程、多輪問答和產品互動串聯起來。"
      },
      {
        icon: "MM",
        title: "多模態 AI",
        text: "處理 OCR、圖文題目理解、語音辨識、TTS 和圖文語義解析等輸入鏈路。"
      },
      {
        icon: "GPU",
        title: "部署與整合",
        text: "在 GPU 叢集和 Slurm 環境中部署模型服務，並打通 API、前後端與應用場景。"
      }
    ],
    experience: [
      {
        period: "2025-2026",
        title: "人工智慧碩士",
        org: "香港教育大學",
        text: "課程覆蓋資料科學、人工智慧、空間智能、Agent 開發、聊天機器人整合、LLM 微調、知識蒸餾、強化學習、R 和 Python。"
      },
      {
        period: "2025-2026",
        title: "學生助理，資料科學方向",
        org: "香港教育大學，Prof. Ling Man Ho Alpha 指導",
        text: "整理多源異構資料集，覆蓋時間序列、事件標籤和協變量特徵，並復現 SHPP、RMTPP、THP 等深度學習事件建模框架。"
      },
      {
        period: "2025-2026",
        title: "AI 應用開發與大模型工程師",
        org: "EdUHK AIDCEC Team",
        text: "參與 Qwen 微調數學教學智能體，以及基於 Whisper、GenAI 和 Kokoro TTS 的英語 AI 口語教練系統。"
      },
      {
        period: "2025-2026",
        title: "AI 應用開發與大模型工程師",
        org: "5Gnu MultiMedia Limited (HK)",
        text: "參與 RAG 智能體、AI 教學平台整合，以及基於 Booster K1 Robot SDK 的分散式控制系統。"
      },
      {
        period: "2025-2026",
        title: "華為 ICT 大賽香港賽區",
        org: "EdUHK Team",
        text: "代表香港教育大學參賽，獲得 Group AI 組第一名，Cloud 組第四名。"
      }
    ],
    about: [
      "我關注從研究原型到產品落地的完整 AI 應用鏈路：資料構建、模型微調、智能體架構、多模態輸入、部署和互動體驗。",
      "近期專案集中在 Qwen 數學教學智能體、Whisper + LLM + TTS 口語教練、教育 RAG Agent、AI 教學平台和 Web 機器人控制。"
    ],
    projects: [
      {
        id: "math",
        category: "llm",
        type: "大模型",
        status: "研究中",
        featured: true,
        title: "K12 數學多模態教學智能體",
        summary:
          "基於 Qwen 微調的 K12 數學教學智能體，結合指令微調、蘇格拉底式引導、思維鏈拆解、OCR 與圖文語義理解。",
        tags: ["Qwen", "SFT", "OCR", "教育"]
      },
      {
        id: "oral",
        category: "speech",
        type: "語音 AI",
        status: "開發中",
        featured: true,
        title: "英語 AI 口語教練系統",
        summary:
          "基於 Whisper、GenAI 和 Kokoro TTS 的口語練習系統，結合 LoRA 口音適配、SFT 反饋生成和 GPU 叢集部署。",
        tags: ["Whisper", "LoRA", "TTS", "Slurm"]
      },
      {
        id: "rag",
        category: "agent",
        type: "智能體",
        status: "開發中",
        featured: false,
        title: "教育場景 RAG Agent",
        summary: "面向教育場景的檢索增強智能體，用於連接私有知識、教學邏輯和多輪問答流程。",
        tags: ["RAG", "Agent", "教育"]
      },
      {
        id: "platform",
        category: "platform",
        type: "平台",
        status: "開發中",
        featured: false,
        title: "AI 教學平台",
        summary: "連接學校教師、導師和學生的教學平台，工作包括微調配置、前後端整合和應用場景設計。",
        tags: ["全棧", "FT", "產品"]
      },
      {
        id: "robot",
        category: "robotics",
        type: "機器人",
        status: "開發中",
        featured: false,
        title: "Booster K1 機器人 Web 控制",
        summary: "基於 Booster K1 Robot SDK 的分散式控制架構，支援 Web 遠端控制、動作規劃回放和多模態互動。",
        tags: ["Robot SDK", "Web Control", "API"]
      },
      {
        id: "timeseries",
        category: "data",
        type: "資料",
        status: "研究中",
        featured: false,
        title: "時間序列事件建模復現",
        summary: "圍繞多源異構資料進行資料工程和深度學習框架復現，覆蓋時間序列、事件標籤和協變量特徵。",
        tags: ["SHPP", "RMTPP", "THP"]
      },
      {
        id: "paper",
        category: "research",
        type: "論文",
        status: "研究中",
        featured: false,
        title: "AI + 混合語義網絡詞彙學習論文",
        summary: "一篇關於利用人工智慧與混合語義網絡協同提升大學生英語詞彙長期掌握效率的在投論文。",
        tags: ["論文", "語義網絡", "AI"]
      },
      {
        id: "huawei",
        category: "competition",
        type: "競賽",
        status: "已獲獎",
        featured: false,
        title: "華為 ICT 大賽 2025-2026",
        summary: "代表香港教育大學參加香港賽區比賽，獲得 Group AI 組第一名，並在 Cloud 組獲得第四名。",
        tags: ["AI", "Cloud", "Award"]
      }
    ]
  },
  en: {
    ui: {
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.stack": "Skills",
      "nav.contact": "Contact",
      "label.location": "Location",
      "label.currentFocus": "Current Focus",
      "hero.eyebrow": "Portfolio / AI Engineering",
      "hero.kickerLeft": "AI Engineer",
      "hero.kickerRight": "Agent Builder",
      "hero.titleLine": "Building multimodal AI agents, RAG systems and product-ready teaching platforms.",
      "hero.tag1": "Qwen Fine-tuning",
      "hero.tag2": "RAG Agents",
      "hero.tag3": "Speech AI",
      "hero.tag4": "Robotics",
      "button.projects": "View Projects",
      "button.resume": "View Resume",
      "activity.meta": "Hover project nodes",
      "activity.title": "Explore my AI work",
      "activity.text": "Move across the matrix to preview projects, focus areas and current status.",
      "metric.education": "Education",
      "metric.award": "Award",
      "metric.projects": "Projects",
      "stack.eyebrow": "Capability Map",
      "stack.title": "Connecting models, data and product workflows",
      "projects.eyebrow": "Selected Projects",
      "projects.title": "Project Portfolio",
      "projects.text": "Project assets live in <code>projects/project-name/</code>, while card text is maintained in <code>content/projects.json</code>.",
      "experience.eyebrow": "Experience",
      "experience.title": "Education & Experience",
      "about.eyebrow": "About",
      "about.title": "About Me",
      "contact.eyebrow": "Contact",
      "contact.title": "Contact & Materials",
      "contact.text": "When you buy a personal domain, follow <code>docs/CUSTOM_DOMAIN.md</code> to add CNAME and DNS records.",
      "command.title": "Quick Navigation",
      "command.projects": "View Projects",
      "command.experience": "View Experience",
      "command.stack": "View Skills",
      "command.resume": "Open Resume PDF",
      "footer.deploy": "Deployment Guide"
    },
    profile: {
      role: "AI Application Developer / Large Model Engineer",
      focus: "LLM Fine-tuning · RAG · Multimodal AI",
      status: "Open to AI engineering and research collaboration",
      summary:
        "MSc AI student at The Education University of Hong Kong, focused on LLM fine-tuning, multimodal teaching agents, RAG systems, speech AI and robot interaction platforms."
    },
    labels: {
      all: "All",
      link: "Project materials",
      github: "GitHub",
      email: "Email",
      resume: "Resume"
    },
    skills: [
      {
        icon: "LLM",
        title: "Large Model Engineering",
        text: "Instruction tuning, LoRA/SFT, Qwen-based domain modeling and chain-of-thought guided tutoring dialogue."
      },
      {
        icon: "RAG",
        title: "Agent Systems",
        text: "Retrieval-augmented agents for education workflows, connecting private knowledge, retrieval and multi-turn interaction."
      },
      {
        icon: "MM",
        title: "Multimodal AI",
        text: "OCR, image-text problem understanding, speech recognition, TTS and semantic parsing for multimodal input."
      },
      {
        icon: "GPU",
        title: "Deployment",
        text: "Model deployment on GPU clusters and Slurm, with API, frontend, backend and scenario integration."
      }
    ],
    experience: [
      {
        period: "2025-2026",
        title: "MSc in Artificial Intelligence",
        org: "The Education University of Hong Kong",
        text: "Coursework includes data science, AI, spatial intelligence, agent development, chatbot integration, LLM fine-tuning, knowledge distillation, reinforcement learning, R and Python."
      },
      {
        period: "2025-2026",
        title: "Student Assistant, Data Science Direction",
        org: "EdUHK, supervised by Prof. Ling Man Ho Alpha",
        text: "Collected multi-source heterogeneous datasets and replicated event/time-series frameworks including SHPP, RMTPP and THP."
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
    ],
    about: [
      "I work across the full AI application chain: data construction, model fine-tuning, agent architecture, multimodal input, deployment and product interaction.",
      "My recent work includes Qwen-based K12 mathematics teaching agents, Whisper + LLM + TTS oral coaching, RAG educational agents, AI teaching platforms and web-controlled robot interaction systems."
    ],
    projects: [
      {
        id: "math",
        category: "llm",
        type: "LLM",
        status: "research",
        featured: true,
        title: "K12 Mathematics Multimodal Teaching Agent",
        summary:
          "A Qwen fine-tuned teaching agent for K12 mathematics, combining instruction tuning, Socratic dialogue, chain-of-thought decomposition, OCR and semantic understanding.",
        tags: ["Qwen", "SFT", "OCR", "Education"]
      },
      {
        id: "oral",
        category: "speech",
        type: "Speech",
        status: "building",
        featured: true,
        title: "English AI Oral Coaching System",
        summary:
          "An oral practice system based on Whisper, GenAI and Kokoro TTS, using LoRA for accent adaptation, SFT for feedback generation and GPU cluster deployment.",
        tags: ["Whisper", "LoRA", "TTS", "Slurm"]
      },
      {
        id: "rag",
        category: "agent",
        type: "Agent",
        status: "building",
        featured: false,
        title: "Educational RAG Agent",
        summary: "A retrieval-augmented intelligent agent for education scenarios, connecting private knowledge, teaching logic and multi-turn Q&A flows.",
        tags: ["RAG", "Agent", "Education"]
      },
      {
        id: "platform",
        category: "platform",
        type: "Platform",
        status: "building",
        featured: false,
        title: "AI Teaching Platform",
        summary: "A teaching platform connecting school teachers, tutors and students, covering fine-tuning setup, frontend/backend integration and scenario design.",
        tags: ["Full Stack", "FT", "Product"]
      },
      {
        id: "robot",
        category: "robotics",
        type: "Robotics",
        status: "building",
        featured: false,
        title: "Booster K1 Robot Web Control",
        summary: "A distributed control architecture based on the Booster K1 Robot SDK, supporting web remote control, motion playback and multimodal interaction.",
        tags: ["Robot SDK", "Web Control", "API"]
      },
      {
        id: "timeseries",
        category: "data",
        type: "Data",
        status: "research",
        featured: false,
        title: "Time-Series Event Modeling Research Replication",
        summary: "Data engineering and deep learning framework replication for multi-source datasets, including time series, event labels and covariate features.",
        tags: ["SHPP", "RMTPP", "THP"]
      },
      {
        id: "paper",
        category: "research",
        type: "Research",
        status: "research",
        featured: false,
        title: "AI + Hybrid Semantic Network Vocabulary Paper",
        summary: "A paper under review on using AI and hybrid semantic networks to support long-term, efficient mastery of college English vocabulary.",
        tags: ["Paper", "Semantic Network", "AI"]
      },
      {
        id: "huawei",
        category: "competition",
        type: "Competition",
        status: "live",
        featured: false,
        title: "Huawei ICT Competition 2025-2026",
        summary: "Represented EdUHK in the Huawei ICT Competition Hong Kong SAR, winning first place in Group AI and fourth place in Cloud.",
        tags: ["AI", "Cloud", "Award"]
      }
    ]
  }
};

let currentLanguage = localStorage.getItem("site-language") || "zh-CN";
let currentFilter = "all";

function activeContent() {
  return content[currentLanguage] || content["zh-CN"];
}

function setText(selector, text) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = text;
  });
}

function setProfileText(data) {
  document.title = `${shared.englishName} | AI Engineer`;
  setText('[data-profile="name"]', shared.name);
  setText('[data-profile="englishName"]', shared.englishName);
  setText('[data-profile="location"]', shared.location);
  setText('[data-profile="role"]', data.profile.role);
  setText('[data-profile="summary"]', data.profile.summary);
  setText('[data-profile="focus"]', data.profile.focus);
  setText('[data-profile="status"]', data.profile.status);

  const mark = document.querySelector(".brand-mark");
  if (mark) mark.textContent = shared.englishName.slice(0, 1).toUpperCase();
}

function applyStaticText(data) {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (data.ui[key]) node.textContent = data.ui[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (data.ui[key]) node.innerHTML = data.ui[key];
  });
}

function renderAbout(data) {
  const about = document.querySelector("#about-content");
  about.replaceChildren();
  data.about.forEach((text) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    about.append(paragraph);
  });
}

function renderContacts(data) {
  const contactLinks = document.querySelector("#contact-links");
  const profileLinks = document.querySelector(".profile-links");
  contactLinks.replaceChildren();
  profileLinks.replaceChildren();

  shared.contacts.forEach((contact) => {
    const label = data.labels[contact.key];
    [contactLinks, profileLinks].forEach((target) => {
      const link = document.createElement("a");
      link.href = contact.url;
      link.textContent = label;
      if (!contact.url.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      target.append(link);
    });
  });
}

function renderSkills(data) {
  const skillGrid = document.querySelector("#skill-grid");
  skillGrid.replaceChildren();
  data.skills.forEach((skill) => {
    const tile = document.createElement("article");
    tile.className = "skill-tile reveal is-visible";

    const icon = document.createElement("span");
    const title = document.createElement("h3");
    const text = document.createElement("p");
    icon.textContent = skill.icon;
    title.textContent = skill.title;
    text.textContent = skill.text;
    tile.append(icon, title, text);
    skillGrid.append(tile);
  });
}

function renderExperience(data) {
  const list = document.querySelector("#experience-list");
  list.replaceChildren();
  data.experience.forEach((item) => {
    const row = document.createElement("article");
    row.className = "timeline-item reveal is-visible";

    const time = document.createElement("time");
    const body = document.createElement("div");
    const title = document.createElement("h3");
    const org = document.createElement("p");
    const orgStrong = document.createElement("strong");
    const text = document.createElement("p");

    time.textContent = item.period;
    title.textContent = item.title;
    orgStrong.textContent = item.org;
    org.append(orgStrong);
    text.textContent = item.text;
    body.append(title, org, text);
    row.append(time, body);
    list.append(row);
  });
}

function projectCategories(projects) {
  return Array.from(new Map(projects.map((project) => [project.category, project.type])).entries());
}

function renderFilters(data) {
  const filterBar = document.querySelector("#project-filters");
  filterBar.replaceChildren();

  const options = [["all", data.labels.all], ...projectCategories(data.projects)];
  options.forEach(([category, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.className = category === currentFilter ? "active" : "";
    button.addEventListener("click", () => {
      currentFilter = category;
      renderFilters(activeContent());
      renderProjects(activeContent());
    });
    filterBar.append(button);
  });
}

function renderProjects(data) {
  const grid = document.querySelector("#project-grid");
  const visibleProjects =
    currentFilter === "all"
      ? data.projects
      : data.projects.filter((project) => project.category === currentFilter);
  grid.replaceChildren();

  visibleProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card reveal is-visible${project.featured ? " featured" : ""}`;
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--y", `${event.clientY - rect.top}px`);
    });

    const contentWrap = document.createElement("div");
    const meta = document.createElement("div");
    meta.className = "project-meta";

    [project.type, project.status, ...project.tags].forEach((item) => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = item;
      meta.append(pill);
    });

    const title = document.createElement("h3");
    const summary = document.createElement("p");
    title.textContent = project.title;
    summary.textContent = project.summary;
    contentWrap.append(meta, title, summary);

    const links = document.createElement("div");
    links.className = "project-links";
    const link = document.createElement("a");
    link.href = projectLinks[project.id];
    link.textContent = data.labels.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    links.append(link);

    card.append(contentWrap, links);
    grid.append(card);
  });

  document.querySelector("#project-count").textContent = `${data.projects.length}+`;
}

function renderActivityGrid(data) {
  const grid = document.querySelector("#activity-grid");
  const detail = document.querySelector("#activity-detail");
  grid.replaceChildren();

  function setDetail(project) {
    detail.replaceChildren();
    const meta = document.createElement("span");
    const title = document.createElement("strong");
    const summary = document.createElement("p");
    meta.textContent = `${project.type} · ${project.status}`;
    title.textContent = project.title;
    summary.textContent = project.summary;
    detail.append(meta, title, summary);
  }

  setDetail(data.projects[0]);

  Array.from({ length: 84 }).forEach((_, index) => {
    const project = data.projects[index % data.projects.length];
    const cell = document.createElement("button");
    const base = project.featured ? 4 : 2;
    const level = (base + index + project.category.length) % 5;
    cell.type = "button";
    cell.dataset.level = String(level);
    cell.ariaLabel = project.title;
    cell.addEventListener("pointerenter", () => setDetail(project));
    cell.addEventListener("focus", () => setDetail(project));
    grid.append(cell);
  });
}

function renderLanguageButtons() {
  document.querySelectorAll(".language-switch button").forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.textContent = languageNames[button.dataset.lang];
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderPage() {
  const data = activeContent();
  setProfileText(data);
  applyStaticText(data);
  renderContacts(data);
  renderAbout(data);
  renderSkills(data);
  renderExperience(data);
  renderFilters(data);
  renderProjects(data);
  renderActivityGrid(data);
  renderLanguageButtons();
}

function setupLanguageSwitch() {
  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage = content[button.dataset.lang] ? button.dataset.lang : "zh-CN";
      currentFilter = "all";
      localStorage.setItem("site-language", currentLanguage);
      renderPage();
    });
  });
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll(".section");
  targets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.setProperty("--delay", `${Math.min(index, 6) * 70}ms`);
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((target) => observer.observe(target));
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

function init() {
  if (!content[currentLanguage]) currentLanguage = "zh-CN";
  renderPage();
  setupRevealAnimations();
  setupLanguageSwitch();
  setupCommandPalette();
  setupCanvas();
  document.querySelector("#year").textContent = new Date().getFullYear();
}

init();
