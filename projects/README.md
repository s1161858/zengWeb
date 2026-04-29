# projects 目录

这里放每个项目的补充资料。首页展示内容不直接从这里读取，而是从 `content/projects.json` 读取。

## 推荐放法

每个项目一个英文目录：

```text
projects/k12-math-agent/
projects/english-oral-coach/
projects/education-rag-agent/
```

项目目录中可以放：

- `README.md`：项目说明、职责、技术栈、运行方式。
- `LOG.md`：项目资料更新记录。
- `screenshots/`：界面截图。
- `demo/`：演示视频、GIF 或链接说明。
- `reports/`：论文、报告、PPT、PDF。
- `src/`：如果你想直接放可公开代码，可以放这里；更推荐把完整代码放到独立 GitHub 仓库，再在 `content/projects.json` 中链接。

## 添加新项目

1. 在这里新建 `projects/项目英文名/`。
2. 放入项目资料，并写该目录的 `README.md` 和 `LOG.md`。
3. 在 `content/projects.json` 添加项目卡片。
4. 在根目录或 `content/LOG.md` 记录更新。
