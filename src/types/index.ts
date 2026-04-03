import type React from 'react';

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';

export interface Translation {
  nav: {
    about: string;
    projects: string;
    education: string;
    contact: string;
    Testimonials: string;
  };
  hero: {
    quote: string;
    subtitle: string;
    description: string;
    downloadCV: string;
    viewProjects: string;
    available: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    traits: string[];
    badge: string;
  };
  projects: {
    title: string;
    items: Array<{
      title: string;
      desc: string;
      image: string;
    }>;
  };
  education: {
    title: string;
    studiesLabel: string;
    experienceLabel: string;
    studies: Array<{
      period: string;
      title: string;
      institution: string;
      desc: string;
    }>;
    experience: Array<{
      period: string;
      title: string;
      company: string;
      desc: string;
    }>;
  };
  testimonials: {
    title: string;
    items: Array<{
      name: string;
      role: string;
      initial: string;
      text: string;
    }>;
  };
  hobbies: {
    title: string;
    items: string[];
    movies: string;
  };
  contact: {
    title: string;
    description: string;
    form: {
      fullName: string;
      email: string;
      subject: string;
      message: string;
      placeholders: {
        fullName: string;
        email: string;
        subject: string;
        message: string;
      };
      send: string;
    };
  };
  footer: {
    tagline: string;
    description: string;
    navTitle: string;
    links: string[];
    contactTitle: string;
    socialTitle: string;
    location: string;
    copyright: string;
    university: string;
    available: string;
  };
}

export interface Project {
  tags: string[];
  color: string;
  github: string;
  demo: string;
}

export interface Technology {
  icon: React.ElementType;
  label: string;
  color: string;
}

export interface Hobby {
  icon: React.ElementType;
  color: string;
}
