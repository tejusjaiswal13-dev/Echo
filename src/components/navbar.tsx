"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Radio } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, AnimatePresence } from "framer-motion"

const routes = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Leader Dashboard", path: "/leader-dashboard" },
    { name: "Public Portal", path: "/public-portal" },
    { name: "Impact", path: "/impact" },
    { name: "About", path: "/about" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <span className="text-xl font-bold italic tracking-tighter">E</span>
                        </div>
                        <span className="hidden text-xl font-bold tracking-tight sm:inline-block">
                            Echo
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden items-center space-x-6 md:flex">
                    {routes.map((route) => (
                        <Link
                            key={route.path}
                            href={route.path}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === route.path
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {route.name}
                        </Link>
                    ))}
                    <ModeToggle />
                    <Button variant="default" asChild>
                        <Link href="/leader-dashboard">Login</Link>
                    </Button>
                </nav>

                {/* Mobile Nav Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden"
                    >
                        <div className="container space-y-4 px-4 pb-6 pt-2">
                            {routes.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block py-2 text-base font-medium transition-colors hover:text-primary",
                                        pathname === route.path
                                            ? "text-primary border-l-4 border-primary pl-3"
                                            : "text-muted-foreground pl-4"
                                    )}
                                >
                                    {route.name}
                                </Link>
                            ))}
                            <div className="flex px-4 pt-4">
                                <Button className="w-full" asChild>
                                    <Link href="/leader-dashboard" onClick={() => setIsOpen(false)}>
                                        Leader Dashboard
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
