import React from 'react';
import { ShieldCheck, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-surface-light dark:bg-surface-dark border-t border-muted-light/10 dark:border-muted-dark/10 py-12 lg:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

                    <div className="flex flex-col items-center md:items-start max-w-sm text-center md:text-left">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-1 rounded-lg bg-gradient-to-br from-india-blue to-saffron">
                                <ShieldCheck className="text-white w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-india-blue dark:text-saffron-light">
                                Echo<span className="text-saffron dark:text-saffron">Trust</span> AI
                            </span>
                        </div>
                        <p className="text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                            Empowering inclusive local leadership through AI-driven transparency, bias reduction, and actionable public insights.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-center md:text-right">
                        <h4 className="font-semibold mb-2">Developed by</h4>
                        <a href="https://twitter.com/TejusJaiswal" target="_blank" rel="noreferrer" className="text-muted-light dark:text-muted-dark hover:text-india-blue dark:hover:text-saffron transition-colors font-medium"> @TejusJaiswal </a>
                        <p className="text-xs text-muted-light/70 dark:text-muted-dark/70 mt-2 italic">
                            Built for Hackathon 2026
                        </p>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-muted-light/10 dark:border-muted-dark/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-light/80 dark:text-muted-dark/80">
                        &copy; {new Date().getFullYear()} EchoTrust AI. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-muted-light dark:text-muted-dark hover:text-india-blue dark:hover:text-saffron transition-colors" aria-label="Github">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-light dark:text-muted-dark hover:text-india-blue dark:hover:text-saffron transition-colors" aria-label="Twitter">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-muted-light dark:text-muted-dark hover:text-india-blue dark:hover:text-saffron transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
