"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    BarChart3,
    Send,
    UploadCloud,
    FileText,
    AlertTriangle,
    BrainCircuit,
    History,
    TrendingUp,
    LayoutDashboard,
    MessageSquare,
    Sparkles,
    Bot
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"

import { useLocalStorage } from "@/hooks/use-local-storage"

// Mock Data
const INITIAL_COMPLAINTS = [
    { id: 1, category: "Water", sentiment: "Critical", source: "Mobile Form", text: "Persistent water shortage in Ward 5 for 3 days." },
    { id: 2, category: "Roads", sentiment: "Moderate", source: "Voice Note", text: "Potholes near the market area need urgent repair." },
    { id: 3, category: "Health", sentiment: "High Priority", source: "Portal", text: "Primary health center needs more staff during morning hours." },
]

export default function LeaderDashboard() {
    const [complaints, setComplaints] = useLocalStorage("echo-complaints", INITIAL_COMPLAINTS)
    const [messages, setMessages] = React.useState([
        { role: "bot", text: "Hello, Leader! I'm Echo Assistant. How can I help you simulate governance decisions today?" }
    ])
    const [input, setInput] = React.useState("")
    const [isAnalyzing, setIsAnalyzing] = React.useState(false)
    const [isSimulating, setIsSimulating] = React.useState(false)

    const handleSimulate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isSimulating) return

        const userMsg = input
        setMessages(prev => [...prev, { role: "user", text: userMsg }])
        setInput("")
        setIsSimulating(true)

        try {
            const response = await fetch("/api/simulate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt: userMsg })
            })
            const data = await response.json()

            setMessages(prev => [...prev, { role: "bot", text: data.text }])
        } catch (error) {
            toast.error("Simulation failed. Please try again.")
            setMessages(prev => [...prev, { role: "bot", text: "I encountered an error while simulating. Please check your connectivity." }])
        } finally {
            setIsSimulating(false)
        }
    }

    const handleAnalyzeUpload = async () => {
        setIsAnalyzing(true)
        toast.info("AI Analysis in progress...", { duration: 2000 })

        try {
            // In a real scenario, this would be the actual file content or multiple items
            const response = await fetch("/api/analyze", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: "Sample citizen complaint about water shortage in Ward 4." })
            })
            const data = await response.json()

            toast.success(`Analysis Complete: ${data.sentiment} sentiment detected in ${data.category}.`)
        } catch (error) {
            toast.error("Analysis failed.")
        } finally {
            setIsAnalyzing(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <header className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight mb-2">Leader Dashboard</h1>
                    <p className="text-muted-foreground">Strategic decisions powered by unbiased intelligence.</p>
                </div>
                <div className="flex gap-4 p-2 bg-muted/40 rounded-2xl border border-dashed">
                    <div className="text-center px-4">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Trust Pulse</div>
                        <div className="text-2xl font-black text-secondary">78.4</div>
                    </div>
                    <Separator orientation="vertical" className="h-10" />
                    <div className="text-center px-4">
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Insights/Day</div>
                        <div className="text-2xl font-black text-primary">12</div>
                    </div>
                </div>
            </header>

            <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="bg-muted p-1 rounded-2xl h-12 w-full max-w-md">
                    <TabsTrigger value="overview" className="rounded-xl flex-1 font-semibold gap-2">
                        <LayoutDashboard className="h-4 w-4" /> Overview
                    </TabsTrigger>
                    <TabsTrigger value="echo-breaker" className="rounded-xl flex-1 font-semibold gap-2">
                        <BrainCircuit className="h-4 w-4" /> Echo Breaker
                    </TabsTrigger>
                    <TabsTrigger value="simulator" className="rounded-xl flex-1 font-semibold gap-2">
                        <Sparkles className="h-4 w-4" /> Simulator
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="overview">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="md:col-span-2">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle>Recent Citizen Inputs</CardTitle>
                                    <Button variant="outline" size="sm" onClick={handleAnalyzeUpload}>
                                        <TrendingUp className="mr-2 h-4 w-4" /> Analyze All
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {complaints.map(item => (
                                        <div key={item.id} className="p-4 rounded-2xl bg-muted/30 border space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Badge variant={item.sentiment === "Critical" ? "destructive" : "secondary"}>{item.category}</Badge>
                                                <span className="text-xs text-muted-foreground font-medium">{item.source}</span>
                                            </div>
                                            <p className="text-sm font-medium">{item.text}</p>
                                            <div className="flex gap-2">
                                                <Badge variant="outline" className="bg-red-500/5 text-red-500 border-red-500/20 text-[10px] uppercase">Bias Alert: High</Badge>
                                                <Badge variant="outline" className="bg-blue-500/5 text-blue-500 border-blue-500/20 text-[10px] uppercase">NLP Tag: Infrastructure</Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="h-fit">
                            <CardHeader>
                                <CardTitle>Decision Inbox</CardTitle>
                                <CardDescription>AI prioritized actions.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    "Repair Canal in Ward 4 (92% Impact)",
                                    "Audit Health Centers (84% Gain)",
                                    "Fix Streetlights Market Rd (78% Trust)"
                                ].map((action, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors border group border-transparent hover:border-border cursor-pointer">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                        <span className="text-sm font-semibold">{action}</span>
                                    </div>
                                ))}
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full rounded-full" variant="secondary">View Full Action Plan</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="echo-breaker">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-8 border-dashed border-2 flex flex-col items-center justify-center text-center space-y-4 bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer" onClick={handleAnalyzeUpload}>
                            <div className="h-16 w-16 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-2">
                                <UploadCloud className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold">Import Diversity Data</h3>
                            <p className="max-w-xs text-sm text-muted-foreground">Upload CSVs, form logs, or spreadsheets. Echo will automatically detect underrepresented categories.</p>
                            <Button variant="default" className="rounded-full px-8">Select Files</Button>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Representation Bias</CardTitle>
                                <CardDescription>Audit of citizen input distribution.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-bold">
                                            <span>Female Representation</span>
                                            <span className="text-destructive flex items-center gap-1">
                                                <AlertTriangle className="h-3 w-3" /> 24% (Low)
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[24%]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-bold">
                                            <span>Youth Inclusion (&lt;25)</span>
                                            <span className="text-green-600">62% (Healthy)</span>
                                        </div>
                                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[62%]" />
                                        </div>
                                    </div>
                                    <Separator />
                                    <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/20 border-dashed italic text-xs leading-relaxed">
                                        AI Suggestion: "Host a separate ward meeting for women's self-help groups to capture missing inputs on sanitation."
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="simulator">
                    <Card className="flex flex-col h-[600px] overflow-hidden">
                        <CardHeader className="border-b bg-muted/10 backdrop-blur-sm sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                                    <Bot className="h-6 w-6" />
                                </div>
                                <div>
                                    <CardTitle className="text-lg">Predictive Simulator</CardTitle>
                                    <CardDescription>Fueled by Google Gemini 1.5 Pro</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow p-0">
                            <ScrollArea className="h-full p-6">
                                <div className="space-y-6">
                                    {messages.map((m, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: m.role === "bot" ? -20 : 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={`flex ${m.role === "bot" ? "justify-start" : "justify-end"}`}
                                        >
                                            <div className={`max-w-[80%] px-5 py-3 rounded-3xl text-sm font-medium shadow-sm ${m.role === "bot"
                                                ? "bg-muted text-muted-foreground rounded-tl-none border"
                                                : "bg-primary text-primary-foreground rounded-tr-none"
                                                }`}>
                                                {m.text}
                                            </div>
                                        </motion.div>
                                    ))}
                                    {isSimulating && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-muted px-5 py-3 rounded-3xl rounded-tl-none border text-sm italic animate-pulse">
                                                Echo is thinking...
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </ScrollArea>
                        </CardContent>
                        <CardFooter className="p-4 border-t bg-muted/5">
                            <form onSubmit={handleSimulate} className="flex gap-2 w-full">
                                <Input
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder="Ask a what-if governance question..."
                                    className="rounded-full bg-background border-2 border-transparent focus-visible:border-primary/50 transition-all h-12"
                                />
                                <Button type="submit" size="icon" disabled={isSimulating} className="h-12 w-12 rounded-full shrink-0 group shadow-lg shadow-primary/20">
                                    <Send className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}
