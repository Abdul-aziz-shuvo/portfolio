'use client';
import { motion } from 'framer-motion';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface NavbarProps {
    isDark: boolean;
    toggleTheme: () => void;
    handleNavigation: (item: string) => void;
}

export default function Navbar({ isDark, toggleTheme, handleNavigation }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full top-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl tracking-wider font-bold bg-gradient-to-r from-indigo-600 to-cyan-400 bg-clip-text text-transparent"
                >
                    Portfolio
                </motion.div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    >
                        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </motion.button>

                    <div className="flex gap-8">
                        {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                            <motion.button
                                key={item}
                                onClick={() => handleNavigation(item)}
                                className="text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {item}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={false}
                animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
                className={`md:hidden overflow-hidden bg-white dark:bg-gray-900`}
            >
                <div className="px-4 py-2">
                    {['About', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                        <motion.button
                            key={item}
                            onClick={() => {
                                handleNavigation(item);
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left py-3 text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors cursor-pointer border-b border-gray-100 dark:border-gray-800"
                            whileTap={{ scale: 0.98 }}
                        >
                            {item}
                        </motion.button>
                    ))}
                    <div className="py-3 flex justify-between items-center">
                        <span className="text-gray-800 dark:text-gray-200">Dark Mode</span>
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                        >
                            {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
} 