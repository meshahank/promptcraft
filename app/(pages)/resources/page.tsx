'use client'

import Link from 'next/link'

export default function Resources() {
  const resources = [
    {
      category: 'Learning Materials',
      items: [
        { name: 'OpenAI Prompt Engineering Guide', desc: 'Official guide with strategies and tactics' },
        { name: 'Anthropic Claude Documentation', desc: 'Best practices for effective prompting' },
        { name: 'Papers & Research', desc: 'Chain-of-Thought, Few-Shot Learning, etc.' },
        { name: 'Video Tutorials', desc: 'Step-by-step prompting demonstrations' },
      ],
    },
    {
      category: 'Tools & Platforms',
      items: [
        { name: 'OpenAI Playground', desc: 'Experiment with prompts in real-time' },
        { name: 'Claude Web Interface', desc: 'Interactive prompting and testing' },
        { name: 'LangChain', desc: 'Framework for building prompt applications' },
        { name: 'Prompt Engineering Frameworks', desc: 'Libraries for managing prompt templates' },
      ],
    },
    {
      category: 'Communities & Forums',
      items: [
        { name: 'r/PromptEngineering', desc: 'Reddit community with thousands of examples' },
        { name: 'Discord Communities', desc: 'Real-time discussions with practitioners' },
        { name: 'Twitter & LinkedIn', desc: 'Follow experts sharing tips and insights' },
        { name: 'GitHub Collections', desc: 'Open-source prompt repositories and tools' },
      ],
    },
  ]

  const useCases = [
    {
      title: 'Content Creation',
      description: 'Generate blog posts, social media content, and marketing copy',
      prompts: [
        'Article writing with specific tone and audience',
        'Social media thread generation',
        'Email marketing campaigns',
      ],
    },
    {
      title: 'Code Development',
      description: 'Generate, review, and optimize code',
      prompts: [
        'Function implementation from specifications',
        'Code review and refactoring suggestions',
        'Bug detection and fixing',
      ],
    },
    {
      title: 'Data Analysis',
      description: 'Extract insights and patterns from data',
      prompts: [
        'Trend analysis from datasets',
        'Anomaly detection patterns',
        'Data summarization and visualization',
      ],
    },
    {
      title: 'Customer Support',
      description: 'Automated helpful responses and escalation',
      prompts: [
        'FAQ answer generation',
        'Ticket prioritization',
        'Customer sentiment analysis',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="absolute inset-0 bg-lime-glow opacity-10 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-card border border-lime/30 text-lime text-sm font-mono">
            Learning Resources
          </div>
          <h1 className="text-5xl font-bold">
            <span className="text-foreground">Resources & </span>
            <span className="text-lime">References</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Curated collection of tools, communities, and references to support your prompt engineering journey.
          </p>
        </div>

        {/* Resource Collections */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Learning Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((section, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-xl font-semibold text-lime">{section.category}</h3>
                <div className="space-y-3">
                  {section.items.map((item, j) => (
                    <div key={j} className="bg-card border border-lime/20 rounded-lg p-4 hover:border-lime/50 transition-colors">
                      <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases & Applications */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Real-World Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, i) => (
              <div key={i} className="bg-card border border-lime/20 rounded-lg overflow-hidden hover:border-lime/50 transition-colors">
                <div className="p-6 border-b border-lime/20">
                  <h3 className="text-lg font-semibold text-lime mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </div>
                <div className="p-6 bg-background/50 space-y-2">
                  {useCase.prompts.map((prompt, j) => (
                    <div key={j} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-lime">→</span>
                      <span>{prompt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Practices Summary */}
        <div className="bg-card border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6">Quick Reference: Best Practices</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '◆', title: 'Be Specific', desc: 'Add details, examples, and constraints' },
              { emoji: '◆', title: 'Provide Context', desc: 'Set the scene and give background' },
              { emoji: '◆', title: 'Ask for Format', desc: 'Specify exact output structure' },
              { emoji: '◆', title: 'Use Examples', desc: 'Show patterns with few-shot learning' },
              { emoji: '◆', title: 'Set Boundaries', desc: 'Define limits and constraints' },
              { emoji: '◆', title: 'Iterate & Refine', desc: 'Improve based on results' },
            ].map((practice, i) => (
              <div key={i} className="bg-background/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl text-lime">{practice.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{practice.title}</h4>
                    <p className="text-sm text-muted-foreground">{practice.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to master prompt engineering?',
                a: 'Basics take a few hours. Intermediate skills: 1-2 weeks. Advanced mastery: months of practice. Everyone progresses at their own pace.',
              },
              {
                q: 'Do I need coding skills?',
                a: 'No! Prompt engineering can be done through UI interfaces. Coding helps for integration and automation, but is not required.',
              },
              {
                q: 'Which AI model should I learn with?',
                a: 'Start with whichever is most accessible to you. Principles transfer across models. Popular choices: ChatGPT, Claude, Gemini.',
              },
              {
                q: 'How do I know if my prompt is good?',
                a: 'Test it! See if the outputs are relevant, accurate, and in the desired format. Iterate based on results.',
              },
              {
                q: 'Can I use these techniques for any AI model?',
                a: 'Yes, most principles are universal. Some models may respond differently—experiment and adapt.',
              },
            ].map((faq, i) => (
              <div key={i} className="border border-lime/20 bg-card rounded-lg p-6 hover:border-lime/50 transition-colors">
                <h3 className="text-lg font-semibold text-lime mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prompt Library */}
        <div className="bg-card border border-lime/30 rounded-lg p-8 mb-20">
          <h2 className="text-2xl font-bold mb-6">Starter Prompt Templates Library</h2>
          
          <div className="space-y-4">
            {[
              {
                name: 'General Q&A',
                template: 'Question: [your question]\nContext: [relevant background]\nFormat: [desired output format]\nConstraints: [any limitations]',
              },
              {
                name: 'Content Generation',
                template: 'Generate [type of content]\nTone: [desired tone]\nAudience: [target audience]\nLength: [approximate length]\nInclusions: [what to include]',
              },
              {
                name: 'Analysis Task',
                template: 'Analyze the following: [content]\nFocus on: [specific aspects]\nProvide: [type of analysis]\nFormat: [bullet points/prose/etc]',
              },
              {
                name: 'Code Generation',
                template: 'Write [language] code to:\n[describe the task]\nRequirements:\n[specific requirements]\nReturn: [function/class/etc]',
              },
            ].map((lib, i) => (
              <div key={i} className="bg-background/50 border border-lime/20 rounded-lg p-4">
                <h3 className="font-semibold text-lime mb-3">{lib.name}</h3>
                <pre className="text-xs text-muted-foreground font-mono whitespace-pre-wrap break-words">
                  {lib.template}
                </pre>
              </div>
            ))}
          </div>
        </div>

        {/* Congratulations */}
        <div className="bg-lime/5 border-2 border-lime rounded-lg p-12 text-center mb-20">
          <div className="text-5xl text-lime mb-4 animate-pulse">◆</div>
          <h2 className="text-3xl font-bold text-foreground mb-4">You&apos;ve Completed the Course!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            You now have comprehensive knowledge of prompt engineering from basics to advanced techniques. The next step is practice—apply these techniques to your own projects and keep refining your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="px-8 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime"
            >
              Back to Home
            </Link>
            <Link
              href="/basics"
              className="px-8 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
            >
              Review Basics
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link
            href="/techniques"
            className="px-6 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
          >
            ← Back to Techniques
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime"
          >
            Start Over →
          </Link>
        </div>
      </div>
    </div>
  )
}
