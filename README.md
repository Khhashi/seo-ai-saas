# 🚀 SEO AI SaaS – Smart Website Analyzer

A fast, modern tool that uses AI to scan any website and give you a professional SEO report in seconds.

[**Live Demo**](https://seo-ai-saas-cn3v40xh6-khalidkhalif1507-7041s-projects.vercel.app/) | [**Source Code**](https://github.com/Khhashi/seo-ai-saas.git)

---

## 💡 What is this?
Most people want their website to show up on Google, but they don't know how to fix their "SEO" (Search Engine Optimization). 

I built this tool to solve that. You just paste a website link, and the app uses **Artificial Intelligence** to scan the site. It tells you exactly what is wrong and how to fix it in plain English.

---

## ❓ The Problem & The Solution

* **The Problem:** Professional SEO tools are expensive, slow, and hard for beginners to understand.
* **The Solution:** This app acts like a **personal SEO consultant**. It reads the code for you and gives you a simple "To-Do" list to improve your ranking.

---

## ⚙️ How it Works (The 4-Step Process)

1.  **Secure Login:** You sign in using **Clerk**. This keeps your SEO reports private and organized.
2.  **The Scan:** The app uses **Bright Data** to "visit" the URL you entered. It reads the titles, text, and hidden code just like a search engine would.
3.  **The AI Brain:** That data is sent to an **AI Specialist** (via Vercel AI SDK). The AI looks for mistakes, like missing titles or images without descriptions.
4.  **Instant Delivery:** The results are saved in **Convex** and pop up on your screen immediately. No page refresh is needed!

---

## 🛠️ The Tech Stack (Simple Terms)

* **Next.js 15:** The modern engine that makes the website lightning fast.
* **Convex:** The "Real-time" database. This is why results appear the second they are ready.
* **Bright Data:** The "Eyes" of the app. It allows us to read other websites without getting blocked.
* **Clerk:** Handles user accounts and security.
* **Vercel AI SDK:** Powers the AI that gives you the marketing advice.

---

## ✨ Features
* **Deep SEO Audit:** Checks titles, meta tags, and site structure.
* **Action Plan:** Get clear, actionable steps to rank higher on Google.
* **History Dashboard:** Keep track of all the websites you have analyzed.
* **Performance Focused:** Built with the latest tools for a smooth experience.

---

## 🚀 How to Run it Locally

If you want to see how the code works on your own computer, follow these steps:

1.  **Clone the project:**
    ```bash
    git clone [https://github.com/Khhashi/seo-ai-saas.git](https://github.com/Khhashi/seo-ai-saas.git)
    cd seo-ai-saas
    ```

2.  **Install the tools:**
    ```bash
    pnpm install
    ```

3.  **Add your API Keys:**
    Create a file named `.env.local` in the main folder. You will need keys from **Clerk, Convex, and Bright Data**.

4.  **Start the app:**
    ```bash
    pnpm dev
    ```
    Now open [http://localhost:3000](http://localhost:3000) in your browser!

---
