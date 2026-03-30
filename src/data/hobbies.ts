import { Hobby } from '@/types';
import {
  FaFutbol,
  FaMusic,
  FaChess,
  FaBook,
  FaBicycle,
  FaPlane,
  FaCode,
  FaCoffee,
} from 'react-icons/fa';

export const hobbyIcons: Hobby[] = [
  { icon: FaFutbol, color: 'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400' },
  { icon: FaMusic, color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400' },
  { icon: FaChess, color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400' },
  { icon: FaBook, color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' },
  { icon: FaBicycle, color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' },
  { icon: FaPlane, color: 'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400' },
  { icon: FaCode, color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400' },
  { icon: FaCoffee, color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' },
];
