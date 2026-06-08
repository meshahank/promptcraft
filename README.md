# PromptCraft — Complete Prompt Engineering Course

A modern, interactive dark-themed website for learning prompt engineering from basics to advanced techniques. Built with Next.js, React, and Tailwind CSS.

## 🎨 Design Features

- **Dark Theme**: Deep dark background (#0a0a0a) for reduced eye strain
- **Neon Lime Accent**: Vibrant #CCFF00 accent color for visual interest
- **Modern Typography**: DM Sans (body) and DM Mono (code) from Google Fonts
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Expandable sections, hover effects, animations
- **Accessibility**: Semantic HTML, proper ARIA labels, keyboard navigation

## 📚 Content Structure

### Pages

1. **Home** (`/`) - Landing page with course overview
2. **Basics** (`/basics`) - Level 1: Prompt Engineering Fundamentals
3. **Intermediate** (`/intermediate`) - Level 2: Advanced Techniques
4. **Advanced** (`/advanced`) - Level 3: Expert-Level Prompting
5. **Techniques** (`/techniques`) - Specialized techniques and patterns
6. **Resources** (`/resources`) - Learning resources, tools, and references

### Content Covered

#### Basics
- What is Prompt Engineering
- Anatomy of an Effective Prompt
- Writing Clear Instructions
- Setting Proper Context
- Good vs Bad prompt examples

#### Intermediate
- Few-Shot Learning
- Chain of Thought Prompting
- Role-Based Prompting
- Structured Output Formats
- Prompt Decomposition

#### Advanced
- Advanced System Prompts
- Multi-Step Prompt Chains
- Reasoning & Agent Patterns
- Domain-Specific Optimization
- Meta-Prompting & Self-Optimization

#### Techniques
- Prompt Injection Resistance
- Output Validation & Verification
- Temperature & Sampling Control
- Token Budget Optimization
- Retrieval Augmented Generation (RAG)
- Batch Processing & Scaling

#### Resources
- Learning materials and communities
- Real-world use cases
- Best practices checklist
- FAQ section
- Prompt templates library

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Fonts**: Google Fonts (DM Sans, DM Mono)
- **Animations**: CSS animations + Tailwind utilities
- **Components**: React functional components with hooks
- **State Management**: React hooks (useState)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── (pages)/                 # Grouped routes for pages with navigation
│   │   ├── basics/page.tsx
│   │   ├── intermediate/page.tsx
│   │   ├── advanced/page.tsx
│   │   ├── techniques/page.tsx
│   │   ├── resources/page.tsx
│   │   └── layout.tsx
│   ├── globals.css              # Global styles and animations
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   └── Navigation.tsx           # Navigation bar component
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🎯 Key Features

- **Expandable Sections**: Click to expand/collapse lesson content
- **Code Examples**: Side-by-side weak vs strong prompt examples
- **Template Snippets**: Copy-ready prompt templates
- **Interactive Checklists**: Best practices checklist
- **Responsive Navigation**: Mobile-friendly hamburger menu
- **Smooth Animations**: Fade-in effects and transitions
- **Color-Coded Content**: Visual hierarchy with lime accents

## 🌈 Color System

- **Background**: #0a0a0a (near black)
- **Card Background**: #1a1a1a (dark gray)
- **Card Hover**: #242424 (lighter gray)
- **Border**: #2a2a2a (border gray)
- **Text Primary**: #ffffff (white)
- **Text Muted**: #999999 (gray)
- **Accent**: #CCFF00 (neon lime)
- **Accent Dark**: #b3e600 (darker lime)
- **Accent Light**: #e6ff66 (lighter lime)

## 📝 Customization

### Adding New Sections

1. Create new page in `app/(pages)/[section]/page.tsx`
2. Add link to navigation in `components/Navigation.tsx`
3. Update color tokens in `tailwind.config.js` if needed
4. Add global animations to `app/globals.css`

### Modifying Colors

Edit `tailwind.config.js` in the `colors` object under `theme.extend`:

```js
colors: {
  background: '#0a0a0a',
  lime: '#CCFF00',
  // ... add more colors
}
```

### Changing Fonts

Update font imports in `app/layout.tsx`:

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google'
```

## 🚀 Deployment

Deploy to Vercel (recommended):

```bash
npm i -g vercel
vercel
```

Or use any Node.js hosting provider.

## 📄 License

MIT

## 🤝 Contributing

Feel free to fork and submit pull requests for improvements!

---

**PromptCraft** - Master the art of AI communication 🚀
