'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from "next/image";
import { FiMoon, FiSun } from 'react-icons/fi';
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
import { useRouter } from 'next/navigation';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import { projects, skills } from './data';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    // Check system preference or stored preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDark(!isDark);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNavigation = (item: string) => {
    if (item === 'Blog') {
      router.push('/blog');
    } else {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white font-poppins transition-colors duration-200">
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        handleNavigation={handleNavigation}
      />
      <HeroSection scrollToContact={scrollToContact} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection />
      <footer className="bg-gray-50 dark:bg-gray-900 py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p>© 2024 Abdul Aziz. All rights reserved.</p>
      </footer>
    </div>
  );
}
