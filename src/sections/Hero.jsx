import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const { personal, social } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent opacity-5 rounded-full blur-3xl"
                />
            </div>

            {/* Content */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container mx-auto px-4 text-center relative z-10"
            >
                <motion.div variants={itemVariants} className="mb-6">
                    <h2 className="text-lg md:text-xl text-secondary font-inter mb-2">
                        Hi, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins gradient-text mb-4">
                        {personal.name}
                    </h1>
                </motion.div>

                <motion.h3
                    variants={itemVariants}
                    className="text-2xl md:text-3xl lg:text-4xl font-semibold font-poppins text-white mb-6"
                >
                    {personal.heroTitle}
                </motion.h3>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-300 font-inter max-w-3xl mx-auto mb-10"
                >
                    {personal.tagline}
                </motion.p>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center gap-6 mb-10"
                >
                    <motion.a
                        href={social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white hover:text-primary transition-colors p-3 glass-card rounded-full glow-primary"
                    >
                        <FaGithub size={28} />
                    </motion.a>
                    <motion.a
                        href={social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white hover:text-primary transition-colors p-3 glass-card rounded-full glow-primary"
                    >
                        <FaLinkedin size={28} />
                    </motion.a>
                    <motion.a
                        href={social.email}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-white hover:text-primary transition-colors p-3 glass-card rounded-full glow-primary"
                    >
                        <FaEnvelope size={28} />
                    </motion.a>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary px-8 py-3 rounded-lg font-poppins font-semibold"
                    >
                        View Projects
                    </motion.a>
                    <motion.a
                        href={personal.resumeUrl}
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 rounded-lg font-poppins font-semibold glass-card border-2 border-primary hover:bg-primary/20 transition-all"
                    >
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
