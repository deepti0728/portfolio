import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { personal } = portfolioData;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission (replace with actual EmailJS or FormSubmit integration)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20 relative">
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
                        Get In <span className="gradient-text">Touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-center text-gray-300 font-inter mb-12 max-w-2xl mx-auto"
                    >
                        Want to collaborate or discuss a project? Feel free to reach out!
                    </motion.p>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl font-bold font-poppins mb-6">
                                Contact Information
                            </h3>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 glass-card p-4"
                            >
                                <div className="text-primary text-2xl">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-inter">Email</p>
                                    <a
                                        href={`mailto:${personal.email}`}
                                        className="text-white font-inter hover:text-primary transition-colors"
                                    >
                                        {personal.email}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 glass-card p-4"
                            >
                                <div className="text-secondary text-2xl">
                                    <FaPhone />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-inter">Phone</p>
                                    <a
                                        href={`tel:${personal.phone}`}
                                        className="text-white font-inter hover:text-secondary transition-colors"
                                    >
                                        {personal.phone}
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                className="flex items-center gap-4 glass-card p-4"
                            >
                                <div className="text-accent text-2xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-inter">Location</p>
                                    <p className="text-white font-inter">{personal.location}</p>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-inter font-medium mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 text-white font-inter transition-all"
                                        placeholder="Your Name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-inter font-medium mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 text-white font-inter transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-inter font-medium mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg bg-dark-surface border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 text-white font-inter transition-all resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={status === 'sending'}
                                    className="w-full btn-primary py-3 rounded-lg font-poppins font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {status === 'sending' ? (
                                        'Sending...'
                                    ) : status === 'success' ? (
                                        '✓ Message Sent!'
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
