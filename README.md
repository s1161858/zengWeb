# ZENG Chen bo 个人网站

这是一个可以直接部署到 GitHub Pages 的静态个人网站。当前版本不依赖构建工具，修改内容后提交到 GitHub 即可发布。

## 目录说明

- `index.html`：网站首页结构。
- `assets/`：静态资源总目录，按 `css/`、`js/`、`images/`、`documents/` 分类。
- `content/`：个人信息、项目列表、联系方式等可编辑内容。
- `projects/`：每个项目的材料文件夹，例如截图、PDF、演示视频、代码说明。
- `docs/`：部署、域名绑定和维护说明。
- `.github/workflows/`：GitHub Pages 自动部署配置。

## 常用修改

1. 修改个人介绍：编辑 `content/profile.json`。
2. 添加项目：编辑 `content/projects.json`，复制一个项目对象后修改标题、描述、标签和链接。
3. 添加项目资料：在 `projects/项目英文名/` 中放截图、报告、演示视频、说明文档或代码入口。
4. 更新简历：替换 `assets/documents/CV-ZENG-Chen-bo.pdf`。
5. 记录变更：在对应目录的 `LOG.md` 写一行日期和改动。

## 本地预览

在项目根目录运行：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 部署

先把仓库推送到 GitHub 用户 `s1161858` 下面，再在仓库设置里启用 GitHub Pages。详细步骤见 `docs/DEPLOYMENT.md`。

当前代码仓库：`https://github.com/s1161858/zengWeb`。项目还在完善阶段，暂不要求启用 Pages。
