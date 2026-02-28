"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
    TrendingUp,
    Users,
    MapPin,
    ArrowUpRight,
    Calendar,
    Award,
    CircleCheckBig,
    BarChart,
    ShieldCheck,
    Building2,
    HeartHandshake
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const impacts = [
    {
        title: "Democratic Scalability",
        description: "Echo scales local governance by automating the analysis of thousands of citizen inputs, allowing 1 leader to act with the insight of 10 analysts.",
        icon: Building2,
        stat: "10x",
        label: "Efficiency Gain"
    },
    {
        title: "Bias Eradication",
        description: "Our AI specifically flags 'loud minorites' to ensure the quietest groups are finally heard in budget planning and project priority lists.",
        icon: ShieldCheck,
        stat: "100%",
        label: "Inclusive Policy"
    },
    {
        title: "Empowered Leaders",
        description: "Panchayat and Ward leaders spend less time on administration and more on strategic community building through AI guidance.",
        icon: HeartHandshake,
        stat: "30%",
        label: "More Strategic Time"
    }
]

export default function ImpactPage() {
    const containerRef = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    return (
        <div className="flex flex-col gap-24 py-20 bg-slate-50 dark:bg-slate-950 min-h-screen" ref={containerRef}>
            {/* Header */}
            <section className="container mx-auto px-4 text-center space-y-6">
                <Badge variant="secondary" className="px-6 py-1.5 rounded-full text-sm font-black tracking-widest uppercase">The Result</Badge>
                <h1 className="text-4xl sm:text-6xl font-black italic tracking-tighter">Impact at the Grassroots</h1>
                <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
                    Measuring the transformation of local governance from data-starved to intelligence-driven. Aligning with Digital India and NEP 2020 core values.
                </p>
            </section>

            {/* Case Study Grid */}
            <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-2xl">
                        <MapPin className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight">Success: Ward 4, Kanpur</h2>
                    <div className="space-y-6">
                        <div className="flex gap-4 group">
                            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm group-hover:scale-110 transition-transform">
                                <ArrowUpRight className="h-6 w-6 text-green-500" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">Before Echo</h3>
                                <p className="text-sm text-muted-foreground">Budgeting relied on past patterns. Silent majority needs were missed in the 2025 budget. 28% Trust Score.</p>
                            </div>
                        </div>
                        <div className="flex gap-4 group">
                            <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border shadow-sm group-hover:scale-110 transition-transform">
                                <CircleCheckBig className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-bold mb-1">After 6 Months of Echo</h3>
                                <p className="text-sm text-muted-foreground">AI flagged missing female input. Sanitization project prioritized. 84% Trust Score (+56pts improvement).</p>
                            </div>
                        </div>
                    </div>
                    <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 bg-primary px-10">Read Implementation Logic</Button>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                    <Card className="relative z-10 border-none bg-white dark:bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden rounded-[2.5rem]">
                        <CardHeader className="bg-primary p-8">
                            <CardTitle className="text-white text-2xl font-black flex items-center justify-between">
                                Trust Velocity Tracker
                                <TrendingUp className="h-6 w-6 text-secondary" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-10 space-y-8 text-center bg-white dark:bg-slate-900">
                            <div className="flex items-center justify-around">
                                <div className="space-y-1">
                                    <div className="text-4xl font-black text-slate-400 line-through tracking-tighter">28.4%</div>
                                    <div className="text-[10px] uppercase font-bold text-muted-foreground">Historical Avg.</div>
                                </div>
                                <div className="h-10 w-[2px] bg-slate-100 mx-4" />
                                <div className="space-y-1 scale-125">
                                    <div className="text-6xl font-black text-primary tracking-tighter">84.2%</div>
                                    <div className="text-[10px] uppercase font-black text-secondary tracking-widest">Active Pulse</div>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-black/20 text-xs italic font-medium leading-relaxed block shadow-inner">
                                "The simulator predicted a trust boost of 15% if we fixed the sanitation first. Reality gave us a 56% boost because it was the top priority for 80% of families."
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
                    {impacts.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-4"
                        >
                            <div className="mx-auto h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <item.icon className="h-8 w-8 text-secondary" />
                            </div>
                            <div className="text-6xl font-black italic tracking-tighter">{item.stat}</div>
                            <div className="text-xs font-black uppercase tracking-[0.2em] opacity-80">{item.label}</div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <p className="text-sm opacity-70 leading-relaxed max-w-xs mx-auto">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Policy */}
            <section className="container mx-auto px-4 py-8 text-center space-y-10">
                <h2 className="text-3xl font-bold">Policy Alignment</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {["Digital India", "E-Governance 2.0", "NEP 2020", "Smart Cities Mission"].map(policy => (
                        <div key={policy} className="px-8 py-4 bg-white dark:bg-slate-900 border-2 rounded-2xl shadow-sm hover:shadow-xl hover:border-primary transition-all cursor-pointer font-black text-sm tracking-widest uppercase flex items-center gap-3 italic">
                            <Award className="h-5 w-5 text-secondary" />
                            {policy}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
