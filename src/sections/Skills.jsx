import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { skills } = portfolioData;

    const skillCategories = [
        { title: 'Programming', items: skills.programming, color: 'primary' },
        { title: 'ML & Deep Learning', items: skills.mlDl, color: 'secondary' },
        { title: 'Frameworks', items: skills.frameworks, color: 'accent' },
        { title: 'Tools', items: skills.tools, color: 'primary' },
        { title: 'Databases', items: skills.databases, color: 'secondary' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4 },
        },
    };

    return (
        <section id="skills" className="py-20 relative">
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
                        Technical <span className="gradient-text">Skills</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12"
                    />

                    {/* Skills Grid */}
                    <div className="max-w-6xl mx-auto space-y-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                                className="glass-card p-6"
                            >
                                <h3 className="text-xl md:text-2xl font-semibold font-poppins mb-4 text-white">
                                    {category.title}
                                </h3>
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isInView ? 'visible' : 'hidden'}
                                    className="flex flex-wrap gap-3"
                                >
                                    {category.items.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            variants={itemVariants}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: `0 0 20px rgba(${category.color === 'primary'
                                                        ? '108, 99, 255'
                                                        : category.color === 'secondary'
                                                            ? '162, 123, 255'
                                                            : '0, 228, 255'
                                                    }, 0.6)`,
                                            }}
                                            className={`px-4 py-2 rounded-full font-inter font-medium text-sm md:text-base
                        ${category.color === 'primary'
                                                    ? 'bg-primary/20 text-primary border border-primary/50'
                                                    : category.color === 'secondary'
                                                        ? 'bg-secondary/20 text-secondary border border-secondary/50'
                                                        : 'bg-accent/20 text-accent border border-accent/50'
                                                }
                        transition-all duration-300 cursor-pointer`}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
