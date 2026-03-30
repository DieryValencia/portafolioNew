# 🦊 Portafolio Profesional - Diery Valencia

Portafolio Personal moderno y responsive construido con **Next.js 16**, **TypeScript** y **Tailwind CSS**, listo para despliegue en Vercel.

## ✨ Características

- ✅ **Diseño Responsivo** - Funciona perfectamente en móvil, tablet y escritorio
- ✅ **Modo Oscuro/Claro** - Soporte completo para ambos temas con animaciones suaves
- ✅ **Multiidioma** - Soporte para Español e Inglés
- ✅ **Componentes Reutilizables** - Código modular y escalable
- ✅ **Animaciones Suaves** - Efectos visuales profesionales y optimizados
- ✅ **Semántica HTML** - Código accesible y bien estructurado
- ✅ **TypeScript Completo** - Type-safe en toda la aplicación
- ✅ **Optimizado para SEO** - Metadatos y estructura correcta


## 🎨 Secciones

1. **Hero** - Presentación impactante con animaciones flotantes
2. **Acerca de mí** - Información personal con foto decorativa
3. **Proyectos** - Carrusel interactivo de proyectos
4. **Stack Tecnológico** - Tecnologías y herramientas usadas
5. **Estudios & Experiencia** - Timeline de educación y experiencia laboral
6. **Testimonios** - Carrusel de testimonios
7. **Hobbies** - Sección de intereses personales
8. **Contacto** - Formulario de contacto y datos
9. **Footer** - Enlaces de redes sociales

## 🛠️ Tecnologías

- **Next.js 16** - React framework moderno con App Router
- **TypeScript** - Type safety y mejor DX
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Iconos de alta calidad
- **React Icons** - Librería de iconos adicionales (Font Awesome, Simpleicons)
- **Next.js Image** - Optimización de imágenes

## 📦 Instalación y Desarrollo

### Requisitos previos
- Node.js 18+ y npm

### Instalación

```bash
# Clonar o descargar el proyecto
cd portafolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

### Acceso en desarrollo
El sitio estará disponible en:

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css           # Estilos globales y animaciones
│   ├── layout.tsx            # Layout raíz con metadatos
│   └── page.tsx              # Página principal
├── components/               # Componentes reutilizables
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Technologies.tsx
│   ├── Education.tsx
│   ├── Testimonials.tsx
│   ├── Hobbies.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── FloatingObjects.tsx
│   └── UIComponents.tsx
├── data/                     # Datos y constantes
│   ├── translations.ts       # Textos multiidioma (ES/EN)
│   ├── projects.ts
│   ├── technologies.ts
│   ├── hobbies.ts
│   └── constants.ts
├── hooks/                    # Custom hooks
│   └── useSlider.ts
└── types/                    # Definiciones de tipos TypeScript
    └── index.ts
```

## 🎯 Características Principales

### Tema Dinámico
- Cambio entre modo claro y oscuro sin recargar la página
- Colores y estilos personalizados según el tema

### Multiidioma
- Español e Inglés como idiomas principales
- Contenido completamente traducido
- Cambio de idioma en tiempo real

### Navegación
- Header fijo y responsivo
- Menú mobile con hamburguesa
- Enlaces de navegación suave
- Scroll a secciones

### Animaciones
- Objetos flotantes en el hero
- Carruseles interactivos con puntos indicadores
- Transiciones suaves de tema
- Efectos hover en botones y tarjetas

### Formulario de Contacto
- Campos validados
- Diseño intuitivo
- Datos de contacto disponibles (Email, WhatsApp, GitHub)

## 📝 Personalización

### Modificar contenido
- Editar `src/data/translations.ts` para cambiar textos en ES/EN
- Actualizar `src/data/projects.ts` con tus proyectos
- Modificar `src/data/constants.ts` con tus datos personales

### Cambiar colores
Los colores están centralizados en `src/data/constants.ts`:
```typescript
const COLORS = {
  light: { ... },
  dark: { ... }
}
```

### Agregar imágenes
- Reemplazar foto de perfil en `PROFILE_PHOTO`
- Utilizar `next/image` para optimización automática
- Las imágenes se cargan desde URLs externas

## ♿ Accesibilidad

- Texto alternativo en imágenes
- Contraste de colores optimizado
- Navegación por teclado soportada
- Labels en formularios
- Estructura semántica HTML

## 📱 Responsive Design

- Mobile First approach
- Breakpoints: SM (640px), MD (768px), LG (1024px), XL (1280px)
- Flexbox y Grid para layouts
- Menú adaptable en mobile

## 🔧 Mantenimiento

### Dependencias
```bash
# Verificar outdated packages
npm outdated

# Actualizar dependencias
npm update

# Actualizar todo
npm install @latest
```

### Linting y Formatting
```bash
npm run lint  # Ejecutar ESLint
```

## 📄 Autor

Diery Valencia

## 🤝 Contacto

- **Email**: diery.valencia@email.com
- **GitHub**: github.com/dieryvalencia
- **Ubicación**: Pasto, Nariño · Colombia

---

**Construido con ❤️ usando Next.js, TypeScript y Tailwind CSS**
