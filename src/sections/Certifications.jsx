import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { certifications } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="certifications" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4"
                    >
                        <span className="gradient-text">Certifications</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
                    />

                    {/* Certifications Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    >
                        {certifications.map((cert) => (
                            <motion.div
                                key={cert.id}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 1,
                                    transition: { duration: 0.3 },
                                }}
                                className="glass-card p-8 text-center"
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        repeatDelay: 3,
                                    }}
                                    className="text-6xl mb-4"
                                >
                                    {cert.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold font-poppins text-white mb-2">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-inter border border-primary/30">
                                        {cert.platform}
                                    </span>
                                    <span className="text-gray-400 text-sm font-inter">
                                        {cert.year}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
