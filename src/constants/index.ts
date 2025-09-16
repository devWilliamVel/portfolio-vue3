/**
 * Constantes globales del portfolio
 */

// Información personal básica
export const PERSONAL_INFO = {
  name: 'William Velásquez',
  title: 'Desarrollador Full Stack',
  email: 'tu-email@ejemplo.com',
  location: 'Tu Ciudad, País',
  tagline: 'Creando experiencias web excepcionales con tecnologías modernas',
  description: 'Desarrollador apasionado por crear soluciones innovadoras y experiencias de usuario excepcionales.',
} as const

// Enlaces sociales
export const SOCIAL_LINKS = {
  github: 'https://github.com/devWilliamVel',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  twitter: 'https://twitter.com/tu-usuario',
  email: 'mailto:tu-email@ejemplo.com',
  website: 'https://tu-portfolio.com',
} as const

// Secciones del portfolio
export const PORTFOLIO_SECTIONS = {
  home: 'home',
  about: 'about', 
  skills: 'skills',
  projects: 'projects',
  contact: 'contact',
} as const

export const SECTION_LABELS = {
  [PORTFOLIO_SECTIONS.home]: 'Inicio',
  [PORTFOLIO_SECTIONS.about]: 'Acerca de',
  [PORTFOLIO_SECTIONS.skills]: 'Habilidades',
  [PORTFOLIO_SECTIONS.projects]: 'Proyectos',
  [PORTFOLIO_SECTIONS.contact]: 'Contacto',
} as const

// Configuración de animaciones
export const ANIMATION_CONFIG = {
  duration: {
    fast: 200,
    normal: 300,
    slow: 500,
  },
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  delay: {
    none: 0,
    short: 100,
    medium: 200,
    long: 300,
  },
} as const

// Breakpoints (sincronizados con CSS)
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Configuración de la aplicación
export const APP_CONFIG = {
  name: 'Portfolio Vue 3',
  version: '1.0.0',
  author: PERSONAL_INFO.name,
  description: 'Portfolio profesional desarrollado con Vue 3, TypeScript y Vite',
  keywords: ['portfolio', 'vue', 'typescript', 'desarrollador', 'full-stack'],
  url: 'https://tu-portfolio.com',
} as const

// Meta tags por defecto
export const DEFAULT_META = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.description,
  image: '/og-image.jpg',
  url: APP_CONFIG.url,
  type: 'website',
  locale: 'es_ES',
} as const

// Configuración de formularios
export const FORM_CONFIG = {
  contact: {
    maxLength: {
      name: 100,
      email: 254,
      subject: 200,
      message: 2000,
    },
    validation: {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\+]?[\d\s\-\(\)]+$/,
    },
  },
} as const

// Estados de carga y error
export const UI_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error',
} as const

// Iconos FontAwesome comunes
export const ICONS = {
  // Tecnologías
  vue: 'fab fa-vuejs',
  react: 'fab fa-react',
  javascript: 'fab fa-js-square',
  typescript: 'fab fa-js-square', // No hay icono específico, usar JS
  html: 'fab fa-html5',
  css: 'fab fa-css3-alt',
  node: 'fab fa-node-js',
  python: 'fab fa-python',
  
  // Herramientas
  github: 'fab fa-github',
  git: 'fab fa-git-alt',
  docker: 'fab fa-docker',
  aws: 'fab fa-aws',
  
  // UI
  menu: 'fas fa-bars',
  close: 'fas fa-times',
  arrow: 'fas fa-arrow-right',
  external: 'fas fa-external-link-alt',
  download: 'fas fa-download',
  email: 'fas fa-envelope',
  phone: 'fas fa-phone',
  location: 'fas fa-map-marker-alt',
  
  // Temas
  sun: 'fas fa-sun',
  moon: 'fas fa-moon',
  system: 'fas fa-circle-half-stroke',
  
  // Estados
  loading: 'fas fa-spinner',
  success: 'fas fa-check',
  error: 'fas fa-exclamation-triangle',
  warning: 'fas fa-exclamation-circle',
  info: 'fas fa-info-circle',
} as const

// Colores del tema (para uso en JavaScript)
export const THEME_COLORS = {
  primary: '#3b82f6',
  secondary: '#6366f1',
  accent: '#06b6d4',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const