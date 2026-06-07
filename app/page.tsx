'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="absolute inset-0 bg-lime-glow opacity-20 blur-3xl" />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 rounded-full bg-card border border-lime/30 text-lime text-sm font-mono">
                  ✦ Master AI Communication
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  <span className="text-foreground">Craft Perfect</span>
                  <br />
                  <span className="text-lime animate-glow">Prompts</span>
                </h1>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                PromptCraft is your complete guide to mastering prompt engineering. From basic fundamentals to advanced techniques, learn how to communicate effectively with AI models.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/basics"
                  className="px-8 py-3 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all hover:shadow-lg glow-lime"
                >
                  Start Learning
                </Link>
                <Link
                  href="/resources"
                  className="px-8 py-3 bg-card border border-lime/50 text-lime font-semibold rounded-lg hover:bg-card-hover transition-all"
                >
                  View Resources
                </Link>
              </div>

              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-lime">7+</div>
                  <div className="text-sm text-muted-foreground">Skill Levels</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime">100+</div>
                  <div className="text-sm text-muted-foreground">Examples & Tips</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-lime">∞</div>
                  <div className="text-sm text-muted-foreground">Possibilities</div>
                </div>
              </div>
            </div>

            {/* Right - Terminal */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-card border border-lime/20 rounded-xl overflow-hidden glow-lime-sm">
                <div className="bg-card-hover border-b border-lime/10 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lime/50" />
                  <div className="w-3 h-3 rounded-full bg-lime/30" />
                  <div className="w-3 h-3 rounded-full bg-lime/10" />
                  <span className="ml-auto text-xs text-muted-foreground font-mono">prompt.craft</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-4">
                  <div className="text-muted-foreground">
                    <span className="text-lime">❯</span> Welcome to PromptCraft
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-lime">❯</span> <span className="text-lime-light">You have access to comprehensive</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-lime">❯</span> prompt engineering knowledge
                  </div>
                  <div className="mt-6 border-t border-lime/10 pt-4">
                    <div className="text-lime-light">$ Learning path initialized...</div>
                    <div className="text-muted-foreground mt-2">Ready to explore prompts?</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            What You&apos;ll Master
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '◆',
                title: 'Prompt Foundations',
                desc: 'Learn the fundamentals of crafting effective AI prompts from scratch',
              },
              {
                icon: '◆',
                title: 'Advanced Techniques',
                desc: 'Master prompt chaining, few-shot learning, and system prompts',
              },
              {
                icon: '◆',
                title: 'Real-World Applications',
                desc: 'Apply techniques to solve practical problems with AI models',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-lime/20 rounded-lg hover:border-lime/50 hover:bg-card-hover transition-all group cursor-pointer"
              >
                <div className="text-2xl text-lime mb-3 group-hover:animate-pulse">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Master Prompt Engineering?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start with the basics and progress to advanced techniques at your own pace.
          </p>
          <Link
            href="/basics"
            className="inline-block px-8 py-4 bg-lime text-background font-semibold rounded-lg hover:bg-lime-light transition-all glow-lime text-lg"
          >
            Begin Learning Path →
          </Link>
        </div>
      </div>
    </div>
  )
}
