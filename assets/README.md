# assets 目录

这里放网站资源文件。

- `site.css`：全站样式。
- `site.js`：读取 `content/` 数据并渲染页面。
- `profile-portrait.svg`：首页头像占位图，可以替换为你的真实头像或作品图。
- `documents/`：简历、证书、可公开 PDF 等文档。

## 如何添加资源

把图片、PDF 或其他静态文件放在这个目录，然后在 `index.html`、`site.css` 或 `content/*.json` 中引用相对路径，例如：

```text
assets/my-photo.jpg
```

如果文件属于某个具体项目，优先放到 `projects/项目英文名/`，不要都堆在 `assets/`。
