import React from 'react';
import { motion } from 'framer-motion';
import { Database, Filter, Lightbulb, TrendingUp } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'Data Ingestion',
        description: 'Aggregating raw civic feedback and public datasets.',
        icon: <Database className="w-5 h-5 text-gray-500" />
    },
    {
        id: 2,
        title: 'Bias Filtering',
        description: 'AI algorithms detect and mute echo-chamber loops.',
        icon: <Filter className="w-5 h-5 text-saffron" />
    },
    {
        id: 3,
        title: 'Insights Generation',
        description: 'Transforming feedback into actionable policy metrics.',
        icon: <Lightbulb className="w-5 h-5 text-india-blue" />
    },
    {
        id: 4,
        title: 'Actionable Governance',
        description: 'Local leaders execute transparent decisions.',
        icon: <TrendingUp className="w-5 h-5 text-india-green" />
    }
];

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-24 bg-surface-light dark:bg-surface-dark/50 border-y border-muted-light/10 dark:border-muted-dark/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-india-blue dark:text-saffron-light uppercase mb-3">Architecture</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight">How Echo Works</h3>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Connecting line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-gray-200 via-saffron/50 to-india-blue/50 dark:from-gray-800 dark:via-saffron/30 dark:to-india-blue/30 -translate-y-1/2 hidden md:block rounded-full"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="relative bg-background-light dark:bg-background-dark p-6 rounded-2xl shadow-md border border-muted-light/10 dark:border-muted-dark/20 z-10 flex flex-col items-center text-center hover:border-india-blue/50 dark:hover:border-saffron/50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-surface-light dark:bg-surface-dark border-4 border-background-light dark:border-background-dark flex items-center justify-center mb-4 shadow-sm md:absolute md:-top-6">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 md:mt-6">{step.title}</h4>
                                    <p className="text-sm text-muted-light dark:text-muted-dark">
                                        {step.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
