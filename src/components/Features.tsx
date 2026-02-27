import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Users, Box, BarChart3 } from 'lucide-react';

const features = [
    {
        title: 'Echo Breaker',
        description: 'Deconstruct echo chambers by amplifying marginalized voices and surfacing diverse, underrepresented opinions in public forums.',
        icon: <Users className="w-6 h-6 text-saffron" />,
        color: 'bg-saffron/10 border-saffron/20'
    },
    {
        title: 'Trust Pulse Score',
        description: 'Dynamic, real-time trust metric generated from sentiment analysis of public sentiment, civic engagement, and policy feedback.',
        icon: <Activity className="w-6 h-6 text-green-500" />,
        color: 'bg-green-500/10 border-green-500/20'
    },
    {
        title: 'Predictive Simulator',
        description: 'Simulate policy impact before implementation. Use AI models to visualize potential socioeconomic outcomes locally.',
        icon: <Box className="w-6 h-6 text-india-blue" />,
        color: 'bg-india-blue/10 border-india-blue/20'
    },
    {
        title: 'Public Portal',
        description: 'An interactive, transparent dashboard where citizens can track governance metrics, propose ideas, and engage directly.',
        icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
        color: 'bg-purple-500/10 border-purple-500/20'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-background-light dark:bg-background-dark/95 relative z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold tracking-widest text-india-blue dark:text-saffron-light uppercase mb-3">Core Platform</h2>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Empowering the Ecosystem</h3>
                    <p className="text-muted-light dark:text-muted-dark text-lg">
                        Echo is built on four core pillars that foster inclusivity, transparency, and data-driven governance.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className={`p-8 rounded-3xl border ${feature.color} bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                {feature.icon.props.children}
                            </div>
                            <div className={`inline-flex items-center justify-center p-3 rounded-2xl mb-6 ${feature.color.split(' ')[0]}`}>
                                {feature.icon}
                            </div>
                            <h4 className="text-2xl font-bold mb-3">{feature.title}</h4>
                            <p className="text-muted-light dark:text-muted-dark leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
