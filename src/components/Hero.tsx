import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
            {/* Background decorations */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-saffron/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob dark:bg-saffron/10"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-india-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 dark:bg-india-blue/10"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-india-green/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 dark:bg-india-green/10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 text-saffron-dark dark:text-saffron-light text-sm font-medium mb-8 border border-saffron/20">
                        <Globe className="w-4 h-4" />
                        Empowering Democratic Participation
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 mt-4">
                        Inclusive <span className="bg-clip-text text-transparent bg-gradient-to-r from-india-blue to-saffron drop-shadow-sm">Local Leadership</span>
                        <br /> Powered by AI
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-muted-light dark:text-muted-dark mb-10 max-w-2xl mx-auto leading-relaxed">
                        Echo is an AI platform transforming public trust. We amplify diverse voices, predict policy impact, and build a transparent bridge between citizens and local governance.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-base font-semibold text-white bg-india-blue hover:bg-india-blue-light rounded-full shadow-xl hover:shadow-india-blue/25 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
                        >
                            Enter Public Portal
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 text-base font-semibold text-india-blue dark:text-saffron-light bg-surface-light dark:bg-surface-dark border-2 border-india-blue/20 dark:border-saffron/20 hover:border-india-blue dark:hover:border-saffron rounded-full shadow-md transition-all w-full sm:w-auto"
                        >
                            See Trust Pulse
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
