'use client';
import { motion } from 'framer-motion';
import {
    DiReact,
    DiMysql,
    DiHtml5,
    DiCss3,
    DiPostgresql
} from 'react-icons/di';
import {
    SiNextdotjs,
    SiRedux,
    SiTailwindcss,
    SiLaravel
} from 'react-icons/si';

export function TechIcons() {
    return (
        <div className="absolute inset-0 top-24 pointer-events-none">
            {[
                { icon: DiReact, color: '#61DAFB', delay: 0, name: 'React.js' },
                { icon: SiNextdotjs, color: '#000000', delay: 0.1, name: 'Next.js' },
                { icon: SiRedux, color: '#764ABC', delay: 0.2, name: 'Redux' },
                { icon: SiLaravel, color: '#FF2D20', delay: 0.3, name: 'Laravel' },
                { icon: DiMysql, color: '#4479A1', delay: 0.4, name: 'MySQL' },
                { icon: DiPostgresql, color: '#336791', delay: 0.5, name: 'PostgreSQL' },
                { icon: SiTailwindcss, color: '#06B6D4', delay: 0.6, name: 'Tailwind CSS' },
                { icon: DiCss3, color: '#1572B6', delay: 0.7, name: 'CSS3' },
                { icon: DiHtml5, color: '#E34F26', delay: 0.8, name: 'HTML5' }
            ].map((tech, index, array) => {
                // Calculate position in circle
                const angle = (index / array.length) * Math.PI * 2;
                const radius = 220; // Slightly larger radius to accommodate more icons
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <motion.div
                        key={index}
                        className="absolute left-1/2 top-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: 0.2,
                            scale: 1,
                            x: x,
                            y: y
                        }}
                        transition={{
                            delay: tech.delay,
                            duration: 0.5
                        }}
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="relative group"
                        >
                            <tech.icon
                                size={45}
                                color={tech.color}
                                className="dark:opacity-60"
                            />
                            {/* Tooltip */}
                            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                                {tech.name}
                            </span>
                        </motion.div>
                    </motion.div>
                );
            })}
        </div>
    );
} 