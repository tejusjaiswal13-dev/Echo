import React from 'react';
import { Moon, Sun, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md border-muted-light/20 dark:border-muted-dark/20 bg-background-light/80 dark:bg-background-dark/80">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="p-1 rounded-lg bg-gradient-to-br from-india-blue to-saffron">
                        <ShieldCheck className="text-white w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-india-blue dark:text-saffron-light">
                        Echo<span className="text-saffron dark:text-saffron">Trust</span> AI
                    </span>
                </motion.div>

                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#features" className="hover:text-india-blue transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-india-blue transition-colors">How it Works</a>
                    <a href="#impact" className="hover:text-india-blue transition-colors">Impact</a>
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full hover:bg-muted-light/10 dark:hover:bg-muted-dark/10 transition-colors focus:outline-none focus:ring-2 focus:ring-saffron"
                        aria-label="Toggle Dark Mode"
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-saffron-light" />
                        ) : (
                            <Moon className="w-5 h-5 text-india-blue" />
                        )}
                    </button>

                    <button className="hidden sm:inline-flex px-4 py-2 text-sm font-semibold text-white bg-india-blue hover:bg-india-blue-light transition-all rounded-full shadow-lg hover:shadow-india-blue/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-india-blue dark:focus:ring-offset-background-dark">
                        Join Platform
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
