'use client';
import { motion } from 'framer-motion';
import { TechIcons } from './TechIcons';

interface HeroSectionProps {
    scrollToContact: () => void;
}

export default function HeroSection({ scrollToContact }: HeroSectionProps) {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 px-4"
        >
            <TechIcons />

            <div className="relative z-10 w-full max-w-4xl">
                <div className="text-center backdrop-blur-sm py-12 md:py-20 px-6 md:px-10 rounded-2xl">
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-500"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Abdul Aziz
                    </motion.h2>
                    <motion.h3
                        className="text-xl md:text-2xl text-indigo-500 dark:text-cyan-400 mb-6 md:mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Full Stack Developer
                    </motion.h3>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.button
                            onClick={scrollToContact}
                            className="group relative px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full font-medium text-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 bg-white/30 group-hover:translate-x-full duration-300 ease-out transition-transform"></span>
                            <span className="relative flex items-center justify-center gap-2">
                                Hire Me
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </motion.button>
                        <motion.a
                            href="/your-cv.pdf"
                            download
                            className="group relative px-6 sm:px-8 py-3 bg-transparent border-2 border-indigo-600 dark:border-cyan-500 rounded-full font-medium text-indigo-600 dark:text-cyan-400 overflow-hidden hover:text-white transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300"></span>
                            <span className="relative flex items-center justify-center gap-2">
                                Download CV
                                <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </span>
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
} 