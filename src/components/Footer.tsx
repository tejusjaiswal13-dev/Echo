"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Twitter, Linkedin, Heart } from "lucide-react" // Removed Radio as it was not used and fixed import syntax
import { cn } from "@/lib/utils"
import { Button as ShadcnButton } from "@/components/ui/button"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background pt-12 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                                <span className="font-bold">E</span>
                            </div>
                            <span className="text-xl font-bold">Echo</span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Empowering local leaders with AI for decision intelligence and breaking echo chambers in grassroots governance.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Github className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/leader-dashboard" className="hover:text-primary transition-colors">Leader Dashboard</Link></li>
                            <li><Link href="/public-portal" className="hover:text-primary transition-colors">Public Portal</Link></li>
                            <li><Link href="/impact" className="hover:text-primary transition-colors">Impact</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Resources</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Digital India Goals</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">Connect</h3>
                        <div className="rounded-xl bg-muted p-4 space-y-2">
                            <p className="text-xs font-medium text-muted-foreground">Stay updated on latest governance AI tools.</p>
                            <form className="flex space-x-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full h-8 px-3 text-xs bg-background border rounded outline-none focus:ring-1 focus:ring-primary"
                                />
                                <ShadcnButton size="sm" className="h-8">Join</ShadcnButton>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-muted-foreground/10 pt-6 space-y-4 sm:flex-row sm:space-y-0">
                    <p className="text-xs text-muted-foreground flex items-center">
                        Made with <Heart className="h-3 w-3 mx-1 text-red-500 fill-red-500" /> for Sankalp Innovation Challenge 2026.
                    </p>
                    <p className="text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Echo by @TejusJaiswal. Kanpur, India.
                    </p>
                </div>
            </div>
        </footer>
    )
}
