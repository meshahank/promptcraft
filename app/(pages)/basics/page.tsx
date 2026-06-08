'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Basics() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const lessons = [
    {
      id: 'fundamentals',
      title: 'What is Prompt Engineering?',
      duration: '8 min',
      content: 'Prompt engineering is the art and science of crafting instructions to effectively communicate with AI models. It involves understanding how AI interprets language, structuring requests clearly, and iterating based on results.',
      concepts: ['Context', 'Clarity', 'Specificity', 'Instruction Structure'],
    },
    {
      id: 'structure',
      title: 'Anatomy of an Effective Prompt',
      duration: '10 min',
      content: 'Every good prompt contains key components: context, instruction, format requirements, and constraints. Learn how to structure these elements to get better results.',
      concepts: ['Context Setting', 'Clear Instructions', 'Format Specification', 'Constraints & Boundaries'],
    },
    {
      id: 'clarity',
      title: 'Writing Clear Instructions',
      duration: '7 min',
      content: 'Clarity is the foundation of good prompts. Use specific vocabulary, avoid ambiguity, and be explicit about what you want the AI to do.',
      concepts: ['Vocabulary', 'Specificity', 'Explicit Requests', 'Avoiding Ambiguity'],
    },
    {
      id: 'context',
      title: 'Setting Proper Context',
      duration: '9 min',
      content: 'Context helps the AI understand the broader situation and requirements. Provide relevant background, examples, and constraints to guide the model.',
      concepts: ['Background Information', 'Use Cases', 'Examples', 'Role-Playing'],
    },
  ]

  const examples = [
    {
      title: 'Weak vs Strong Prompt',
      weak: 'Write about AI',
      strong: 'Write a 200-word technical explanation of how transformer models work, suitable for someone with basic programming knowledge.',
      why: 'The strong prompt specifies length, technical level, audience, and format, making the output more predictable and useful.',
    },
    {
      title: 'Specificity Matters',
      weak: 'Make a recipe',
      strong: 'Create a quick vegetarian pasta recipe under 30 minutes with ingredients commonly found in a typical grocery store.',
      why: 'Constraints on time, diet, and ingredient availability produce more relevant and practical results.',
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="absolute inset-0 bg-lime-glow opacity-10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card border border-lime/30 text-lime text-sm font-mono">
            Level 1 — Foundations
          </div>
          <h1 className="text-5xl font-bold">
            <span className="text-foreground">Prompt Engineering </span>
            <span className="text-lime">Basics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Master the fundamental principles of crafting effective AI prompts. Learn the essential techniques that form the foundation for more advanced skills.
          </p>
        </div>

        {/* Learning Path */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Learning Path</h2>
          
          <div className="space-y-2">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="border border-lime/20 rounded-lg overflow-hidden hover:border-lime/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === lesson.id ? null : lesson.id)}
                  className="w-full p-6 flex items-center gap-4 hover:bg-card-hover transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{lesson.duration}</p>
                  </div>
                  <div className={`text-lime text-2xl transition-transform ${expandedId === lesson.id ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </button>

                {expandedId === lesson.id && (
                  <div className="bg-card-hover border-t border-lime/20 p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{lesson.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {lesson.concepts.map((concept) => (
                        <span key={concept} className="px-3 py-1 bg-card border border-lime/30 text-lime text-xs font-mono rounded">
                          {concept}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Good vs Bad Examples</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {examples.map((example, i) => (
              <div key={i} className="bg-card border border-lime/20 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-lime">{example.title}</h3>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">❌ Weak Prompt</p>
                    <div className="bg-background/50 border border-lime/10 rounded p-3 text-muted-foreground italic">
                      {example.weak}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-lime mb-2 font-mono">✓ Strong Prompt</p>
                    <div className="bg-background/50 border border-lime/30 rounded p-3 text-lime-light">
                      {example.strong}
                    </div>
                  </div>

                  <div className="border-t border-lime/20 pt-4">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-mono">Why It Works</p>
                    <p className="text-sm text-muted-foreground">{example.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-card border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6">Quick Tips for Better Prompts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Be Specific', desc: 'The more details you provide, the better the AI can tailor its response.' },
              { title: 'State the Role', desc: 'Tell the AI what role to play: "Act as a technical writer" or "Respond as an expert."' },
              { title: 'Provide Context', desc: 'Give background information and examples to guide the AI.' },
              { title: 'Specify Format', desc: 'Request output in a specific format: lists, paragraphs, code, JSON, etc.' },
              { title: 'Set Constraints', desc: 'Use word limits, complexity levels, or other boundaries.' },
              { title: 'Iterate & Refine', desc: 'Refine your prompts based on responses to improve results.' },
            ].map((tip, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-2xl text-lime flex-shrink-0">◆</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link
            href="/"
            className="px-6 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
          >
            ← Back Home
          </Link>
          <Link
            href="/intermediate"
            className="px-6 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime"
          >
            Next: Intermediate →
          </Link>
        </div>
      </div>
    </div>
  )
}
