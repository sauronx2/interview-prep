# Interview Preparation - QA Automation Engineer

Сучасний веб-додаток для підготовки до інтерв'ю на позицію QA Automation Engineer. Створений з використанням Next.js 15, TypeScript, і Tailwind CSS.

## 🌐 Live Demo

**[View Live Application](https://sauronx2.github.io/interview-prep/)**

Deployed on GitHub Pages with automatic static site generation.

## 🚀 Features

- **74 питання** з детальними відповідями українською мовою
- **8 категорій**: Java Core, Design Patterns, Framework Architecture, API/UI Automation, SQL, Stream Tasks, Mobile Automation
- **Мінімалістичний дизайн** з відмінною типографікою
- **Dark mode** для комфортного читання
- **Responsive design** - працює на всіх пристроях
- **Docker-ready** - запуск в один клік

## 📋 Requirements

- Node.js 20+
- Docker & Docker Compose (для containerized deployment)
- Make (опціонально, для зручності)

## 🛠️ Quick Start

### Метод 1: Docker (Рекомендовано)

```bash
# Клонувати та перейти в директорію
cd interview-prep

# Встановити та запустити (один клік)
make up

# Або без Make:
docker-compose up -d --build

# Додаток доступний на http://localhost:3000
```

### Метод 2: Local Development

```bash
# Встановити залежності
npm install

# Запустити dev сервер
npm run dev

# Додаток доступний на http://localhost:3000
```

## 📦 Makefile Commands

```bash
make help       # Показати всі доступні команди
make install    # Встановити npm dependencies
make dev        # Запустити development server
make build      # Зібрати Docker image
make start      # Запустити в Docker
make stop       # Зупинити контейнер
make restart    # Перезапустити
make logs       # Показати логи
make status     # Статус контейнера
make clean      # Видалити всі контейнери/images
make up         # Build + Start (один клік)
make rebuild    # Clean + Build + Start
```

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Docker + GitHub Pages

## 📂 Project Structure

```
interview-prep/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── QuestionCard.tsx      # Q&A card component
│   └── CategorySection.tsx   # Category section
├── lib/
│   ├── types.ts         # TypeScript types
│   └── data.ts          # Interview Q&A data
├── Dockerfile           # Multi-stage Docker build
├── docker-compose.yml   # Docker Compose config
├── Makefile            # One-click commands
└── package.json        # Dependencies
```

## 🎨 Design Features

- **Color Palette**: Приємні сині та фіолетові відтінки
- **Typography**: Geist font family для відмінної читабельності
- **Animations**: Smooth transitions та micro-interactions
- **Accessibility**: WCAG compliant

## 📝 Categories

1. ☕ **Java Core** - OOP, Streams, Functional Interfaces
2. 🏗️ **Design Patterns** - GoF & AQA Patterns
3. 🏛️ **Framework Architecture** - Components, Structure
4. 🔌 **API Automation** - RestAssured, HTTP
5. 🖥️ **UI Automation** - Selenium WebDriver
6. 🗄️ **SQL Queries** - Joins, Subqueries
7. 🧮 **Stream & Logic Tasks** - Coding challenges
8. 📱 **Mobile Automation** - Appium Overview

## 🐳 Docker Details

- **Multi-stage build** for optimized image size
- **Non-root user** for security
- **Health checks** for reliability
- **Production-ready** configuration

## 🚀 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using static export.

### How it works

1. Next.js builds static HTML/CSS/JS files to `/docs` folder
2. GitHub Pages serves content from `/docs` on `master` branch
3. Site is available at: https://sauronx2.github.io/interview-prep/

### Rebuild and Deploy

```bash
# Install dependencies (first time only)
npm install

# Build static site
npm run build

# Commit and push changes
git add docs/
git commit -m "chore: rebuild static site"
git push origin master
```

The site will automatically update within 1-2 minutes after pushing to GitHub.

### Configuration Files

- `next.config.ts` - Static export with `/interview-prep` base path
- `.nojekyll` - Prevents Jekyll processing on GitHub Pages
- `docs/` - Output directory for static files

## 📄 License

MIT

## 👨‍💻 Author

Created with Next.js, TypeScript, and Tailwind CSS
