# 个人网站

这是一个可以直接部署到 GitHub Pages 的静态个人网站。当前版本不依赖构建工具，修改内容后提交到 GitHub 即可发布。

## 目录说明

- `index.html`：网站首页结构。
- `assets/`：样式、脚本和图片资源。
- `content/`：个人信息、项目列表、联系方式等可编辑内容。
- `docs/`：部署、域名绑定和维护说明。
- `.github/workflows/`：GitHub Pages 自动部署配置。

## 常用修改

1. 修改个人介绍：编辑 `content/profile.json`。
2. 添加项目：编辑 `content/projects.json`，复制一个项目对象后修改标题、描述、标签和链接。
3. 更换头像：把你的图片放到 `assets/`，然后在 `index.html` 中修改 `assets/profile-portrait.svg`。
4. 记录变更：在对应目录的 `LOG.md` 写一行日期和改动。

## 本地预览

在项目根目录运行：

```powershell
python -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 部署

先把仓库推送到 GitHub，再在仓库设置里启用 GitHub Pages。详细步骤见 `docs/DEPLOYMENT.md`。
