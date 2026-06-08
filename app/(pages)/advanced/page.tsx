'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Advanced() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const advancedTopics = [
    {
      id: 'system-prompts',
      title: 'Advanced System Prompts',
      duration: '14 min',
      content: 'Master system prompts that control model behavior at a fundamental level. Learn to set personality, constraints, and operational parameters.',
      keyPoints: [
        'Define model personality and behavior',
        'Set hard constraints and boundaries',
        'Control verbosity and output style',
        'Override default behaviors',
        'Establish special rules and exceptions',
      ],
    },
    {
      id: 'prompt-chains',
      title: 'Multi-Step Prompt Chains',
      duration: '16 min',
      content: 'Create sophisticated chains where each step builds on previous outputs. Learn dependencies, error handling, and orchestration patterns.',
      keyPoints: [
        'Design task pipelines with dependencies',
        'Handle intermediate validation',
        'Implement error recovery strategies',
        'Optimize for context reuse',
        'Manage state across steps',
      ],
    },
    {
      id: 'reasoning-agents',
      title: 'Reasoning & Agent Patterns',
      duration: '18 min',
      content: 'Implement autonomous agent patterns where the AI decides actions, verifies them, and adapts. Perfect for complex problem-solving.',
      keyPoints: [
        'Implement iterative reasoning loops',
        'Add verification and validation steps',
        'Create decision frameworks',
        'Build adaptive exploration strategies',
        'Implement tool use orchestration',
      ],
    },
    {
      id: 'domain-specific',
      title: 'Domain-Specific Optimization',
      duration: '15 min',
      content: 'Tailor prompts for specific domains like coding, data analysis, creative writing, or technical documentation. Learn domain conventions.',
      keyPoints: [
        'Coding: syntax highlighting, error handling',
        'Analysis: data structure, methodology',
        'Creative: tone, audience, constraints',
        'Technical: precision, accuracy, citations',
        'Domain-specific terminology and conventions',
      ],
    },
    {
      id: 'meta-prompting',
      title: 'Meta-Prompting & Self-Optimization',
      duration: '17 min',
      content: 'Create prompts that analyze and improve themselves. Implement feedback loops and progressive refinement systems.',
      keyPoints: [
        'Self-evaluation mechanisms',
        'Quality assessment frameworks',
        'Progressive refinement loops',
        'Automated prompt optimization',
        'A/B testing patterns',
      ],
    },
  ]

  const advancedPatterns = [
    {
      name: 'Recursive Decomposition',
      code: `# Meta-instruction: If task is too complex, break it down recursively
If complexity > threshold:
  1. Identify sub-components
  2. Solve each recursively
  3. Combine results
  4. Verify solution

Task: [Complex problem]
Approach: Decompose as needed`,
    },
    {
      name: 'Verification Loop',
      code: `Task: [Your objective]

Step 1: Generate initial solution
Step 2: Verify against criteria:
  - Criterion A: [verify]
  - Criterion B: [verify]
Step 3: If fails, identify issues
Step 4: Refine and re-verify
Step 5: Return verified solution`,
    },
    {
      name: 'Uncertainty Quantification',
      code: `For your response:
1. Provide the answer
2. Rate confidence: [0-100]%
3. List key assumptions
4. Identify information gaps
5. Suggest verification methods

When confidence < 70%:
  - Explain why confidence is low
  - Propose ways to improve it`,
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="absolute inset-0 bg-lime-glow opacity-10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card border border-lime/30 text-lime text-sm font-mono">
            Level 3 — Advanced
          </div>
          <h1 className="text-5xl font-bold">
            <span className="text-foreground">Expert-Level </span>
            <span className="text-lime">Prompting</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Unlock the full potential of AI systems. Master advanced patterns used by researchers and practitioners at leading companies.
          </p>
        </div>

        {/* Advanced Topics */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Advanced Topics</h2>
          
          <div className="space-y-2">
            {advancedTopics.map((topic) => (
              <div
                key={topic.id}
                className="border border-lime/20 rounded-lg overflow-hidden hover:border-lime/50 transition-colors"
              >
                <button
                  onClick={() => setExpandedId(expandedId === topic.id ? null : topic.id)}
                  className="w-full p-6 flex items-center gap-4 hover:bg-card-hover transition-colors text-left"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{topic.duration}</p>
                  </div>
                  <div className={`text-lime text-2xl transition-transform ${expandedId === topic.id ? 'rotate-180' : ''}`}>
                    ▼
                  </div>
                </button>

                {expandedId === topic.id && (
                  <div className="bg-card-hover border-t border-lime/20 p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{topic.content}</p>
                    <div>
                      <p className="text-sm font-semibold text-lime mb-3">Key Learning Points:</p>
                      <ul className="space-y-2">
                        {topic.keyPoints.map((point, i) => (
                          <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                            <span className="text-lime">▸</span>
                            <span>{point}</span>
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

        {/* Advanced Patterns */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Advanced Prompt Patterns</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedPatterns.map((pattern, i) => (
              <div key={i} className="bg-card border border-lime/20 rounded-lg overflow-hidden group hover:border-lime/50 transition-colors">
                <div className="p-4 border-b border-lime/20">
                  <h3 className="font-semibold text-foreground group-hover:text-lime transition-colors">{pattern.name}</h3>
                </div>
                <div className="p-4 bg-background/50">
                  <pre className="text-xs text-muted-foreground overflow-x-auto font-mono leading-relaxed whitespace-pre-wrap break-words">
                    {pattern.code}
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-card border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6">Advanced Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-lime mb-4">Performance Optimization</h3>
              <ul className="space-y-3">
                {[
                  'Minimize tokens while preserving information',
                  'Cache system prompts and context',
                  'Use appropriate model tiers for tasks',
                  'Implement result validation early',
                  'Monitor and log all interactions',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-lime">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-lime mb-4">Reliability & Safety</h3>
              <ul className="space-y-3">
                {[
                  'Implement guardrails and constraints',
                  'Validate outputs before use',
                  'Handle edge cases explicitly',
                  'Set clear boundaries for model',
                  'Include fail-safe mechanisms',
                ].map((item, i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground text-sm">
                    <span className="text-lime">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Real-World Applications */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Real-World Application Domains</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Software Development',
                examples: ['Code generation', 'Bug fixing', 'Architecture design', 'Documentation'],
              },
              {
                title: 'Data Analysis',
                examples: ['Data interpretation', 'Trend analysis', 'Anomaly detection', 'Visualization'],
              },
              {
                title: 'Content Creation',
                examples: ['Blog writing', 'Video scripts', 'Social media', 'Technical writing'],
              },
              {
                title: 'Business Intelligence',
                examples: ['Market analysis', 'Competitive research', 'Strategy development', 'Reporting'],
              },
            ].map((domain, i) => (
              <div key={i} className="bg-card border border-lime/20 rounded-lg p-6 hover:border-lime/50 transition-colors">
                <h3 className="text-lg font-semibold text-lime mb-4">{domain.title}</h3>
                <ul className="space-y-2">
                  {domain.examples.map((example, j) => (
                    <li key={j} className="text-muted-foreground flex gap-2 text-sm">
                      <span className="text-lime">→</span>
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link
            href="/intermediate"
            className="px-6 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
          >
            ← Back to Intermediate
          </Link>
          <Link
            href="/techniques"
            className="px-6 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime"
          >
            Next: Techniques →
          </Link>
        </div>
      </div>
    </div>
  )
}
