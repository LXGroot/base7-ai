# 🚀 Cloudflare Pages 快速部署指南

## 📋 5分钟快速部署

### 1. 准备工作
```bash
# 确保已安装 Node.js 18+ 和 Git
node --version
git --version
```

### 2. 初始化 Git 仓库
```bash
# 如果还没有 Git 仓库
git init
git add .
git commit -m "Initial commit"

# 推送到 GitHub（替换为你的仓库地址）
git remote add origin https://github.com/your-username/base7-website.git
git push -u origin main
```

### 3. 配置 Cloudflare Pages

1. 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 点击 **"Create a project"**
3. 选择 **"Connect to Git"**
4. 选择你的 GitHub 仓库
5. 配置构建设置：
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```
6. 点击 **"Save and Deploy"**

### 4. 设置自动部署（可选）

如果需要 GitHub Actions 自动部署：

1. 获取 Cloudflare API Token：
   - 进入 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - 创建自定义令牌，权限：`Cloudflare Pages:Edit`

2. 在 GitHub 仓库设置 Secrets：
   - `CLOUDFLARE_API_TOKEN`: 你的 API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Account ID

### 5. 完成！

现在每次推送代码都会自动部署：
```bash
git add .
git commit -m "Update website"
git push origin main
```

## 🛠️ 本地部署（备选方案）

如果你想手动部署：

```bash
# 安装 Wrangler CLI
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 使用部署脚本
.\deploy.ps1

# 或者手动部署
npm run build
wrangler pages deploy dist --project-name=base7-website
```

## 🔗 有用的链接

- [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [详细部署文档](./DEPLOYMENT.md)

## ❓ 常见问题

**Q: 构建失败怎么办？**
A: 检查 Node.js 版本是否为 18+，确保所有依赖已正确安装。

**Q: 如何配置自定义域名？**
A: 在 Cloudflare Pages 项目设置中添加自定义域名，然后配置 DNS 记录。

**Q: 部署后网站无法访问？**
A: 检查构建产物是否正确生成在 `dist` 目录，确认 Cloudflare Pages 配置正确。

---

需要帮助？查看 [详细部署文档](./DEPLOYMENT.md) 或联系技术支持。