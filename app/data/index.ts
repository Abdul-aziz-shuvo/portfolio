import { Project, Skill } from '../types';
import {
    DiReact, DiMysql, DiHtml5, DiCss3, DiPostgresql, DiGit
} from 'react-icons/di';
import {
    SiNextdotjs, SiRedux, SiTailwindcss, SiLaravel
} from 'react-icons/si';
import React from 'react';

export const projects: Project[] = [
    {
        title: "Modern Portfolio Website",
        description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and dark mode.",
        image: "/projects/portfolio.jpg",
        technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://your-portfolio.com",
        githubUrl: "https://github.com/yourusername/portfolio"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce platform with user authentication, payment processing, and admin dashboard.",
        image: "/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "https://your-ecommerce.com",
        githubUrl: "https://github.com/yourusername/ecommerce"
    },
    {
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team features.",
        image: "/projects/taskmanager.jpg",
        technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
        liveUrl: "https://your-taskmanager.com",
        githubUrl: "https://github.com/yourusername/taskmanager"
    }
];

export const skills: Skill[] = [
    {
        name: "React.js",
        icon: React.createElement(DiReact, {
            className: "text-[#61DAFB]",
            size: 32
        })
    },
    {
        name: "Next.js",
        icon: React.createElement(SiNextdotjs, {
            className: "text-black dark:text-white",
            size: 32
        })
    },
    {
        name: "Redux",
        icon: React.createElement(SiRedux, {
            className: "text-[#764ABC]",
            size: 32
        })
    },
    {
        name: "Laravel",
        icon: React.createElement(SiLaravel, {
            className: "text-[#FF2D20]",
            size: 32
        })
    },
    {
        name: "MySQL",
        icon: React.createElement(DiMysql, {
            className: "text-[#4479A1]",
            size: 32
        })
    },
    {
        name: "PostgreSQL",
        icon: React.createElement(DiPostgresql, {
            className: "text-[#336791]",
            size: 32
        })
    },
    {
        name: "Tailwind CSS",
        icon: React.createElement(SiTailwindcss, {
            className: "text-[#06B6D4]",
            size: 32
        })
    },
    {
        name: "CSS3",
        icon: React.createElement(DiCss3, {
            className: "text-[#1572B6]",
            size: 32
        })
    },
    {
        name: "HTML5",
        icon: React.createElement(DiHtml5, {
            className: "text-[#E34F26]",
            size: 32
        })
    },
    {
        name: "Git",
        icon: React.createElement(DiGit, {
            className: "text-[#F05032]",
            size: 32
        })
    }
]; 