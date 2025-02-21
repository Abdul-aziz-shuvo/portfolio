'use client';
import { motion } from 'framer-motion';
import { Skill } from '../types';

interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <motion.section
            id="skills"
            className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
                Skills & Technologies
            </h2>
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="text-center"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="w-20 h-20 mx-auto mb-4 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                            {skill.icon}
                        </div>
                        <h3 className="font-medium text-gray-900 dark:text-white">
                            {skill.name}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
} 