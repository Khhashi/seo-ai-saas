# 🚀 SEO AI SaaS - BrightData & Next.js 15

This is a modern SaaS platform developed for AI-driven SEO analysis, built with the latest technologies in web development. The project combines powerful data collection from BrightData with intelligent insights from OpenAI to provide users with deep visibility into their digital presence.

## 🔗 Live Demo
**Check out the live application here:** [https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/](https://seo-ai-saas-7ncxw7wbu-khalidkhalif1507-7041s-projects.vercel.app/)

---

## ✨ Key Features
* **AI-Powered SEO Chat:** An intelligent assistant that answers questions about your website.
* **Automated Reports:** Generate technical SEO analyses in seconds.
* **PDF Export:** Download your analyses for professional presentation.
* **User Dashboard:** Full overview of previous scans and history.
* **Billing Integration:** Pre-configured pricing page for different subscription levels.

---

## 🛠 Tech Stack
* **Framework:** [Next.js 16.2.0](https://nextjs.org/) (App Router & Turbopack).
* **Frontend:** [React 19.2.4](https://react.dev/), [Tailwind CSS 4](https://tailwindcss.com/), [Lucide React](https://lucide.dev/).
* **Database & Backend:** [Convex](https://www.convex.dev/).
* **Authentication:** [Clerk](https://clerk.com/).
* **AI Integration:** [OpenAI SDK](https://openai.com/) & [AI SDK by Vercel](https://sdk.vercel.ai/).
* **Data Scraping:** [BrightData](https://brightdata.com/).
* **Package Manager:** [pnpm](https://pnpm.io/).

---

## 🚀 Installation and Setup

### 1. Clone the repo
```bash
git clone [https://github.com/Khhashi/seo-ai-saas.git](https://github.com/Khhashi/seo-ai-saas.git)
cd seo-ai-saas

2. Install dependencies
Bash
pnpm install

3. Configure Environment Variables
Create a .env.local file and add your keys to connect the services:

Kodebit
# Clerk (Authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...

# Convex (Database)
CONVEX_DEPLOYMENT=...
NEXT_PUBLIC_CONVEX_URL=...

# OpenAI & BrightData
OPENAI_API_KEY=...
BRIGHT_DATA_API_KEY=...

4. Run the project locally
Bash
pnpm dev
Navigate to http://localhost:3000 to see the result.
