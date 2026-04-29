# assets 目录

这里放网站资源文件。

- `css/`：全站样式文件。
- `js/`：页面交互和三语内容渲染脚本。
- `images/`：图片、SVG、截图等视觉资源。
- `documents/`：简历、证书、可公开 PDF 等文档。

## 如何添加资源

把图片、PDF 或其他静态文件放到对应子目录，然后在 `index.html`、`assets/css/site.css` 或 `content/*.json` 中引用相对路径，例如：

```text
assets/images/my-photo.jpg
```

如果文件属于某个具体项目，优先放到 `projects/项目英文名/`，不要都堆在 `assets/`。
