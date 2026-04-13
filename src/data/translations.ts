import { Translation } from '@/types';

export const translations: Record<'es' | 'en', Translation> = {
  es: {
    nav: {
      about: 'Acerca de mí',
      projects: 'Proyectos',
      education: 'Estudios',
      Testimonials: 'Testimonios',
      contact: 'Contacto',
    },
    hero: {
      quote: 'Las ideas solo cambian el mundo cuando alguien decide construirlas.',
      subtitle: 'Ingeniero de Software · Desarrollador Full Stack',
      description:
        'Transformo ideas en experiencias digitales que no solo funcionan, sino que conectan, impactan y resuelven problemas reales.',
      downloadCV: 'Descargar CV',
      viewProjects: 'Ver Proyectos',
      available: 'Freelancer',
    },
    about: {
      title: 'Acerca de mí',
      p1: 'Soy ingeniero de software enfocado en el desarrollo de soluciones tecnológicas que generan valor real, optimizan procesos y mejoran la experiencia de los usuarios. Combino pensamiento analítico, capacidad de adaptación y aprendizaje continuo para diseñar y construir productos digitales eficientes, escalables y alineados con objetivos de negocio.',
      p2: 'Durante mi formación he fortalecido competencias en desarrollo web, integración de APIs y gestión de bases de datos, trabajando bajo principios de calidad, buenas prácticas y trabajo colaborativo. Me caracterizo por mi compromiso, atención al detalle y enfoque en entregar soluciones sólidas, bien estructuradas y orientadas a resultados.',
      p3: '',
      traits: ['Trabajo en equipo', 'Aprendizaje continuo', 'Atención al detalle', 'Código limpio', 'Responsable'],
      badge: 'Full Stack',
    },
    projects: {
      title: 'Mis Proyectos',
      items: [
        {
          title: 'Lista de Reproducción Música',
          desc: 'Aplicación web de lista de reproducción de canciones implementada con listas doblemente enlazadas en TypeScript.',
          image: 'https://i.imgur.com/wvkjdsf.jpg',
        },
        {
          title: 'VitalApp',
          desc: 'Aplicación web de triaje médico desarrollada para priorizar la atención de pacientes mediante la clasificación de síntomas y niveles de urgencia.',
          image: 'https://i.imgur.com/MH9i2Rx.jpg',
        },
        {
          title: 'Mentes Creativas',
          desc: 'Landing page desarrollada con React y Vite para el aprendizaje de pruebas unitarias con Jest e integración continua mediante GitHub Actions.',
          image: 'https://i.imgur.com/qHBVGzo.jpg',
        },
      ],
    },
    education: {
      title: 'Estudios & Experiencia',
      studiesLabel: 'Estudios',
      experienceLabel: 'Experiencia',
      studies: [
        {
          period: '2022 — Presente',
          title: 'Ingeniería de Software',
          institution: 'Universidad Cooperativa de Colombia',
          desc: 'Formación integral en desarrollo de software, arquitectura de sistemas, bases de datos y metodologías ágiles.',
        },
        {
          period: '2024',
          title: 'Bootcamp Análisis de Datos Nivel Avanzado',
          institution: 'UTP',
          desc: 'Comprende Big Data, análisis a escala y visualización avanzada del Dashboarding.',
        },
        {
          period: '2022',
          title: 'Fundamentos del desarrollo web: Full Stack',
          institution: 'LinkedIn Learning',
          desc: 'Introducción al desarrollo web, abarcando frontend, backend y el rol del desarrollador full stack.',
        },
        {
          period: '2022',
          title: 'GitHub para programadores',
          institution: 'LinkedIn Learning',
          desc: 'Introducción a Git y GitHub para el control de versiones y trabajo colaborativo.',
        },
      ],
      experience: [
        {
          period: '2023',
          title: 'Desarrollador Full Stack',
          company: 'Startups INVENTAS-APP',
          desc: 'Mantenimiento y actualización de la aplicación web, asegurando su correcto funcionamiento y mejora continua.',
        },
      ],
    },
    testimonials: {
      title: 'Testimonios',
      items: [
        {
          name: 'María González',
          role: 'CEO - Tech Corp',
          initial: 'M',
          text: 'Trabajar con Diery fue una experiencia excepcional. Su profesionalismo y habilidades técnicas son sobresalientes.',
        },
        {
          name: 'Carlos Rodríguez',
          role: 'CTO - Innovation Labs',
          initial: 'C',
          text: 'Un desarrollador altamente capacitado con gran atención al detalle. Su capacidad para resolver problemas complejos es admirable.',
        },
        {
          name: 'Ana Martínez',
          role: 'Product Manager - Digital Solutions',
          initial: 'A',
          text: 'Diery demostró excelente conocimiento técnico y creatividad en cada proyecto. Es un profesional confiable.',
        },
        {
          name: 'Jorge Pérez',
          role: 'Lead Developer - StartUp X',
          initial: 'J',
          text: 'Excelente compañero con sólidas habilidades full stack. Su código es limpio, bien documentado y fácil de mantener.',
        },
      ],
    },
    hobbies: {
      title: 'Hobbies',
      items: ['Fútbol', 'Música', 'Ajedrez', 'Lectura', 'Ciclismo', 'Viajes', 'Código', 'Café'],
      movies: 'Películas',
    },
    contact: {
      title: 'Contáctame',
      description:
        '¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible para proyectos freelance, prácticas o posiciones de desarrollo. ¡Escríbeme!',
      form: {
        fullName: 'Nombre completo',
        email: 'Email',
        subject: 'Asunto',
        message: 'Mensaje',
        placeholders: {
          fullName: 'Juan Pérez',
          email: 'juan@ejemplo.com',
          subject: 'Propuesta de proyecto',
          message: 'Cuéntame sobre tu proyecto...',
        },
        send: 'Enviar Mensaje',
      },
    },
    footer: {
      tagline: 'Construyendo el futuro, una línea de código a la vez.',
      description:
        'Desarrollador Full Stack apasionado por crear experiencias digitales de alto impacto. Abierto a nuevas oportunidades y colaboraciones.',
      navTitle: 'Navegación',
      links: ['Proyectos', 'Estudios', 'Testimonios', 'Contacto'],
      contactTitle: 'Contacto',
      socialTitle: 'Sígueme',
      location: 'Pasto, Nariño · Colombia',
      copyright: '© 2026 Diery Valencia. Todos los derechos reservados.',
      university: 'Universidad Cooperativa de Colombia — Ingeniería de Software',
      available: 'Disponible para proyectos',
    },
  },
  en: {
    nav: {
      about: 'About Me',
      projects: 'Projects',
      education: 'Education',
      Testimonials: 'Testimonials',
      contact: 'Contact',
    },
    hero: {
      quote: 'Ideas only change the world when someone decides to build them.',
      subtitle: 'Software Engineer · Full Stack Developer',
      description: 'I transform ideas into digital experiences that don\'t just work — they connect, make an impact, and solve real problems.',
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
      available: 'Freelancer',
    },
    about: {
      title: 'About Me',
      p1: 'I\'m a software engineer focused on developing technological solutions that generate real value, optimize processes and improve user experience. I combine analytical thinking, adaptability and continuous learning to design and build efficient, scalable digital products aligned with business objectives.',
      p2: 'Throughout my education I have strengthened skills in web development, API integration and database management, working under principles of quality, best practices and collaborative work. I\'m committed, detail-oriented and focused on delivering solid, well-structured, results-driven solutions.',
      p3: '',
      traits: ['Teamwork', 'Continuous learning', 'Attention to detail', 'Clean code', 'Responsible'],
      badge: 'Full Stack',
    },
    projects: {
      title: 'My Projects',
      items: [
        {
          title: 'Music Playlist',
          desc: 'Web application for song playlists implemented with doubly linked lists in TypeScript.',
          image: 'https://i.imgur.com/wvkjdsf.jpg',
        },
        {
          title: 'VitalApp',
          desc: 'Medical triage web application developed to prioritize patient care by classifying symptoms and urgency levels.',
          image: 'https://i.imgur.com/MH9i2Rx.jpg',
        },
        {
          title: 'Mentes Creativas',
          desc: 'Landing page built with React and Vite for learning unit testing with Jest and continuous integration via GitHub Actions.',
          image: 'https://i.imgur.com/qHBVGzo.jpg',
        },
      ],
    },
    education: {
      title: 'Education & Experience',
      studiesLabel: 'Education',
      experienceLabel: 'Experience',
      studies: [
        {
          period: '2022 — Present',
          title: 'Software Engineering',
          institution: 'Universidad Cooperativa de Colombia',
          desc: 'Comprehensive training in software development, system architecture, databases, and agile methodologies.',
        },
        {
          period: '2024',
          title: 'Advanced Data Analysis Bootcamp',
          institution: 'UTP',
          desc: 'Covers Big Data, large-scale analysis and advanced dashboard visualization.',
        },
        {
          period: '2022',
          title: 'Web Development Fundamentals: Full Stack',
          institution: 'LinkedIn Learning',
          desc: 'Introduction to web development covering frontend, backend and the full stack developer role.',
        },
        {
          period: '2022',
          title: 'GitHub for Developers',
          institution: 'LinkedIn Learning',
          desc: 'Introduction to Git and GitHub for version control and collaborative development.',
        },
      ],
      experience: [
        {
          period: '2023',
          title: 'Full Stack Developer',
          company: 'Startups INVENTAS-APP',
          desc: 'Maintenance and update of the web application, ensuring its correct operation and continuous improvement.',
        },
      ],
    },
    testimonials: {
      title: 'Testimonials',
      items: [
        {
          name: 'María González',
          role: 'CEO - Tech Corp',
          initial: 'M',
          text: 'Working with Diery was an exceptional experience. His professionalism and technical skills are outstanding.',
        },
        {
          name: 'Carlos Rodríguez',
          role: 'CTO - Innovation Labs',
          initial: 'C',
          text: 'A highly skilled developer with great attention to detail. His ability to solve complex problems is admirable.',
        },
        {
          name: 'Ana Martínez',
          role: 'Product Manager - Digital Solutions',
          initial: 'A',
          text: 'Diery demonstrated excellent technical knowledge and creativity. He is a reliable professional.',
        },
        {
          name: 'Jorge Pérez',
          role: 'Lead Developer - StartUp X',
          initial: 'J',
          text: 'Excellent teammate with solid full stack skills. His code is clean, well-documented and easy to maintain.',
        },
      ],
    },
    hobbies: {
      title: 'Hobbies',
      items: ['Football', 'Music', 'Chess', 'Reading', 'Cycling', 'Travel', 'Coding', 'Coffee'],
      movies: 'Movies',
    },
    contact: {
      title: 'Contact Me',
      description: 'Have a project in mind or want to collaborate? I\'m available for freelance projects, internships, or development positions. Write to me!',
      form: {
        fullName: 'Full Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        placeholders: {
          fullName: 'John Doe',
          email: 'john@example.com',
          subject: 'Project Proposal',
          message: 'Tell me about your project...',
        },
        send: 'Send Message',
      },
    },
    footer: {
      tagline: 'Building the future, one line of code at a time.',
      description:
        'Full Stack Developer passionate about creating high-impact digital experiences. Open to new opportunities and collaborations.',
      navTitle: 'Navigation',
      links: ['Projects', 'Education', 'Testimonials', 'Contact'],
      contactTitle: 'Contact',
      socialTitle: 'Follow me',
      location: 'Pasto, Nariño · Colombia',
      copyright: '© 2026 Diery Valencia. All rights reserved.',
      university: 'Universidad Cooperativa de Colombia — Software Engineering',
      available: 'Available for projects',
    },
  },
};
