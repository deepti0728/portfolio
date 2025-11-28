import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
    const { personal, social } = portfolioData;
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, url: social.github, color: 'hover:text-primary' },
        { icon: FaLinkedin, url: social.linkedin, color: 'hover:text-secondary' },
        { icon: FaEnvelope, url: social.email, color: 'hover:text-accent' },
    ];

    return (
        <footer className="relative py-12 border-t border-primary/20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-center space-y-6">
                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`text-gray-400 ${link.color} transition-all duration-300 p-3 glass-card rounded-full`}
                            >
                                <link.icon size={24} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-inter">
                        <a
                            href="#home"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-primary transition-colors"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-gray-400 font-inter text-sm flex items-center justify-center gap-2">
                            © {currentYear} {personal.name}. Made with{' '}
                            <motion.span
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                            >
                                <FaHeart className="text-red-500" />
                            </motion.span>{' '}
                            and React
                        </p>
                        <p className="text-gray-500 font-inter text-xs mt-2">
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-primary opacity-5 blur-3xl" />
        </footer>
    );
};

export default Footer;
