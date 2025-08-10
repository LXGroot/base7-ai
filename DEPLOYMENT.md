# Cloudflare Pages 部署指南

本文档详细介绍如何将柒进制科技网站部署到 Cloudflare Pages 并实现自动更新。

## 🚀 部署方案概述

我们提供了两种部署方案：
1. **GitHub 集成自动部署**（推荐）
2. **手动部署**

## 📋 前置要求

- GitHub 账户
- Cloudflare 账户
- Git 已配置
- Node.js 18+ 和 pnpm

## 🔧 方案一：GitHub 集成自动部署（推荐）

### 1. 准备 Git 仓库

```bash
# 初始化 Git 仓库（如果还没有）
git init
git add .
git commit -m "Initial commit"

# 添加远程仓库
git remote add origin https://github.com/your-username/base7-website.git
git push -u origin main
```

### 2. 配置 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 进入 **Pages** 部分
3. 点击 **Create a project**
4. 选择 **Connect to Git**
5. 授权 GitHub 并选择你的仓库
6. 配置构建设置：
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`（保持默认）

### 3. 获取 API 凭据

1. 在 Cloudflare Dashboard 中，进入 **My Profile** > **API Tokens**
2. 创建自定义令牌，权限设置：
   - **Zone**: `Zone:Read`
   - **Account**: `Cloudflare Pages:Edit`
3. 复制生成的 API Token
4. 获取 Account ID（在右侧边栏可以找到）

### 4. 配置 GitHub Secrets

在 GitHub 仓库中设置以下 Secrets：

1. 进入仓库 **Settings** > **Secrets and variables** > **Actions**
2. 添加以下 secrets：
   - `CLOUDFLARE_API_TOKEN`: 你的 Cloudflare API Token
   - `CLOUDFLARE_ACCOUNT_ID`: 你的 Cloudflare Account ID

### 5. 触发自动部署

现在每次推送到 `main` 分支都会自动触发部署：

```bash
git add .
git commit -m "Deploy to Cloudflare Pages"
git push origin main
```

## 🛠️ 方案二：手动部署

### 使用 Wrangler CLI

```bash
# 安装 Wrangler
npm install -g wrangler

# 登录 Cloudflare
wrangler login

# 构建项目
npm run build

# 部署到 Cloudflare Pages
wrangler pages deploy dist --project-name=base7-website
```

## 🔄 自动更新机制

### GitHub Actions 工作流

我们已经配置了 GitHub Actions 工作流（`.github/workflows/deploy.yml`），它会：

1. **监听推送事件**：当代码推送到 `main` 分支时触发
2. **安装依赖**：使用 pnpm 安装项目依赖
3. **构建项目**：运行 `pnpm run build`
4. **部署到 Cloudflare Pages**：自动上传构建产物
5. **PR 预览**：为 Pull Request 创建预览部署

### 分支策略

- **main/master 分支**：生产环境自动部署
- **其他分支的 PR**：创建预览部署
- **本地开发**：使用 `npm run dev` 进行开发

## 🌐 自定义域名配置

1. 在 Cloudflare Pages 项目设置中，进入 **Custom domains**
2. 添加你的域名（如 `base7.tech`）
3. 按照提示配置 DNS 记录
4. 等待 SSL 证书自动配置完成

## 📊 性能优化配置

项目已包含以下优化配置：

### Vite 构建优化
- 代码分割（React、UI 组件、Radix UI 分离）
- Terser 压缩（移除 console.log 和 debugger）
- 依赖预构建优化

### Cloudflare 缓存策略
- 静态资源缓存 1 年
- 图片资源缓存 1 年
- 字体文件缓存 1 年
- 安全头部配置

## 🔍 监控和调试

### 查看部署状态

1. **GitHub Actions**：在仓库的 Actions 标签页查看工作流状态
2. **Cloudflare Dashboard**：在 Pages 项目中查看部署历史
3. **部署日志**：查看构建和部署的详细日志

### 常见问题排查

1. **构建失败**：检查 `package.json` 中的构建脚本
2. **依赖问题**：确保 `pnpm-lock.yaml` 已提交
3. **环境变量**：检查 GitHub Secrets 配置
4. **权限问题**：验证 Cloudflare API Token 权限

## 📝 部署清单

- [ ] Git 仓库已创建并推送到 GitHub
- [ ] Cloudflare Pages 项目已创建
- [ ] GitHub Secrets 已配置
- [ ] 首次部署成功
- [ ] 自定义域名已配置（可选）
- [ ] SSL 证书已生效
- [ ] 自动部署测试通过

## 🎯 下一步

部署完成后，你可以：

1. 配置自定义域名
2. 设置 Web Analytics
3. 配置 CDN 缓存策略
4. 添加环境变量（如 API 密钥）
5. 设置部署通知

---

**注意**：首次部署可能需要几分钟时间，后续的增量部署会更快。Cloudflare Pages 提供全球 CDN 加速，确保网站在全球范围内的快速访问。