"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    AreaChart,
    Area
} from "recharts"
import {
    BarChart3,
    MessageSquare,
    CheckCircle2,
    Clock,
    ShieldCheck,
    Search,
    Filter,
    Download,
    Send,
    Info
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { AnimatedCounter } from "@/components/animated-counter"

// Mock Data
const issueData = [
    { name: "Water", active: 12, resolved: 45 },
    { name: "Roads", active: 8, resolved: 32 },
    { name: "Health", active: 5, resolved: 28 },
    { name: "Sanitation", active: 15, resolved: 50 },
    { name: "Power", active: 3, resolved: 18 },
]

const sentimentTrend = [
    { date: "Oct", score: 62 },
    { date: "Nov", score: 65 },
    { date: "Dec", score: 70 },
    { date: "Jan", score: 75 },
    { date: "Feb", score: 78 },
]

const COLORS = ["#FF9933", "#000080", "#138808", "#8884d8", "#ffc658"]

export default function PublicPortal() {
    const [feedback, setFeedback] = React.useState("")
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleSubmitFeedback = (e: React.FormEvent) => {
        e.preventDefault()
        if (!feedback.trim()) return
        setIsSubmitting(true)
        setTimeout(() => {
            toast.success("Feedback submitted anonymously. Thank you for your contribution!")
            setFeedback("")
            setIsSubmitting(false)
        }, 1500)
    }

    return (
        <div className="container mx-auto px-4 py-8 space-y-12">
            <header className="flex flex-col md:flex-row md:items-end justify-between border-b pb-8 gap-6">
                <div className="space-y-2">
                    <Badge variant="outline" className="text-primary font-bold tracking-widest uppercase">Transparency Portal</Badge>
                    <h1 className="text-4xl font-bold tracking-tight">Citizen Insights Hub</h1>
                    <p className="text-muted-foreground text-lg">Visualizing progress, feedback, and collective trust in real-time.</p>
                </div>
                <div className="flex bg-slate-50 dark:bg-slate-900 border rounded-3xl p-6 shadow-xl shadow-primary/5 items-center gap-6">
                    <div className="text-center">
                        <div className="text-xs font-bold text-muted-foreground uppercase opacity-60">Trust Pulse Score</div>
                        <div className="text-5xl font-black text-secondary tracking-tighter">
                            <AnimatedCounter value={78.4} />
                        </div>
                    </div>
                    <Separator orientation="vertical" className="h-14" />
                    <div className="space-y-1">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-green-600">
                            <ShieldCheck className="h-4 w-4" /> TRENDING UP
                        </div>
                        <div className="text-2xl font-bold italic tracking-tighter">
                            +<AnimatedCounter value={5.2} />%
                        </div>
                        <div className="text-[10px] text-muted-foreground font-medium uppercase">Last 30 Days</div>
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Issue Resolutions Chart */}
                <Card className="lg:col-span-2 border-none shadow-lg bg-white dark:bg-slate-950 overflow-hidden">
                    <CardHeader className="bg-muted/30 pb-8">
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Governance Progress</CardTitle>
                                <CardDescription>Issue resolution status across 15 wards.</CardDescription>
                            </div>
                            <Button size="icon" variant="ghost" className="rounded-full"><Download className="h-4 w-4" /></Button>
                        </div>
                    </CardHeader>
                    <CardContent className="pt-8 h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={issueData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.1} />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fontWeight: 600 }} dy={10} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                                <Tooltip
                                    cursor={{ fill: "transparent" }}
                                    contentStyle={{ borderRadius: "16px", border: "none", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" }}
                                />
                                <Bar dataKey="resolved" name="Resolved" fill="#138808" radius={[6, 6, 0, 0]} barSize={24} />
                                <Bar dataKey="active" name="Active" fill="#FF9933" radius={[6, 6, 0, 0]} barSize={24} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                    <CardFooter className="bg-muted/10 border-t items-center justify-center p-4">
                        <div className="flex gap-6 text-xs font-bold">
                            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[#138808]" /> Resolved (82%)</div>
                            <div className="flex items-center gap-2"><div className="h-3 w-3 rounded-full bg-[#FF9933]" /> Active (18%)</div>
                        </div>
                    </CardFooter>
                </Card>

                {/* Feedback Form */}
                <Card className="h-full flex flex-col border-none shadow-2xl bg-primary text-primary-foreground relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <MessageSquare size={120} />
                    </div>
                    <CardHeader>
                        <CardTitle className="text-2xl">Echo Your Input</CardTitle>
                        <CardDescription className="text-white/70">Building trust requires your voice. Suggest an improvement or report a gap.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-6 pt-4">
                        <div className="space-y-4">
                            <div className="bg-white/10 p-4 rounded-2xl border border-white/20 backdrop-blur-sm">
                                <p className="text-xs font-medium italic">"Your input is AI-anonymized and categorized for leader strategic planning."</p>
                            </div>
                            <textarea
                                value={feedback}
                                onChange={e => setFeedback(e.target.value)}
                                placeholder="Ex: Need more streetlights near the playground..."
                                className="w-full h-40 rounded-3xl bg-white/10 border-white/20 border-2 p-5 text-sm outline-none focus:border-white transition-all placeholder:text-white/40"
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="pb-8">
                        <Button
                            onClick={handleSubmitFeedback}
                            disabled={isSubmitting}
                            className="w-full rounded-2xl h-14 bg-secondary text-primary font-bold hover:scale-[1.02] transition-all group shadow-2xl shadow-black/20"
                        >
                            {isSubmitting ? "Submitting..." : (
                                <>
                                    Submit Anonymous Echo
                                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </>
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
                <Card className="border-none shadow-md bg-white dark:bg-slate-900">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2 italic">
                            <Clock className="h-5 w-5 text-blue-500" /> Resolution Velocity
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-black text-blue-500 tracking-tighter">
                        4.2 Days <span className="text-sm font-medium text-muted-foreground tracking-normal block mt-1">Avg. issue closure time</span>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white dark:bg-slate-900">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2 italic">
                            <CheckCircle2 className="h-5 w-5 text-green-500" /> Success Rate
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-black text-green-500 tracking-tighter">
                        91% <span className="text-sm font-medium text-muted-foreground tracking-normal block mt-1">Issues successfully resolved</span>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-md bg-white dark:bg-slate-900">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2 italic">
                            <BarChart3 className="h-5 w-5 text-primary" /> Active Engagement
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-3xl font-black text-primary tracking-tighter">
                        1,250+ <span className="text-sm font-medium text-muted-foreground tracking-normal block mt-1">Unique citizen contributors</span>
                    </CardContent>
                </Card>
            </div>

            <div className="p-12 rounded-[3.5rem] bg-slate-50 dark:bg-slate-900/50 border flex flex-col lg:flex-row items-center justify-between gap-12 group">
                <div className="lg:w-1/2 space-y-6">
                    <div className="bg-primary/10 text-primary w-fit px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Global impact</div>
                    <h2 className="text-3xl font-extrabold tracking-tight italic">Pulse Trend Analysis</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Sentiment auditing continuously monitors community morale. A rising pulse indicates high institutional trust and effective leadership communication.
                    </p>
                    <div className="flex items-center gap-3 text-secondary group-hover:gap-5 transition-all cursor-pointer">
                        <span className="font-bold underline decoration-2 underline-offset-8">Read full audit methodology</span>
                        <Download className="h-5 w-5" />
                    </div>
                </div>
                <div className="lg:w-1/2 h-[250px] w-full bg-white dark:bg-slate-950 rounded-3xl p-6 border shadow-2xl relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={sentimentTrend}>
                            <defs>
                                <linearGradient id="colorPulse" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF9933" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#FF9933" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="date" hide />
                            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                            <Tooltip
                                contentStyle={{ borderRadius: "12px", border: "none", fontSize: "12px" }}
                            />
                            <Area
                                type="monotone"
                                dataKey="score"
                                name="Pulse Progress"
                                stroke="#FF9933"
                                strokeWidth={4}
                                fillOpacity={1}
                                fill="url(#colorPulse)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div className="absolute top-4 right-6 text-xs font-black text-secondary tracking-widest">TRUST PULSE (REAL-TIME)</div>
                </div>
            </div>
        </div>
    )
}
