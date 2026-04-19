<div align="center">

# ServiceMate

### AI-Powered Customer Support Chatbot Platform

An enterprise-ready, fully customizable chatbot platform that lets businesses deploy an AI support agent trained on their own knowledge base — with a no-code embed widget, conversation inbox, and team management dashboard.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Google Gemini](https://img.shields.io/badge/AI-Gemini%202.5%20Flash-4285F4?logo=google)](https://ai.google.dev/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)](https://www.postgresql.org/)
[![Drizzle ORM](https://img.shields.io/badge/ORM-Drizzle-C5F74F)](https://orm.drizzle.team/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Screenshots](#screenshots)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Database Schema](#database-schema)
- [Embed Widget Integration](#embed-widget-integration)
- [Deployment](#deployment)

---

## Overview

**ServiceMate** is a full-stack SaaS platform that enables businesses to deploy an intelligent, AI-powered customer support chatbot trained on their own content. Instead of generic bot responses, ServiceMate learns from your website, documents, and FAQs — and responds with contextually accurate, brand-aligned answers.

The platform provides:

- A **no-code dashboard** to train the AI with your content
- A **lightweight embed snippet** that drops into any website in seconds
- A **conversation inbox** to monitor and reply to real visitor chats
- **Enterprise SSO** authentication via Scalekit
- **Topic-based behavior sections** to control tone, allowed topics, and escalation rules per domain

---

## Screenshots

### Landing Page

> **[SCREENSHOT PLACEHOLDER — Landing Page Hero]**
> *Full-width hero section with product headline, CTA buttons, and product preview.*

---

### Dashboard — Overview

> **[SCREENSHOT PLACEHOLDER — Dashboard Overview]**
> *Stats cards showing knowledge sources, active sections, and total conversations.*

---

### Dashboard — Knowledge Base

> **[SCREENSHOT PLACEHOLDER — Knowledge Base Page]**
> *Table of knowledge sources with status badges (Active, Training, Error). Add sources via website URL, file upload, or raw text.*

---

### Dashboard — Add Knowledge Source Modal

> **[SCREENSHOT PLACEHOLDER — Add Knowledge Modal]**
> *Tabbed modal: "Website" tab (URL input), "Upload" tab (file drag-and-drop), "Text" tab (freeform input).*

---

### Dashboard — Sections

> **[SCREENSHOT PLACEHOLDER — Sections Page]**
> *Table of topic sections with tone badges (Strict, Neutral, Friendly, Empathetic) and status indicators.*

---

### Dashboard — Create Section

> **[SCREENSHOT PLACEHOLDER — Create Section Form]**
> *Form with section name, description, tone selector, allowed/blocked topics, and linked knowledge source multi-select.*

---

### Dashboard — Chatbot Playground

> **[SCREENSHOT PLACEHOLDER — Chatbot Playground]**
> *Three-panel view: live chat simulator on the left, appearance config (color picker, welcome message) on the right, embed code at the bottom.*

---

### Dashboard — Conversations Inbox

> **[SCREENSHOT PLACEHOLDER — Conversations Inbox]**
> *Sidebar list of visitor conversations with IP-based visitor names. Selected conversation shows full message thread with human reply input.*

---

### Dashboard — Settings / Team Management

> **[SCREENSHOT PLACEHOLDER — Team Settings Page]**
> *Table of team members with roles and statuses (Active, Pending). "Invite Member" button to send SSO invitations.*

---

### Embedded Widget (on Client Website)

> **[SCREENSHOT PLACEHOLDER — Embedded Chat Widget]**
> *Floating chat button in the bottom-right corner of a webpage. Expanded state shows the chat interface with welcome message and message history.*

---

## Features

### AI & Knowledge Engine

| Feature | Description |
|---------|-------------|
| **RAG (Retrieval-Augmented Generation)** | All responses are grounded in your knowledge sources — not hallucinated |
| **Website Scraping** | Paste any URL; the platform scrapes and indexes the content via ZenRows |
| **File Upload** | Upload CSV or text files as knowledge sources |
| **Text Input** | Type or paste content directly as a knowledge entry |
| **Auto-Summarization** | Long documents are automatically condensed by Gemini before storage |
| **Token Management** | Conversation history is summarized at 6,000 tokens to stay within model limits |
| **Google Gemini 2.5 Flash** | State-of-the-art multimodal LLM for fast, accurate responses |

### Chatbot Behavior

| Feature | Description |
|---------|-------------|
| **AI Persona ("Sarah")** | Consistent, friendly support persona with defined behavioral guardrails |
| **Sections** | Topic-based behavior zones — define tone, allowed topics, and blocked topics per section |
| **Tone Control** | Four tones per section: `Strict`, `Neutral`, `Friendly`, `Empathetic` |
| **Escalation** | Bot can create support tickets when queries exceed its capabilities |
| **Conversation History** | Full message thread preserved per visitor session |

### Customization & Branding

| Feature | Description |
|---------|-------------|
| **Color Picker** | Match the widget accent color to your brand |
| **Welcome Message** | Custom greeting shown at the start of each conversation |
| **Embed Code Generator** | Auto-generated `<script>` snippet for any website |

### Conversation Management

| Feature | Description |
|---------|-------------|
| **Conversations Inbox** | Browse all visitor chats in real time |
| **Human Handoff** | Agents can send manual replies directly into any conversation |
| **Visitor Identification** | Visitors automatically named by IP address (e.g., `#Visitor192`) |

### Enterprise & Team Features

| Feature | Description |
|---------|-------------|
| **Enterprise SSO** | Powered by Scalekit — supports SAML, OIDC, and Google Workspace |
| **Team Invitations** | Invite teammates with role assignments |
| **Organization Support** | All resources are scoped to an organization |
| **Secure Sessions** | HTTP-only cookies with 7-day expiry |
| **JWT Widget Tokens** | Short-lived (2h) JWT tokens for embedded widget authentication |

### Developer & Embed

| Feature | Description |
|---------|-------------|
| **Zero-dependency Embed** | Single `<script>` tag — no npm install required |
| **Domain Allowlisting** | Restrict which domains can render your widget |
| **postMessage API** | Widget communicates height changes to the host page for seamless iframe resizing |
| **CORS-safe Public API** | Dedicated `/api/chat/public` endpoint for cross-origin chat requests |

---

## Tech Stack

### Frontend
- **[Next.js 16](https://nextjs.org/)** — App Router, Server Components, API Routes
- **[React 19](https://react.dev/)** — UI library
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety across the full stack
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[Radix UI](https://www.radix-ui.com/)** — Accessible, unstyled primitives
- **[shadcn/ui](https://ui.shadcn.com/)** — Pre-built component system
- **[Lucide React](https://lucide.dev/)** — Icon library
- **[Recharts](https://recharts.org/)** — Data visualization
- **[React Hook Form](https://react-hook-form.com/)** + **[Zod](https://zod.dev/)** — Form management & validation
- **[Sonner](https://sonner.emilkowal.ski/)** — Toast notifications
- **[date-fns](https://date-fns.org/)** — Date formatting

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** — Serverless edge functions
- **[Drizzle ORM](https://orm.drizzle.team/)** — Type-safe SQL query builder
- **[Neon Serverless PostgreSQL](https://neon.tech/)** — Serverless PostgreSQL database
- **[Jose](https://github.com/panva/jose)** — JWT signing & verification

### AI & Integrations
- **[Google Gemini 2.5 Flash](https://ai.google.dev/)** — LLM for chat responses and summarization
- **[ZenRows](https://www.zenrows.com/)** — Anti-bot web scraping for knowledge ingestion
- **[Scalekit](https://scalekit.com/)** — Enterprise SSO (SAML / OIDC)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Website                          │
│   <script src="...embed...">  →  Floating Chat Widget       │
└──────────────────────┬──────────────────────────────────────┘
                       │  JWT-authenticated POST /api/chat/public
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                   Next.js Application                       │
│                                                             │
│  ┌──────────────┐   ┌──────────────┐   ┌────────────────┐  │
│  │   Landing    │   │  Dashboard   │   │   Embed Page   │  │
│  │   Page       │   │  (Protected) │   │   /embed       │  │
│  └──────────────┘   └──────────────┘   └────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                  API Routes                         │   │
│  │  /auth  /chat  /knowledge  /sections  /widget  ...  │   │
│  └──────────────────────┬──────────────────────────────┘   │
└─────────────────────────┼───────────────────────────────────┘
                          │
          ┌───────────────┼───────────────┐
          ▼               ▼               ▼
   ┌─────────────┐ ┌──────────────┐ ┌──────────────┐
   │  Neon DB    │ │Google Gemini │ │  Scalekit    │
   │ (PostgreSQL)│ │ 2.5 Flash    │ │  SSO Auth    │
   └─────────────┘ └──────────────┘ └──────────────┘
          ▲
   ┌─────────────┐
   │  ZenRows    │
   │ (Scraping)  │
   └─────────────┘
```

### Chat Request Flow

```
Visitor Message
     │
     ▼
/api/chat/public
     │
     ├─ 1. Verify JWT widget token
     ├─ 2. Load all active knowledge sources for the organization
     ├─ 3. Load active sections (tone + topic rules)
     ├─ 4. Check conversation token count
     │      └─ If > 6000 tokens → summarize history with Gemini
     ├─ 5. Build system prompt with knowledge context + sections
     ├─ 6. Call Gemini 2.5 Flash
     ├─ 7. Persist user message + AI response to DB
     └─ 8. Return AI response to widget
```

---

## Getting Started

### Prerequisites

- **Node.js** v20 or higher
- **npm** v10 or higher
- A **[Neon](https://neon.tech/)** account (free tier works)
- A **[Google AI Studio](https://aistudio.google.com/)** API key (Gemini)
- A **[Scalekit](https://scalekit.com/)** account (for SSO auth)
- A **[ZenRows](https://www.zenrows.com/)** API key (for web scraping)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/servicemate.git
cd servicemate

# 2. Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# ─── Authentication (Scalekit SSO) ────────────────────────────
SCALEKIT_ENVIRONMENT_URL=https://your-env.scalekit.com
SCALEKIT_CLIENT_ID=your_client_id
SCALEKIT_CLIENT_SECRET=your_client_secret
SCALEKIT_REDIRECT_URI=http://localhost:3000/api/auth/callback

# ─── Database (Neon PostgreSQL) ───────────────────────────────
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require

# ─── AI (Google Gemini) ───────────────────────────────────────
GEMINI_API_KEY=your_gemini_api_key

# ─── Web Scraping (ZenRows) ───────────────────────────────────
ZENROWS_API_KEY=your_zenrows_api_key

# ─── Security ─────────────────────────────────────────────────
JWT_SECRET=your_super_secret_jwt_key_min_32_chars
```

> **Tip:** Generate a secure `JWT_SECRET`:
> ```bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> ```

### Database Setup

```bash
# Generate migration files from schema
npm run db:generate

# Apply migrations to your Neon database
npm run db:migrate

# (Optional) Open Drizzle Studio to browse your database
npm run db:studio
```

### Running the App

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## Project Structure

```
servicemate/
│
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Landing page
│   ├── layout.tsx                # Root layout
│   │
│   ├── api/                      # API route handlers
│   │   ├── auth/                 # Login, callback, logout
│   │   ├── chat/                 # public + test chat endpoints
│   │   ├── chatbot/metadata/     # Appearance config CRUD
│   │   ├── conversations/        # Inbox + message routes
│   │   ├── knowledge/            # Knowledge source CRUD + scraping
│   │   ├── metadata/             # Business metadata CRUD
│   │   ├── organization/         # Org fetch
│   │   ├── overview/             # Dashboard stats
│   │   ├── section/              # Behavior section CRUD
│   │   ├── team/                 # Team invite + fetch
│   │   └── widget/               # Widget config + JWT session
│   │
│   ├── dashboard/                # Protected dashboard pages
│   │   ├── page.tsx              # Overview / initial setup
│   │   ├── layout.tsx            # Dashboard shell with sidebar
│   │   ├── knowledge/            # Knowledge base management
│   │   ├── sections/             # Topic sections management
│   │   ├── chatbot/              # Playground + customization
│   │   ├── conversations/        # Visitor conversation inbox
│   │   └── settings/             # Team management
│   │
│   └── embed/                    # Embeddable widget page
│       └── page.tsx
│
├── components/                   # React components
│   ├── dashboard/                # Sidebar, overview, initial form
│   │   ├── chatbot/              # Chat simulator, appearance, embed code
│   │   ├── knowledge/            # Source table, add modal, detail sheet
│   │   └── sections/             # Section form, table, badges
│   ├── landing/                  # Nav, hero, features, pricing, footer
│   └── ui/                       # shadcn/ui component library
│
├── db/                           # Database layer
│   ├── schema.ts                 # Drizzle table definitions
│   └── index.ts                  # Neon DB client
│
├── drizzle/                      # Auto-generated SQL migrations
│
├── hooks/                        # Custom React hooks
│   ├── useUser.ts                # Current user session hook
│   └── use-mobile.ts             # Responsive viewport hook
│
├── lib/                          # Shared utilities & service clients
│   ├── gemini.ts                 # Gemini client + summarization helpers
│   ├── countConversationTokens.ts# Token counting logic
│   ├── isAuthorized.ts           # Server-side auth guard
│   ├── scalekit.ts               # Scalekit SDK init
│   └── utils.ts                  # General helpers (cn, etc.)
│
├── @types/                       # TypeScript type definitions
│   └── types.d.ts                # Shared interfaces & enums
│
├── public/                       # Static assets
├── .env                          # Environment variables (git-ignored)
├── next.config.ts                # Next.js config
├── drizzle.config.ts             # Drizzle ORM config
├── tailwind.config.ts            # Tailwind CSS config
├── tsconfig.json                 # TypeScript config
└── package.json                  # Dependencies & scripts
```

---

## API Reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/auth` | Initiate OAuth login via Scalekit |
| `GET` | `/api/auth/callback` | Handle OAuth callback, set session cookie |
| `POST` | `/api/auth/logout` | Clear session and redirect to home |

### Chat

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/chat/public` | JWT (widget token) | Chat endpoint for embedded widget |
| `POST` | `/api/chat/test` | Session cookie | Chat endpoint for dashboard playground |

**Request body:**
```json
{
  "messages": [
    { "role": "user", "content": "How do I reset my password?" }
  ],
  "conversationId": "uuid-or-null"
}
```

### Knowledge Base

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/knowledge/fetch` | List all knowledge sources |
| `POST` | `/api/knowledge/store` | Add source (website / upload / text) |

**Add website:**
```json
{ "type": "website", "name": "Docs", "source_url": "https://example.com/docs" }
```

**Add text:**
```json
{ "type": "text", "name": "Refund Policy", "content": "We offer 30-day refunds..." }
```

### Sections

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/section/fetch` | List all sections |
| `POST` | `/api/section/create` | Create a new section |
| `DELETE` | `/api/section/delete` | Delete a section by ID |

### Conversations

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/conversations` | List all visitor conversations |
| `GET` | `/api/conversations/[id]/messages` | Get messages in a conversation |
| `POST` | `/api/conversations/[id]/reply` | Send a human reply |

### Widget

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/widget/session` | Issue a JWT access token for the widget |
| `GET` | `/api/widget/config` | Fetch widget configuration (validated by JWT) |

### Team

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/team/fetch` | List organization team members |
| `POST` | `/api/team/add` | Invite a team member |

---

## Database Schema

### Entity Relationship Overview

```
user (1) ──── (N) metadata
user (1) ──── (N) knowledge_source
user (1) ──── (N) sections
           └───── (N) knowledge_source  [via source_ids array]
user (1) ──── (1) chatBotMetadata
user (1) ──── (N) team_members
user (1) ──── (N) widgets
               └── (N) conversation
                        └── (N) messages
```

### Tables

#### `user`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key |
| `organization_id` | VARCHAR | Scalekit org ID |
| `name` | VARCHAR | Display name |
| `email` | VARCHAR | Unique |
| `image` | VARCHAR | Avatar URL |
| `created_at` | TIMESTAMP | Auto-set |

#### `knowledge_source`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key |
| `user_email` | VARCHAR | Owner reference |
| `type` | ENUM | `website` \| `upload` \| `text` \| `docs` |
| `name` | VARCHAR | Display name |
| `status` | ENUM | `active` \| `training` \| `error` \| `excluded` |
| `source_url` | VARCHAR | URL (for website type) |
| `content` | TEXT | Scraped / raw content |
| `meta_data` | JSONB | Flexible metadata |

#### `sections`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key |
| `user_email` | VARCHAR | Owner reference |
| `name` | VARCHAR | Section display name |
| `description` | TEXT | Context for the AI |
| `source_ids` | UUID[] | Linked knowledge sources |
| `tone` | ENUM | `strict` \| `neutral` \| `friendly` \| `empathetic` |
| `allowed_topics` | TEXT[] | Topics the bot may answer |
| `blocked_topics` | TEXT[] | Topics the bot must refuse |
| `status` | ENUM | `active` \| `draft` |

#### `conversation`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key |
| `visitor_ip` | VARCHAR | Visitor's IP address |
| `name` | VARCHAR | Auto-generated (e.g. `#Visitor192`) |
| `chatbot_id` | VARCHAR | Widget/bot identifier |

#### `messages`
| Column | Type | Notes |
|--------|------|-------|
| `id` | UUID | Primary key |
| `conversation_id` | UUID | FK → conversation |
| `role` | VARCHAR | `user` \| `assistant` |
| `content` | TEXT | Message body |

---

## Embed Widget Integration

Embedding ServiceMate on any website takes **one line of code**:

```html
<!-- Add before closing </body> tag -->
<script
  src="https://your-domain.com/embed/widget.js"
  data-widget-id="YOUR_WIDGET_ID"
  data-token="YOUR_JWT_TOKEN"
  async
></script>
```

The widget:
- Renders a floating chat button in the bottom-right corner
- Expands into a full chat interface on click
- Automatically resizes its iframe via the `postMessage` API
- Authenticates all requests using a short-lived JWT token (2-hour expiry)
- Can be restricted to specific domains via the **Domain Allowlist** setting in the dashboard

### Generate an Embed Token

```bash
POST /api/widget/session
Content-Type: application/json

{
  "widgetId": "your-widget-uuid"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Set all environment variables in the Vercel project settings dashboard.

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t servicemate .
docker run -p 3000:3000 --env-file .env servicemate
```

### Environment Checklist Before Deploy

- [ ] `DATABASE_URL` points to production Neon database
- [ ] `SCALEKIT_REDIRECT_URI` updated to production domain
- [ ] `JWT_SECRET` is a strong, unique secret (min 32 chars)
- [ ] `GEMINI_API_KEY` has sufficient quota
- [ ] `ZENROWS_API_KEY` is active
- [ ] Run `npm run db:migrate` against production database

---

## NPM Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm start` | Start production server |
| `npm run db:generate` | Generate Drizzle migration files from schema |
| `npm run db:migrate` | Apply pending migrations to the database |
| `npm run db:push` | Push schema directly to DB (no migration file) |
| `npm run db:studio` | Open Drizzle Studio visual database browser |

---

<div align="center">

Built with Next.js, Google Gemini, and Scalekit

</div>
