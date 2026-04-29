# content 目录

这里放网站的主要可编辑内容。优先改这里，少改 `index.html`。

- `profile.json`：姓名、身份、简介、关于我、联系方式、能力卡片和经历时间线。
- `projects.json`：项目列表。

## 添加项目

在 `projects.json` 数组中复制一个项目对象，然后修改：

- `title`：项目名称。
- `type`：项目类型，例如 `Web`、`AI`、`Data`。
- `status`：项目状态，例如 `building`、`live`、`archived`。
- `featured`：是否突出显示，使用 `true` 或 `false`。
- `summary`：项目摘要。
- `tags`：技术标签数组。
- `links`：项目链接数组。

如果项目有截图、报告、演示或代码说明，把文件放入 `projects/项目英文名/`，并把链接写回 `links`。

修改后建议把变更写到本目录的 `LOG.md`。
