'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Intermediate() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const techniques = [
    {
      id: 'few-shot',
      title: 'Few-Shot Learning',
      duration: '12 min',
      content: 'Provide a few examples of input-output pairs to help the AI understand the pattern. This technique dramatically improves consistency and accuracy.',
      tips: [
        'Include 2-5 diverse examples',
        'Examples should cover edge cases',
        'Maintain consistent formatting',
        'Order examples from simple to complex',
      ],
    },
    {
      id: 'chain-of-thought',
      title: 'Chain of Thought Prompting',
      duration: '11 min',
      content: 'Ask the AI to explain its reasoning step-by-step. This improves accuracy for complex reasoning tasks and makes outputs more transparent.',
      tips: [
        'Use phrases like "Let\'s think step by step"',
        'Request intermediate reasoning steps',
        'Ask for verification of logic',
        'Great for math, logic, and analysis',
      ],
    },
    {
      id: 'role-based',
      title: 'Role-Based Prompting',
      duration: '9 min',
      content: 'Assign the AI a specific role or persona. This helps tailor the response style, expertise level, and tone to your needs.',
      tips: [
        'Be specific about the role',
        'Include relevant expertise level',
        'Define communication style',
        'Set boundaries for the role',
      ],
    },
    {
      id: 'structured-output',
      title: 'Structured Output Formats',
      duration: '10 min',
      content: 'Request specific output formats like JSON, CSV, or markdown. This makes it easier to parse and use the AI\'s response programmatically.',
      tips: [
        'Specify exact format (JSON, CSV, XML)',
        'Include schema or template',
        'Request field descriptions',
        'Validate against expected structure',
      ],
    },
    {
      id: 'decomposition',
      title: 'Prompt Decomposition',
      duration: '10 min',
      content: 'Break complex tasks into smaller, manageable sub-tasks. Sequential execution often produces better results than single complex prompts.',
      tips: [
        'Identify logical task boundaries',
        'Execute tasks in dependency order',
        'Use outputs from previous tasks',
        'Validate intermediate results',
      ],
    },
  ]

  const templates = [
    {
      name: 'Few-Shot Template',
      code: `# Examples:
Example 1:
Input: [example input]
Output: [example output]

Example 2:
Input: [example input]
Output: [example output]

# Now apply the same pattern to:
Input: [your actual input]
Output:`,
    },
    {
      name: 'Chain of Thought Template',
      code: `Let's think step by step:
1. First, I need to [identify the first step]
2. Then, [describe the next action]
3. Next, [continue the reasoning]
4. Finally, [conclude with the answer]

[Your actual question]`,
    },
    {
      name: 'Structured Output Template',
      code: `Generate the response in JSON format with the following structure:
{
  "field1": "description",
  "field2": "description",
  "field3": ["array", "of", "values"]
}

Task: [Your actual task]`,
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="absolute inset-0 bg-lime-glow opacity-10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card border border-lime/30 text-lime text-sm font-mono">
            Level 2 — Intermediate
          </div>
          <h1 className="text-5xl font-bold">
            <span className="text-foreground">Advanced </span>
            <span className="text-lime">Techniques</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore powerful prompting techniques that unlock the full potential of AI models. Learn methods used by professionals.
          </p>
        </div>

        {/* Techniques */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Prompting Techniques</h2>
          
          <div className="space-y-2">
            {techniques.map((tech) => (
              <div
                key={tech.id}
                className="border border-lime/20 rounded-lg overflow-hidden hover:border-lime/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === tech.id ? null : tech.id)}
                  className="w-full p-6 flex items-center gap-4 hover:bg-card-hover transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{tech.duration}</p>
                  </div>
                  <div className={`text-lime text-2xl transition-transform ${expandedId === tech.id ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </button>

                {expandedId === tech.id && (
                  <div className="bg-card-hover border-t border-lime/20 p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{tech.content}</p>
                    <div>
                      <p className="text-sm font-semibold text-lime mb-3">Key Tips:</p>
                      <ul className="space-y-2">
                        {tech.tips.map((tip, i) => (
                          <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                            <span className="text-lime">→</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Template Snippets */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Prompt Templates</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, i) => (
              <div key={i} className="bg-card border border-lime/20 rounded-lg overflow-hidden group hover:border-lime/50 transition-colors">
                <div className="p-4 border-b border-lime/20">
                  <h3 className="font-semibold text-foreground group-hover:text-lime transition-colors">{template.name}</h3>
                </div>
                <div className="p-4 bg-background/50">
                  <pre className="text-xs text-muted-foreground overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap break-words">
                    {template.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Patterns */}
        <div className="bg-card border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6">Common Patterns to Master</h2>
          
          <div className="space-y-6">
            {[
              {
                name: 'Iterative Refinement',
                desc: 'Start with a simple prompt and gradually refine based on outputs. This is how professionals improve results.',
              },
              {
                name: 'Negative Prompting',
                desc: 'Specify what you DON\'T want. Use phrases like "Avoid...", "Don\'t include...", or "Never mention..."',
              },
              {
                name: 'Constraint-Based',
                desc: 'Set clear boundaries: word limits, style requirements, technical level, target audience.',
              },
              {
                name: 'Context Window Management',
                desc: 'Be aware of token limits. Front-load important information, remove unnecessary details.',
              },
            ].map((pattern, i) => (
              <div key={i} className="flex gap-4 pb-6 border-b border-lime/10 last:border-b-0 last:pb-0">
                <div className="text-2xl text-lime flex-shrink-0">◆</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{pattern.name}</h3>
                  <p className="text-muted-foreground">{pattern.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshooting */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Troubleshooting Guide</h2>
          
          <div className="space-y-4">
            {[
              {
                problem: 'Output is too long',
                solution: 'Add word/token limits: "Provide a 100-word response" or "Keep it to 3 sentences"',
              },
              {
                problem: 'Response is too vague',
                solution: 'Add more specific examples and constraints. Use "Provide specific examples" or "Be concrete."',
              },
              {
                problem: 'Format is incorrect',
                solution: 'Provide a template or example of the exact format you need.',
              },
              {
                problem: 'Model misunderstands context',
                solution: 'Add a role assignment or reframe the question. Break complex tasks into steps.',
              },
              {
                problem: 'Inconsistent results',
                solution: 'Use few-shot examples to establish patterns. Lower the temperature if possible.',
              },
            ].map((item, i) => (
              <div key={i} className="border-l-2 border-lime bg-card-hover p-4 rounded-r-lg">
                <p className="text-lime font-semibold mb-2">❌ {item.problem}</p>
                <p className="text-muted-foreground">✓ {item.solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link
            href="/basics"
            className="px-6 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
          >
            ← Back to Basics
          </Link>
          <Link
            href="/advanced"
            className="px-6 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime"
          >
            Next: Advanced →
          </Link>
        </div>
      </div>
    </div>
  )
}
