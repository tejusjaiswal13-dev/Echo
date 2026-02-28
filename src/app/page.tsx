"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Zap, Users, Globe, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 dark:bg-[#020210] py-24 lg:py-40">
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-40">
          <div className="absolute top-0 -left-10 w-96 h-96 bg-primary rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-0 -right-10 w-96 h-96 bg-secondary rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-background/50 backdrop-blur-md px-4 py-1.5 text-xs font-black tracking-widest uppercase mb-8 shadow-2xl hover:border-primary transition-colors cursor-default"
          >
            <span className="flex h-2 w-2 rounded-full bg-secondary mr-3 animate-ping" />
            Sankalp Innovation Challenge 2026
          </motion.div>

          <motion.h1
            {...fadeInUp}
            className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-9xl mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#000080] to-[#FF9933] dark:from-white dark:to-slate-400 drop-shadow-sm"
          >
            Echo: Breaking <br className="hidden sm:block" />
            Echo Chambers
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-muted-foreground sm:text-2xl mb-2 font-medium leading-relaxed tracking-tight"
          >
            Empowering Panchayat and Ward leaders with <span className="text-primary font-bold">AI decision intelligence</span> to build public trust in Indian grassroots governance.
          </motion.p>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="mx-auto max-w-3xl text-sm text-muted-foreground/60 mb-12 font-bold italic"
          >
            (पंचायत और वार्ड नेताओं को भारतीय जमीनी स्तर के शासन में सार्वजनिक विश्वास बनाने के लिए AI निर्णय बुद्धिमता के साथ सशक्त बनाना।)
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="rounded-full px-8 h-12 text-base group" asChild>
              <Link href="/leader-dashboard">
                Leader Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base" asChild>
              <Link href="/public-portal">Explore Public Portal</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Problem Component */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">The Governance Gap</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Incomplete Realities",
              description: "Leaders often rely on loud minorities, missing the silent needs of marginalized groups.",
              icon: Globe,
              color: "text-blue-500"
            },
            {
              title: "Biased Inputs",
              description: "Decision-making influenced by outdated data or skewed sentiment analysis.",
              icon: BrainCircuit,
              color: "text-orange-500"
            },
            {
              title: "The Trust Deficit",
              description: "Lack of transparency leads to public skepticism and low civic engagement.",
              icon: ShieldCheck,
              color: "text-green-500"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="flex flex-col p-8 rounded-3xl border bg-card shadow-sm transition-all"
            >
              <item.icon className={`h-12 w-12 ${item.color} mb-6`} />
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solution Banner */}
      <section className="bg-primary text-primary-foreground py-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-12 opacity-10">
          <Radio size={200} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">Unlocking Hyper-Local Intelligence</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Echo aggregates diverse citizen inputs—form submissions, oral complaints, and social sentiment—to provide a unified, unbiased view of your constituency's needs.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Sentiment Deep-dive",
                  "Bias Prevention AI",
                  "Trust Pulse Monitoring",
                  "Explainable Actions"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-secondary" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Button variant="secondary" size="lg" className="rounded-full" asChild>
                  <Link href="/features">See How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Card className="bg-background/10 border-white/20 backdrop-blur-sm text-white overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Village Trust Index</span>
                    <span className="text-secondary font-bold text-2xl tracking-tighter">84.2%</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "84.2%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-secondary"
                      />
                    </div>
                    <div className="flex justify-between text-xs text-white/60 font-medium">
                      <span>Low Trust</span>
                      <span>High Trust</span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm italic">"AI Insight: Road repair in Sector 4 is the top priority for 65% of female respondents."</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to transform local governance?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-bold text-primary">30%</span>
            <span className="text-sm text-muted-foreground">Faster Resolutions</span>
          </div>
          <div className="w-[1px] h-12 bg-border hidden sm:block" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-bold text-secondary">50%</span>
            <span className="text-sm text-muted-foreground">Higher Civic Trust</span>
          </div>
          <div className="w-[1px] h-12 bg-border hidden sm:block" />
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-bold text-green-600">100%</span>
            <span className="text-sm text-muted-foreground">Traceable Decisions</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function Radio({ size, className }: { size?: number, className?: string }) {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.2 19.1 19.1" />
    </svg>
  )
}
