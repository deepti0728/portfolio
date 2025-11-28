import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { about } = portfolioData;

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Section Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold font-poppins text-center mb-4"
                    >
                        About <span className="gradient-text">Me</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
                    />

                    {/* Content Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass-card p-8 md:p-12"
                    >
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-gray-300 font-inter leading-relaxed">
                                {about.description}
                            </p>
                            <p className="text-lg md:text-xl text-gray-300 font-inter leading-relaxed">
                                {about.passion}
                            </p>

                            {/* Highlights */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card p-4 text-center border border-primary/30"
                                >
                                    <div className="text-3xl mb-2">🎓</div>
                                    <h4 className="font-poppins font-semibold text-primary mb-1">
                                        Education
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        B.Tech in AI & ML
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card p-4 text-center border border-secondary/30"
                                >
                                    <div className="text-3xl mb-2">🤖</div>
                                    <h4 className="font-poppins font-semibold text-secondary mb-1">
                                        Passion
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        Deep Learning & Object Detection
                                    </p>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="glass-card p-4 text-center border border-accent/30"
                                >
                                    <div className="text-3xl mb-2">💡</div>
                                    <h4 className="font-poppins font-semibold text-accent mb-1">
                                        Goal
                                    </h4>
                                    <p className="text-sm text-gray-400">
                                        Build Intelligent Systems
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
