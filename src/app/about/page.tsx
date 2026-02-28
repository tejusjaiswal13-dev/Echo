"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    ExternalLink,
    Code2,
    Terminal,
    Globe2,
    ShieldCheck,
    Zap,
    BookOpen
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-20 max-w-4xl space-y-24">
            {/* Header */}
            <section className="text-center space-y-6">
                <Badge variant="secondary" className="px-6 py-1.5 rounded-full text-xs font-black tracking-widest uppercase italic">Hackathon Entry</Badge>
                <h1 className="text-4xl sm:text-6xl font-black italic tracking-tighter">Echo for Sankalp 2026</h1>
                <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
                    The Sankalp Innovation Challenge 2026 brings together India's brightest minds to bridge the gap between policy and impact. Echo is our humble contribution to inclusive local governance.
                </p>
                <div className="flex justify-center gap-2 text-xs font-bold text-slate-400">
                    <span className="p-1 px-2 border rounded">ENGLISH</span>
                    <span className="p-1 px-2 border rounded opacity-50">HINDI (Coming Soon / हिंदी जल्द ही)</span>
                </div>
            </section>

            {/* Developer Profile */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                <div className="bg-gradient-to-br from-primary to-blue-950 p-1.5 rounded-[3rem] shadow-2xl scale-105">
                    <div className="bg-white dark:bg-slate-900 h-full w-full rounded-[2.8rem] flex flex-col items-center justify-center p-12 text-center space-y-6 shadow-inner">
                        <div className="h-24 w-24 rounded-full bg-slate-100 flex items-center justify-center text-4xl font-black italic tracking-tighter border shadow-xl">
                            TJ
                        </div>
                        <div className="space-y-1">
                            <h2 className="text-xl font-bold">@TejusJaiswal</h2>
                            <p className="text-xs font-black uppercase text-secondary tracking-widest">Lead Builder</p>
                            <p className="text-[10px] text-muted-foreground">Kanpur, India</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Github className="h-4 w-4" /></Link>
                            <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin className="h-4 w-4" /></Link>
                            <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Twitter className="h-4 w-4" /></Link>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-6">
                    <h2 className="text-3xl font-black tracking-tight italic">Vision Behind Echo</h2>
                    <p className="text-muted-foreground text-lg italic leading-relaxed">
                        "Echo was born from a simple observation: local leaders are overwhelmed by qualitative data but lack the tools to objectively prioritize it without bias. We wanted to build something that feels premium, professional, and trustworthy—mirroring the institutional weight of governance while using the speed of modern AI."
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Badge className="px-4 py-1.5 rounded-xl font-black text-[10px] tracking-widest uppercase">Next.js 15 Expert</Badge>
                        <Badge className="px-4 py-1.5 rounded-xl font-black text-[10px] tracking-widest uppercase">UI/UX Designer</Badge>
                        <Badge className="px-4 py-1.5 rounded-xl font-black text-[10px] tracking-widest uppercase">Fullstack AI dev</Badge>
                    </div>
                </div>
            </section>

            <Separator />

            {/* Future Roadmap */}
            <section className="space-y-12">
                <div className="space-y-4">
                    <Badge variant="outline" className="text-primary font-black tracking-tighter uppercase italic">Future Development</Badge>
                    <h2 className="text-3xl font-extrabold tracking-tight">Post-Hackathon Roadmap</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {[
                        {
                            title: "Native Multilingual NLP",
                            desc: "Deep support for 22 Indian languages beyond just translation—understanding local dialect nuances.",
                            icon: Globe2
                        },
                        {
                            title: "Firebase/Postgres Integration",
                            desc: "Moving from LocalStorage to a secure, scalable backend for state-wide deployment.",
                            icon: Terminal
                        },
                        {
                            title: "Institutional Integration",
                            desc: "API hooks for existing government e-Portal systems like e-Gram Swaraj.",
                            icon: Zap
                        },
                        {
                            title: "Offline Syncing PWA",
                            desc: "Enhanced service workers for data collection in low-connectivity rural areas.",
                            icon: BookOpen
                        }
                    ].map((item, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/5 cursor-pointer">
                            <item.icon className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Credit */}
            <section className="bg-slate-50 dark:bg-slate-900 p-12 rounded-[3.5rem] border text-center space-y-8 overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-bold">Built with Modern Tech</h3>
                <div className="flex flex-wrap items-center justify-center gap-12 grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                    <span className="font-black tracking-widest hover:text-primary transition-colors cursor-default">NEXT.JS 15</span>
                    <span className="font-black tracking-widest hover:text-primary transition-colors cursor-default">GOOGLE GEMINI 1.5</span>
                    <span className="font-black tracking-widest hover:text-primary transition-colors cursor-default">TAILWIND 4</span>
                    <span className="font-black tracking-widest hover:text-primary transition-colors cursor-default">FRAMER MOTION</span>
                </div>
                <div className="pt-8 flex flex-col items-center gap-4">
                    <Button size="lg" className="rounded-full px-10 shadow-2xl flex items-center gap-4 group h-14" asChild>
                        <Link href="mailto:tejus@example.com">
                            <Mail className="h-5 w-5" />
                            Contact for Collaboration
                        </Link>
                    </Button>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">In Kanpur, India for the World</p>
                </div>
            </section>
        </div>
    )
}
