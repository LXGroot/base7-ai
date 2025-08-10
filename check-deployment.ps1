# Cloudflare Pages 部署检查脚本

Write-Host "🔍 检查 Cloudflare Pages 部署准备状态..." -ForegroundColor Green
Write-Host ""

# 检查 Node.js
Write-Host "📦 检查 Node.js..." -ForegroundColor Blue
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js 已安装: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js 未安装" -ForegroundColor Red
}

# 检查 Git
Write-Host "🔧 检查 Git..." -ForegroundColor Blue
try {
    git --version | Out-Null
    Write-Host "✅ Git 已安装" -ForegroundColor Green
    
    if (Test-Path ".git") {
        Write-Host "✅ 当前目录是 Git 仓库" -ForegroundColor Green
    } else {
        Write-Host "❌ 当前目录不是 Git 仓库" -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Git 未安装" -ForegroundColor Red
}

# 检查项目文件
Write-Host "📁 检查项目文件..." -ForegroundColor Blue

if (Test-Path "package.json") {
    Write-Host "✅ package.json 存在" -ForegroundColor Green
} else {
    Write-Host "❌ package.json 缺失" -ForegroundColor Red
}

if (Test-Path "vite.config.js") {
    Write-Host "✅ vite.config.js 存在" -ForegroundColor Green
} else {
    Write-Host "❌ vite.config.js 缺失" -ForegroundColor Red
}

if (Test-Path "src/main.jsx") {
    Write-Host "✅ src/main.jsx 存在" -ForegroundColor Green
} else {
    Write-Host "❌ src/main.jsx 缺失" -ForegroundColor Red
}

# 检查部署配置文件
Write-Host "⚙️  检查部署配置..." -ForegroundColor Blue

if (Test-Path "wrangler.toml") {
    Write-Host "✅ wrangler.toml 存在" -ForegroundColor Green
} else {
    Write-Host "⚠️  wrangler.toml 不存在（可选）" -ForegroundColor Yellow
}

if (Test-Path ".github/workflows/deploy.yml") {
    Write-Host "✅ GitHub Actions 配置存在" -ForegroundColor Green
} else {
    Write-Host "⚠️  GitHub Actions 配置不存在（可选）" -ForegroundColor Yellow
}

# 总结
Write-Host ""
Write-Host "📋 检查总结" -ForegroundColor Cyan
Write-Host "===================" -ForegroundColor Cyan

Write-Host "🎉 检查完成！" -ForegroundColor Green
Write-Host ""
Write-Host "下一步:" -ForegroundColor Yellow
Write-Host "1. 将代码推送到 GitHub" -ForegroundColor White
Write-Host "2. 在 Cloudflare Pages 中连接 GitHub 仓库" -ForegroundColor White
Write-Host "3. 配置构建设置并部署" -ForegroundColor White
Write-Host ""
Write-Host "详细步骤请参考: DEPLOYMENT.md" -ForegroundColor Cyan
Write-Host ""