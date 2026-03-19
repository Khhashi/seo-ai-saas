# 🚀 SEO AI SaaS - BrightData & Next.js 15

## 🔗 Live Demo
**Check out the live application here:**
[https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/](https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/)

---

## 📖 What is this project?
This is a Fullstack SaaS (Software as a Service) platform designed to help users analyze the SEO (Search Engine Optimization) of any website. It uses Artificial Intelligence to give smart feedback and web scraping to get real-time data.

## 🛠️ What problems does it solve?
* **Manual Research:** Instead of checking SEO tags manually, this tool scrapes the site automatically using **BrightData**.
* **Complex Data:** It uses **OpenAI** to translate boring technical data into easy-to-understand SEO advice.
* **Security Risks:** This version is fully updated to fix the **CVE-2025-66478** security bug.
* **User Management:** It handles logins and security easily using **Clerk**.

---

## 🚀 How to Setup

### 1. Clone the repo
```bash
git clone [https://github.com/Khhashi/seo-ai-saas.git](https://github.com/Khhashi/seo-ai-saas.git)

Bash
cd seo-ai-saas

2. Install dependencies

Bash
pnpm install

3. Environment Variables

Create a .env.local file and add your keys:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
Kodebit
CLERK_SECRET_KEY=your_key_here

CONVEX_DEPLOYMENT=your_key_here

NEXT_PUBLIC_CONVEX_URL=your_key_here

OPENAI_API_KEY=your_key_here

BRIGHT_DATA_API_KEY=your_key_here


4. Run locally

Bash
pnpm dev

