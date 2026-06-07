'use client'

import Link from 'next/link'

export default function Techniques() {
  const techniques = [
    {
      name: 'Prompt Injection Resistance',
      desc: 'Protect against adversarial inputs that try to override your instructions.',
      tips: [
        'Use clear delimiters for different input types',
        'Validate and sanitize user inputs',
        'Use secondary models to verify output safety',
        'Implement strict constraints in system prompts',
      ],
    },
    {
      name: 'Output Validation & Verification',
      desc: 'Ensure AI outputs meet quality standards before use.',
      tips: [
        'Define clear acceptance criteria',
        'Use automated validation checks',
        'Implement human-in-the-loop verification',
        'Log all validation failures for analysis',
      ],
    },
    {
      name: 'Temperature & Sampling Control',
      desc: 'Adjust randomness for different use cases.',
      tips: [
        'Low temp (0-0.3): factual, consistent, deterministic',
        'Medium temp (0.5-0.7): balanced creativity and consistency',
        'High temp (0.8-1.0): creative, diverse, unpredictable',
        'Match temperature to task requirements',
      ],
    },
    {
      name: 'Token Budget Optimization',
      desc: 'Maximize value while staying within token limits.',
      tips: [
        'Front-load critical information',
        'Remove redundant details',
        'Use abbreviations and shorthand',
        'Monitor token usage patterns',
      ],
    },
    {
      name: 'Retrieval Augmented Generation (RAG)',
      desc: 'Combine prompts with external knowledge bases.',
      tips: [
        'Retrieve relevant documents first',
        'Include retrieved context in prompt',
        'Rank retrieved results by relevance',
        'Update knowledge base regularly',
      ],
    },
    {
      name: 'Batch Processing & Scaling',
      desc: 'Efficiently process multiple prompts in parallel.',
      tips: [
        'Group similar tasks together',
        'Use batch APIs for cost efficiency',
        'Implement error handling for failed items',
        'Monitor and track batch performance',
      ],
    },
  ]

  const advancedPatterns = [
    {
      name: 'Constitutional AI',
      description: 'Align AI responses with a constitution of principles and values.',
      benefits: 'Consistent, principled outputs that align with your values.',
    },
    {
      name: 'Self-Critique & Refinement',
      description: 'Have the AI critique its own output and refine it.',
      benefits: 'Higher quality outputs with multiple iterations of improvement.',
    },
    {
      name: 'Hierarchical Prompting',
      description: 'Use multiple levels of prompts with different specificity.',
      benefits: 'Better organization, easier maintenance, improved clarity.',
    },
    {
      name: 'Ensemble Methods',
      description: 'Combine outputs from multiple prompt variants.',
      benefits: 'More robust results, reduced variance, better coverage.',
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="absolute inset-0 bg-lime-glow opacity-10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card border border-lime/30 text-lime text-sm font-mono">
            Specialized Techniques
          </div>
          <h1 className="text-5xl font-bold">
            <span className="text-foreground">Specialized </span>
            <span className="text-lime">Techniques</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Deep dive into specialized prompting techniques for specific challenges and advanced use cases.
          </p>
        </div>

        {/* Core Techniques */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Core Specialized Techniques</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((tech, i) => (
              <div key={i} className="bg-card border border-lime/20 rounded-lg p-6 hover:border-lime/50 hover:bg-card-hover transition-colors">
                <h3 className="text-lg font-semibold text-lime mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tech.desc}</p>
                <ul className="space-y-2">
                  {tech.tips.map((tip, j) => (
                    <li key={j} className="text-muted-foreground text-xs flex gap-2">
                      <span className="text-lime">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Patterns */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Advanced Implementation Patterns</h2>
          
          <div className="space-y-6">
            {advancedPatterns.map((pattern, i) => (
              <div key={i} className="border-l-4 border-lime bg-card/50 p-6 rounded-r-lg hover:bg-card transition-colors">
                <h3 className="text-lg font-semibold text-lime mb-2">{pattern.name}</h3>
                <p className="text-muted-foreground mb-3">{pattern.description}</p>
                <p className="text-sm text-lime-light font-medium">✓ {pattern.benefits}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Engineering Checklist */}
        <div className="bg-card border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-8">Prompt Engineering Checklist</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-lime mb-4">Before You Prompt</h3>
              <ul className="space-y-3">
                {[
                  'Define your objective clearly',
                  'Identify your target audience',
                  'Consider edge cases and constraints',
                  'Plan output format and structure',
                  'Prepare examples if needed',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <input type="checkbox" className="w-4 h-4 rounded border-lime accent-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-lime mb-4">After You Prompt</h3>
              <ul className="space-y-3">
                {[
                  'Evaluate output quality',
                  'Check for accuracy and relevance',
                  'Verify format and structure',
                  'Test edge cases',
                  'Document learnings and refine',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm">
                    <input type="checkbox" className="w-4 h-4 rounded border-lime accent-lime" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Common Pitfalls to Avoid</h2>
          
          <div className="space-y-4">
            {[
              {
                pitfall: 'Over-engineering prompts',
                avoid: 'Keep prompts simple until complexity is actually needed',
              },
              {
                pitfall: 'Ignoring model limitations',
                avoid: 'Know your model\'s training data and capability boundaries',
              },
              {
                pitfall: 'Not testing edge cases',
                avoid: 'Always test with diverse inputs and problematic scenarios',
              },
              {
                pitfall: 'Assuming determinism',
                avoid: 'Always plan for variation and add validation steps',
              },
              {
                pitfall: 'Poor error handling',
                avoid: 'Anticipate failures and include fallback strategies',
              },
            ].map((item, i) => (
              <div key={i} className="border border-lime/20 bg-card-hover rounded-lg p-4 flex gap-4">
                <div className="text-2xl text-lime">⚠</div>
                <div>
                  <p className="font-semibold text-foreground mb-1">❌ {item.pitfall}</p>
                  <p className="text-muted-foreground text-sm">✓ {item.avoid}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-lime/10 border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6 text-lime">Next Steps</h2>
          
          <div className="space-y-4">
            <p className="text-muted-foreground">You now have a comprehensive understanding of prompt engineering. Here are your next steps:</p>
            
            <ol className="space-y-3 pl-4">
              {[
                'Practice with your own use cases and document results',
                'Join communities and share your prompt patterns',
                'Keep up with new techniques and model updates',
                'Build tools and systems around your best prompts',
                'Contribute to the field by sharing your learnings',
              ].map((step, i) => (
                <li key={i} className="text-muted-foreground flex gap-3">
                  <span className="text-lime font-bold">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link
            href="/advanced"
            className="px-6 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
          >
            ← Back to Advanced
          </Link>
          <Link
            href="/resources"
            className="px-6 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime"
          >
            Next: Resources →
          </Link>
        </div>
      </div>
    </div>
  )
}
