import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, HeartHandshake, ShieldAlert } from 'lucide-react';

const AnimatedCounter: React.FC<{ target: number }> = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = target;
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [target]);

    return <span className="tabular-nums font-bold tracking-tighter">{count}</span>;
};

const Impact: React.FC = () => {
    return (
        <section id="impact" className="py-24 bg-background-light dark:bg-background-dark/95 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-sm font-bold tracking-widest text-india-blue dark:text-saffron-light uppercase mb-3">Community Impact</h2>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Quantifiable Trust & Transparency</h3>
                        <p className="text-lg text-muted-light dark:text-muted-dark leading-relaxed mb-8">
                            By mapping diverse civic inputs to actionable policy simulators, Echo raises the standard for public accountability. Our dynamic Trust Pulse ensures local leaders are aligned with community goals.
                        </p>

                        <div className="flex gap-4">
                            <div className="p-4 bg-surface-light dark:bg-surface-dark border border-muted-light/10 dark:border-muted-dark/20 rounded-2xl flex-1 items-center gap-3">
                                <HeartHandshake className="w-8 h-8 text-saffron mb-2" />
                                <h4 className="font-semibold text-lg">Civic Unity</h4>
                                <p className="text-sm text-muted-light dark:text-muted-dark mt-1">Bridging digital divides</p>
                            </div>
                            <div className="p-4 bg-surface-light dark:bg-surface-dark border border-muted-light/10 dark:border-muted-dark/20 rounded-2xl flex-1 items-center gap-3">
                                <ShieldAlert className="w-8 h-8 text-india-blue mb-2" />
                                <h4 className="font-semibold text-lg">Policy Safety</h4>
                                <p className="text-sm text-muted-light dark:text-muted-dark mt-1">Predictive risk modeling</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 to-india-blue/20 rounded-[3rem] blur-2xl"></div>

                        <div className="relative bg-surface-light dark:bg-surface-dark border border-muted-light/10 dark:border-muted-dark/20 p-10 rounded-[3rem] shadow-2xl flex flex-col items-center text-center">
                            <div className="inline-flex items-center justify-center p-4 bg-india-blue/10 dark:bg-india-blue/20 rounded-full mb-6">
                                <PieChart className="w-10 h-10 text-india-blue dark:text-india-blue-light" />
                            </div>

                            <h4 className="text-xl font-medium text-muted-light dark:text-muted-dark mb-2">Live Trust Pulse Score</h4>
                            <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-saffron to-india-blue drop-shadow-sm flex items-end justify-center mb-6">
                                <AnimatedCounter target={87} /><span className="text-4xl ml-2">%</span>
                            </div>

                            <div className="w-full h-2 bg-muted-light/20 dark:bg-muted-dark/20 rounded-full overflow-hidden mb-4">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '87%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                                    className="h-full bg-gradient-to-r from-india-blue to-saffron"
                                ></motion.div>
                            </div>

                            <p className="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-1 justify-center">
                                ↑ 12% increase since last townhall
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Impact;
