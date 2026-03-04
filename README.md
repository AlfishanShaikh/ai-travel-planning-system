<div align="center">
  
# ✈️ AI Trip Planner

**A Next-Generation, Conversational AI-Powered Travel Assistant**

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Project-blue?style=for-the-badge&logo=vercel)](https://tripplanner-web-app.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Convex](https://img.shields.io/badge/Convex-Serverless_DB-orange?style=for-the-badge)](https://convex.dev/)

*Plan your dream vacation in seconds with advanced LLMs, interactive maps, and beautiful UI.*

---

</div>

## 📖 Overview

AI Trip Planner is a full-stack web app that makes planning your next vacation effortless. Instead of filling out long travel forms, you simply chat with an AI assistant about where you want to go, your budget, and what you like to do. 

Based on your chat, the app automatically builds a complete travel itinerary for you. Your customized plan includes budget-friendly hotel suggestions, day-by-day activity schedules, local food recommendations, and interactive maps to help you visualize your trip.

---

## 📸 Screenshots & UI

> ![Hero Section](https://github.com/AlfishanShaikh/ai-travel-planning-system/blob/main/public/hero-section.png?raw=true)
*The AI Trip Planner clean, conversational interface.*

> ![Map View](https://github.com/AlfishanShaikh/ai-travel-planning-system/blob/main/public/map-view.png?raw=true)
*Synchronous MapLibre GL Integration tracking the itinerary.*

> ![Generated Itinerary](https://github.com/AlfishanShaikh/ai-travel-planning-system/blob/main/public/generated-itinerary.png?raw=true)
*Detailed, chronological day-by-day travel plans generated flawlessly by Groq.*

> ![Itinerary Cards](https://github.com/AlfishanShaikh/ai-travel-planning-system/blob/main/public/Itinerary.png?raw=true)
*Itinerary Cards details.*

---

## ✨ Core Features

*   🤖 **Conversational AI Chatbot** - Powered by Groq/LLaMA-3, featuring four distinct planning modes: Standard, Inspire Me, Hidden Gems, and Adventure.
*   🗺️ **Interactive Global Maps** - Integrated `MapLibre GL` displaying live geographical coordinates for hotels and daily activities. Synchronized with user itinerary clicks.
*   📅 **Hyper-Detailed Itineraries** - Generates chronological, gapless daily schedules detailing travel time, ticket pricing, and the optimal time to visit each location.
*   🏨 **Budget-Aware Accommodations** - Suggests matching hotels based exactly on user-defined financial constraints (Budget, Moderate, Luxury).
*   🖼️ **Dynamic Image Fetching** - A robust multi-API fallback system (Unsplash → Pexels → Teleport) ensuring visual representation for every suggested location.
*   🔐 **Secure Authentication & DB** - Seamless Google OAuth and email login via Clerk, backed by real-time Convex database syncing.
*   �️ **Arcjet Security Middleware** - Intelligent rate-limiting to prevent API abuse, managing free-tier constraints while allowing premium access seamlessly.
*   🎨 **Sleek UI/UX** - Highly responsive, modern interface built with Tailwind CSS, Shadcn UI components, and Framer Motion animations.

---

## 🏗️ System Architecture & Tech Stack

### Frontend Ecosystem
*   **Framework:** [Next.js 14/15](https://nextjs.org/) (App Router paradigm)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) for strict type safety
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
*   **Maps:** [MapLibre GL](https://maplibre.org/)
*   **Icons & Animation:** `lucide-react`, `@tabler/icons-react`, and `motion/react`

### Backend & Database (Serverless)
*   **Database:** [Convex](https://convex.dev/) for real-time document storage (`UserTable` and `TripDetailTable`).
*   **Authentication:** [Clerk](https://clerk.dev/) for session management and user identities.
*   **API Security:** [Arcjet](https://arcjet.com/) acting as middleware in API routes for bot-protection and rate-limiting.

### AI & Integrations
*   **LLM Engine:** [Groq API](https://groq.com/) utilizing the `llama-3.3-70b-versatile` model for lightning-fast JSON generation.
*   **Prompt Engineering:** Custom System & Final Prompts forcing strict JSON adherence, preventing hallucinations, and ensuring logical time-routing for daily plans.

---

## 🚀 Getting Started Locally

### 1. Prerequisites
Ensure you have the following installed on your local machine:
*   [Node.js](https://nodejs.org/en/) (v18 or higher)
*   [Git](https://git-scm.com/)

You will also need to create free accounts to retrieve API keys for:
*   [Groq (AI)](https://console.groq.com)
*   [Clerk (Auth)](https://clerk.com)
*   [Convex (Database)](https://convex.dev)

### 2. Installation

Clone the repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/DishaS08/ai-trip-planner-app.git

# Navigate into the project directory
cd ai-trip-planner-app

# Install NPM dependencies
npm install
```

### 3. Environment Variables configuration

Create a `.env.local` file in the root of your project and populate it with the following keys:

```env
# =========================
# CLERK AUTHENTICATION
# =========================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# =========================
# CONVEX DATABASE
# =========================
CONVEX_DEPLOYMENT=your_convex_deployment_name
NEXT_PUBLIC_CONVEX_URL=your_convex_url

# =========================
# AI MODEL (GROQ / OPENAI)
# =========================
GROQ_API_KEY=your_groq_api_key

# =========================
# SECURITY & RATE LIMITING (ARCJET)
# =========================
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

# =========================
# IMAGE FETCHING APIS
# =========================
UNSPLASH_ACCESS_KEY=your_unsplash_api_key
# Optional Fallbacks:
# PEXELS_API_KEY=your_pexels_key
# SERP_API_KEY=your_serp_key
```

### 4. Initialize Database & Run

Start up the Convex local backend, followed by the Next.js development server:

```bash
# Start Convex development server (Leave this running in a separate terminal)
npx convex dev

# Start Next.js development server
npm run dev
```

The application should now be accessible at `http://localhost:3002`.

---

## � Project Structure

```text
ai-trip-planner-app/
│
├── app/                        # Next.js App Router root
│   ├── (auth)/                 # Clerk authentication routes
│   ├── api/                    # Serverless API routes
│   │   └── aimodel/            # Groq implementation & Arcjet middleware
│   ├── create-new-trip/        # Core trip planning interface (Chat + Map)
│   ├── my-trips/               # User dashboard displaying saved itineraries
│   ├── view-trip/              # Dynamic route viewing specific generated trips
│   ├── provider.tsx            # Global state (Convex, Clerk, Custom Contexts)
│   └── globals.css             # Tailwind configuration & global styles
│
├── components/                 # Shared UI Components (Shadcn & Custom)
├── context/                    # React Contexts (UserDetail Context, TripDetail Context)
├── convex/                     # Backend Logic
│   ├── schema.ts               # Database Table Definitions
│   ├── tripDetail.ts           # Trip CRUD Operations
│   └── user.ts                 # User CRUD Operations
│
├── hooks/                      # Custom React Hooks
├── lib/                        # Utility functions
└── public/                     # Static assets (Favicons, Logos)
```

---

## 🧠 How the AI Engine Works

1.  **Stateful Chat (`CreateNewTrip`):** The intelligent UI determines what details it still needs from the user (Origin, Destination, Budget, Group Size, Duration).
2.  **Sequential Prompting:** The `aimodel/route.tsx` endpoint appends specific rules to the system prompt based on whether the user is typing naturally or clicking pre-defined selections.
3.  **The Generation Payload:** Once all `required` fields are captured, an `isFinal` flag is tripped. The backend utilizes a strictly-enforced Prompt Schema directing the LLaMA model to construct a massive JSON object without missing any chronological time gaps.
4.  **Middleware Check:** Before hitting the expensive Groq API on that final request, Arcjet evaluates the user's `uid` to ensure they have not exceeded their free quota.

---

## 🌐 Deployment

The easiest way to deploy this full-stack Next.js app is via [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Add **ALL** the environment variables from your `.env.local` file into the Vercel Environment Variables settings.
4.  Click **Deploy**.

> **Note:** Ensure your Convex deployment is pushed to production (`npx convex deploy`) before or during this step so your production database is live.

---

## 💡 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License & Acknowledgements

- **AI Engine Framework:** Heavily reliant on open-source LLaMA weights hosted by Groq.
- **Styling:** Special thanks to the creators of `shadcn/ui` for making accessible UI components beautiful.

<div align="center">
  <br />
  <i>🌍 Built for travelers, powered by AI.</i>
  <br />
  <b><a href="https://tripplanner-web-app.vercel.app/">View Live Project</a></b>
</div>