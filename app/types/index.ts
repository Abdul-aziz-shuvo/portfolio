import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
} 