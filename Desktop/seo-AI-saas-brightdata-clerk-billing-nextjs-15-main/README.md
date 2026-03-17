# 🚀 SEO AI SaaS – Smart Website Analyzer

**Live Demo:** [https://seo-ai-saas-cn3v40xh6-khalidkhalif1507-7041s-projects.vercel.app/](https://seo-ai-saas-cn3v40xh6-khalidkhalif1507-7041s-projects.vercel.app/)

This is a modern SaaS platform that leverages Artificial Intelligence to analyze websites, check SEO performance, and provide deep competitor insights. Built with **Next.js 15**, **Convex**, **Clerk**, and **Bright Data**.

---

## 🧠 How the "Engine" Works (The Tech Stack)

To understand how this app functions, imagine a team of four specialists working in perfect harmony:

### 1. Clerk: The Bouncer (Authentication)
Clerk handles everything related to users. When you sign in, Clerk ensures you are who you say you are. It passes a unique User ID to the rest of the system, allowing the app to keep your SEO reports private and organized.

### 2. Bright Data: The Secret Agent (Scraping)
This is the raw power of the project. When you enter a URL, the app sends a request to **Bright Data**. Using their massive proxy network, they visit the website, bypass bot detection, "read" the entire content, and send the raw data back to our server in seconds.

### 3. Convex: The Brain & Memory (Database & Backend)
Convex is the glue. Instead of a traditional, slow database, Convex acts as a real-time backend. It:
* Permanently stores every SEO report.
* Handles complex server-side logic instantly.
* Automatically pushes updates to your dashboard so you never have to hit "refresh" to see your results.

### 4. AI Integration: The Analyst
Once Bright Data fetches the raw information, it is fed into an AI model via the Vercel AI SDK. The AI doesn't just see code; it interprets it like a marketing expert—identifying missing tags, analyzing sentiment, and suggesting specific improvements for Google rankings.

---

## 📝 The Workflow: From URL to Insight

When you hit the **"Analyze"** button, a seamless chain reaction occurs:

1.  **Handshake:** Clerk confirms your session is secure and active.
2.  **The Hunt:** A "Mutation" is triggered in Convex to create a pending report, while a Server Action calls Bright Data to scrape the site.
3.  **The Processing:** Raw HTML and metadata are sent to the AI, which generates a professional-grade audit.
4.  **The Delivery:** Convex saves the finished analysis, and because the system is "reactive," the report pops up on your screen the moment it's ready.

---

## 🛠 Features
* **Deep SEO Audit:** Analyzes titles, metadata, image alt-tags, and site structure.
* **AI Insights:** Concrete, actionable plans to help websites rank higher.
* **Real-time Dashboard:** Track your history and view live analysis progress.
* **Performance Focused:** Built with Next.js 15 and Turbopack for lightning-fast speeds.

---

## 🚀 Getting Started Locally

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/Khhashi/seo-ai-saas.git](https://github.com/Khhashi/seo-ai-saas.git)
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Setup Environment Variables:**
    Create a `.env.local` file with your Clerk, Convex, and Bright Data keys.

4.  **Run the development server:**
    ```bash
    pnpm dev
    ```