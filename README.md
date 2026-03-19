# 🚀 SEO AI SaaS - BrightData & Next.js 15

## 📖 What is this project?
This is a Fullstack SaaS (Software as a Service) platform designed to help users analyze the SEO (Search Engine Optimization) of any website. It uses Artificial Intelligence to give smart feedback and web scraping to get real-time data.

## 🛠️ What problems does it solve?
* **Manual Research:** Instead of checking SEO tags manually, this tool scrapes the site automatically using **BrightData**.
* **Complex Data:** It uses **OpenAI** to translate boring technical data into easy-to-understand SEO advice.
* **Security Risks:** This version is fully updated to fix the **CVE-2025-66478** security bug found in older Next.js versions.
* **User Management:** It handles logins and security easily using **Clerk**.

---

## 🔗 Live Demo
**Check out the live application here:** [https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/](https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/)

---

## ✨ Key Features
* **AI SEO Chat:** Talk to an AI assistant about your website's performance.
* **Automated Scanning:** Get technical data like Meta Tags and Headers instantly.
* **PDF Reports:** Download your SEO analysis to share with clients.
* **Safe & Secure:** Built with the latest React 19 and Next.js 16 features.

---

## 🛠 Tech Stack
* **Framework:** Next.js 16.2.0 (App Router)
* **Frontend:** React 19.2.4 & Tailwind CSS
* **Database:** Convex
* **Auth:** Clerk
* **AI:** OpenAI SDK
* **Scraping:** BrightData

---

## 🚀 How to Setup

### 1. Clone the repo
```bash
git clone [https://github.com/Khhashi/seo-ai-saas.git](https://github.com/Khhashi/seo-ai-saas.git)
cd seo-ai-saas

2. Install dependencies
Bash
pnpm install

3. Environment Variables
Create a .env.local file and add your keys:


NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=...
OPENAI_API_KEY=...
BRIGHT_DATA_API_KEY=...


4. Run locally
Bash
pnpm dev

