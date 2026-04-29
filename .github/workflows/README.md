# workflows 目录

这里放 GitHub Actions 工作流。

- `deploy.yml`：当 `main` 分支更新时，把当前静态网站发布到 GitHub Pages。

如果未来改成 Vite、Next.js 或其他构建工具，需要同步修改 `deploy.yml` 的构建和发布路径。
