# 自定义域名说明

当你购买个人域名后，可以把它绑定到 GitHub Pages。

## 1. 添加 CNAME

在项目根目录新建 `CNAME` 文件，内容只写你的域名，例如：

```text
yourname.com
```

如果使用 `www` 子域名：

```text
www.yourname.com
```

## 2. 配置 DNS

在域名服务商后台添加 DNS 记录。

如果使用根域名 `yourname.com`，添加 GitHub Pages 要求的 `A` 记录。  
如果使用 `www.yourname.com`，添加一条 `CNAME` 记录指向：

```text
你的GitHub用户名.github.io
```

## 3. GitHub Pages 设置

进入仓库 `Settings > Pages`，在 `Custom domain` 填入域名并保存。DNS 生效后启用 `Enforce HTTPS`。

域名解析记录可能需要几分钟到 24 小时生效。
