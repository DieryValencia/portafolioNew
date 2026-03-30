import { Technology } from '@/types';
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
} from 'react-icons/si';

export const technologies: Technology[] = [
  { icon: FaReact, label: 'React', color: '#61DAFB' },
  { icon: FaNodeJs, label: 'Node.js', color: '#68A063' },
  { icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { icon: SiTailwindcss, label: 'Tailwind', color: '#38BDF8' },
  { icon: SiMongodb, label: 'MongoDB', color: '#47A248' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: '#336791' },
  { icon: FaPython, label: 'Python', color: '#F7C93B' },
  { icon: FaDocker, label: 'Docker', color: '#2496ED' },
  { icon: SiNextdotjs, label: 'Next.js', color: '#888888' },
  { icon: SiGraphql, label: 'GraphQL', color: '#E10098' },
  { icon: FaAws, label: 'AWS', color: '#FF9900' },
  { icon: SiFirebase, label: 'Firebase', color: '#FFCA28' },
];
