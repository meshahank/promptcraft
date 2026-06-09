'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="pt-32">
        <div className="absolute inset-0 -z-10">
          <div
            style={{
              background:
                'radial-gradient(ellipse 800px 600px at 80% 50%, rgba(232,87,42,0.08) 0%, transparent 70%), radial-gradient(ellipse 600px 400px at 20% 80%, rgba(42,122,232,0.07) 0%, transparent 60%), radial-gradient(ellipse 500px 500px at 60% 10%, rgba(247,201,75,0.07) 0%, transparent 60%)',
              position: 'absolute',
              inset: 0,
            }}
          />
          <div
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,14,12,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15,14,12,0.12) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
              position: 'absolute',
              inset: 0,
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="badge" style={{ animation: 'fadeSlideDown 0.6s ease both' }}>
                <span className="badge-dot" />
                Master AI Communication
              </div>

              <h1
                className="section-title"
                style={{ animation: 'fadeSlideDown 0.6s 0.1s ease both' }}
              >
                Craft Perfect <span className="text-accent">Prompts</span>
              </h1>

              <p
                className="section-sub mb-8"
                style={{ animation: 'fadeSlideDown 0.6s 0.2s ease both' }}
              >
                Learn prompt engineering from fundamentals to advanced techniques. Master the art of communicating with AI models to unlock their full potential.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 mb-10"
                style={{ animation: 'fadeSlideDown 0.6s 0.3s ease both' }}
              >
                <Link href="/basics" className="btn btn-primary">
                  Start Learning
                </Link>
                <Link href="/resources" className="btn btn-secondary">
                  Explore Resources
                </Link>
              </div>

              <div
                className="flex gap-8"
                style={{ animation: 'fadeSlideDown 0.6s 0.4s ease both' }}
              >
                <div>
                  <div className="hero-stat-num">7+</div>
                  <div className="hero-stat-label">Difficulty Levels</div>
                </div>
                <div>
                  <div className="hero-stat-num">100+</div>
                  <div className="hero-stat-label">Techniques & Tips</div>
                </div>
                <div>
                  <div className="hero-stat-num">∞</div>
                  <div className="hero-stat-label">Possibilities</div>
                </div>
              </div>
            </div>

            {/* Right - Terminal */}
            <div
              className="hero-visual"
              style={{ animation: 'fadeSlideLeft 0.7s 0.2s ease both' }}
            >
              <div className="terminal">
                <div className="terminal-bar">
                  <div className="terminal-dot terminal-dot-r" />
                  <div className="terminal-dot terminal-dot-y" />
                  <div className="terminal-dot terminal-dot-g" />
                  <div className="terminal-title">prompt.craft</div>
                </div>
                <div className="terminal-body">
                  <div className="t-comment">
                    {'// Welcome to PromptCraft'}
                  </div>
                  <div className="t-prompt">❯</div>
                  <div className="t-text">Master the art of prompting</div>
                  <div className="t-comment mt-4">{'// Start your learning journey'}</div>
                  <div className="t-prompt">❯</div>
                  <div className="t-key">const</div>
                  <div className="t-text">
                    {' '}prompt <span className="t-key">=</span> <span className="t-val">powerful()</span>
                  </div>
                  <div className="t-output">
                    → Learning path initialized...
                  </div>
                  <div className="t-prompt mt-2">❯ <span className="cursor" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is PE Section */}
      <section id="what">
        <div className="container">
          <span className="section-label">What is Prompt Engineering?</span>
          <h2 className="section-title">
            The Art of Asking the Right Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="card">
              <p className="text-lg text-ink2 mb-6 leading-relaxed">
                Prompt engineering is the practice of crafting inputs for AI models to produce desired outputs. It's about understanding how to communicate with AI systems effectively.
              </p>
              <div className="space-y-4">
                {[
                  'Master clarity and specificity',
                  'Learn context and structure',
                  'Understand token optimization',
                  'Explore advanced techniques',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="check">✓</div>
                    <div>
                      <p className="text-base text-ink2">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-paper2 border border-border rounded-2xl p-8">
              <p className="font-display font-bold text-lg mb-4">Think of it like this:</p>
              <div className="space-y-4">
                {[
                  { title: 'Vague Request', text: '"Tell me about AI"' },
                  { title: 'Clear Prompt', text: '"Explain machine learning in 3 paragraphs for beginners"' },
                  { title: 'Expert Prompt', text: '"Create a comprehensive guide on ML fundamentals, include algorithms, examples, and best practices"' },
                ].map((item, i) => (
                  <div key={i} className="text-sm">
                    <p className="font-semibold text-ink mb-1">{item.title}</p>
                    <p className="text-ink2 italic">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <div className="container">
          <span className="section-label">Your Learning Path</span>
          <h2 className="section-title">From Beginner to Expert</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                week: 'Level 1',
                title: 'Basics',
                desc: 'Foundations of prompt structure and clarity',
              },
              {
                week: 'Level 2',
                title: 'Intermediate',
                desc: 'Advanced techniques and patterns',
              },
              {
                week: 'Level 3',
                title: 'Advanced',
                desc: 'Complex reasoning and optimization',
              },
              {
                week: 'Level 4',
                title: 'Techniques',
                desc: 'Specialized methods and edge cases',
              },
            ].map((item, i) => (
              <div key={i} className="roadmap-card reveal">
                <div className="roadmap-num">{i + 1}</div>
                <div className="roadmap-week">{item.week}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="flex gap-1 mt-3">
                  {['Core', 'Practical', 'Projects'].map((tag, j) => (
                    <span key={j} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ink text-paper py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-display font-black mb-6">Ready to Master Prompting?</h2>
          <p className="text-xl text-paper opacity-90 mb-8 max-w-2xl mx-auto">
            Start your journey from prompt basics to advanced techniques. Unlock the full potential of AI models.
          </p>
          <Link href="/basics" className="btn bg-accent text-white px-8 py-4 text-lg">
            Begin Learning
          </Link>
        </div>
      </section>
    </div>
  )
}
