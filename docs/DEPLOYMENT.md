# GitHub Pages 部署说明

## 1. 创建 GitHub 仓库

在 GitHub 创建一个新仓库。推荐仓库名：

- 个人主页仓库：`你的GitHub用户名.github.io`
- 普通项目仓库：任意名称，例如 `personal-website`

如果仓库名是 `你的GitHub用户名.github.io`，发布地址会是：

```text
https://你的GitHub用户名.github.io/
```

如果仓库名是普通项目名，发布地址通常是：

```text
https://你的GitHub用户名.github.io/仓库名/
```

## 2. 推送代码

在本地项目根目录运行：

```powershell
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/你的GitHub用户名/仓库名.git
git push -u origin main
```

如果你用 GitHub Desktop，也可以直接把本目录作为本地仓库发布到 GitHub。

## 3. 启用 Pages

进入 GitHub 仓库：

1. 打开 `Settings`。
2. 进入 `Pages`。
3. 在 `Build and deployment` 中选择 `GitHub Actions`。
4. 推送到 `main` 分支后，`.github/workflows/deploy.yml` 会自动发布。

## 4. 更新网站

之后每次修改内容：

```powershell
git add .
git commit -m "Update website content"
git push
```

GitHub Actions 会重新部署。
