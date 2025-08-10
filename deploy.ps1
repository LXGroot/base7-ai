#!/usr/bin/env pwsh
# Cloudflare Pages 部署脚本
# 使用方法: .\deploy.ps1 [production|preview]

param(
    [string]$Environment = "production"
)

Write-Host "🚀 开始部署到 Cloudflare Pages..." -ForegroundColor Green
Write-Host "环境: $Environment" -ForegroundColor Yellow

# 检查是否安装了必要的工具
if (!(Get-Command "node" -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: 未找到 Node.js，请先安装 Node.js" -ForegroundColor Red
    exit 1
}

if (!(Get-Command "pnpm" -ErrorAction SilentlyContinue)) {
    Write-Host "❌ 错误: 未找到 pnpm，正在安装..." -ForegroundColor Yellow
    npm install -g pnpm
}

# 安装依赖
Write-Host "📦 安装依赖..." -ForegroundColor Blue
pnpm install

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 依赖安装失败" -ForegroundColor Red
    exit 1
}

# 构建项目
Write-Host "🔨 构建项目..." -ForegroundColor Blue
pnpm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 项目构建失败" -ForegroundColor Red
    exit 1
}

# 检查构建产物
if (!(Test-Path "dist")) {
    Write-Host "❌ 错误: 构建产物目录 'dist' 不存在" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建完成!" -ForegroundColor Green
Write-Host "📁 构建产物位于: dist/" -ForegroundColor Yellow

# 检查是否安装了 wrangler
if (!(Get-Command "wrangler" -ErrorAction SilentlyContinue)) {
    Write-Host "⚠️  未找到 wrangler CLI，正在安装..." -ForegroundColor Yellow
    npm install -g wrangler
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ wrangler 安装失败" -ForegroundColor Red
        Write-Host "请手动安装: npm install -g wrangler" -ForegroundColor Yellow
        exit 1
    }
}

# 部署到 Cloudflare Pages
Write-Host "🌐 部署到 Cloudflare Pages..." -ForegroundColor Blue

if ($Environment -eq "preview") {
    wrangler pages deploy dist --project-name=base7-website --compatibility-date=2024-01-01
} else {
    wrangler pages deploy dist --project-name=base7-website
}

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 部署成功!" -ForegroundColor Green
    Write-Host "🔗 请查看 Cloudflare Pages 控制台获取访问链接" -ForegroundColor Yellow
} else {
    Write-Host "❌ 部署失败" -ForegroundColor Red
    Write-Host "请检查 Cloudflare 配置和网络连接" -ForegroundColor Yellow
    exit 1
}

Write-Host "✨ 部署流程完成!" -ForegroundColor Green