# 🚀 SEO AI SaaS – Smart Website Analyzer

## 🌍 Live Demo
👉 https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/

## 🔗 Repository
👉 https://github.com/Khhashi/seo-ai-saas

---

## ❓ What is this?

This is a **fullstack SaaS application** that analyzes the SEO of any website using AI and real-time scraping.

It works like a **personal SEO assistant** that reads your website and gives you clear, actionable feedback.

---

## ⚡ The Problem & The Solution

**❌ The Problem:**  
Professional SEO tools are expensive, slow, and hard for beginners to understand.

**✅ The Solution:**  
This app acts like a **personal SEO consultant**.  
It scans your website and gives you a simple **"To-Do" list** to improve your ranking.

---

## 🔄 How it Works (The 4-Step Process)

1. **🔐 Secure Login**  
   You sign in using **Clerk**, keeping your reports private and secure  

2. **🌐 The Scan**  
   The app uses **BrightData** to visit your website and extract SEO data  

3. **🤖 AI Analysis**  
   The data is sent to **OpenAI** to detect issues and improvements  

4. **⚡ Instant Results**  
   Results are saved in **Convex** and shown instantly  

---

## 🧰 Tech Stack

- Next.js 15  
- React  
- Clerk  
- Convex  
- OpenAI  
- BrightData  

---

## ✨ Features

- 🔍 Deep SEO Audit  
- 📋 Actionable SEO Suggestions  
- 📊 Dashboard with History  
- ⚡ Fast & Modern UI  

---

## 🖥️ How to Run Locally

### 1. Clone the project
```bash
git clone https://github.com/Khhashi/seo-ai-saas.git
cd seo-ai-saas

2. Install dependencies
pnpm install

3. Setup environment variables

Create:

.env.local

Add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key_here
CLERK_SECRET_KEY=your_key_here

CONVEX_DEPLOYMENT=your_key_here
NEXT_PUBLIC_CONVEX_URL=your_key_here

OPENAI_API_KEY=your_key_here
BRIGHT_DATA_API_KEY=your_key_here

4. Run the app
pnpm dev
