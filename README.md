# 🚀 Portfolio Profesional - Vue 3

[![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)

Portfolio profesional desarrollado con Vue 3, TypeScript y Vite. Un sitio web moderno y responsivo que presenta mis habilidades, proyectos y experiencia profesional.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional
- **📱 Responsive Design**: Adaptado a todos los dispositivos (móvil, tablet, desktop)
- **🌙 Dark Mode**: Tema claro/oscuro con persistencia
- **⚡ Animaciones Fluidas**: Transiciones suaves entre secciones
- **🔍 SEO Optimizado**: Meta tags y estructura semántica
- **♿ Accesible**: Cumple con estándares de accesibilidad web
- **🧪 Testing Completo**: Unit tests con Vitest y E2E con Cypress
- **🚀 CI/CD**: Deploy automático con GitHub Actions

## 🛠️ Stack Tecnológico

### Frontend
- **Vue 3** - Framework progresivo de JavaScript
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Build tool rápido y moderno
- **Vue Router** - Enrutamiento para SPA
- **Pinia** - Gestión de estado reactivo

### Herramientas de Desarrollo
- **ESLint** - Linter para mantener código consistente
- **Prettier** - Formateador de código automático
- **Vitest** - Framework de testing unitario
- **Cypress** - Testing end-to-end
- **FontAwesome** - Iconos vectoriales

### DevOps
- **GitHub Actions** - CI/CD pipeline
- **GitHub Pages** - Hosting estático

## 📋 Secciones del Portfolio

- **🏠 Home**: Presentación profesional y llamada a la acción
- **👨‍💻 About**: Información personal, experiencia y formación
- **🎯 Skills**: Habilidades técnicas y competencias blandas
- **💼 Projects**: Showcase de proyectos destacados
  - eccoate_gest - Sistema de gestión
  - domosto - Plataforma web
  - gastos - Aplicación de finanzas personales
- **📧 Contact**: Formulario de contacto y enlaces sociales

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/devWilliamVel/portfolio-vue3.git

# Navegar al directorio
cd portfolio-vue3

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint

# Tests unitarios
npm run test:unit

# Tests E2E (modo interactivo)
npm run test:e2e:dev

# Tests E2E (modo headless)
npm run test:e2e

# Formatear código
npm run format
```

## 📁 Estructura del Proyecto

```
portfolio-vue3/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── views/            # Páginas/vistas principales
│   ├── router/           # Configuración de rutas
│   ├── stores/           # Estado global (Pinia)
│   ├── assets/           # Recursos (CSS, imágenes)
│   ├── composables/      # Lógica reutilizable
│   ├── types/            # Definiciones de TypeScript
│   └── __tests__/        # Tests unitarios
├── cypress/              # Tests E2E
└── dist/                # Build de producción
```

## 🧪 Testing

### Tests Unitarios
```bash
# Ejecutar tests con watch mode
npm run test:unit

# Ejecutar tests con coverage
npm run test:unit -- --coverage
```

### Tests E2E
```bash
# Modo desarrollo (interfaz gráfica)
npm run test:e2e:dev

# Modo producción (headless)
npm run test:e2e
```

## 🚀 Deployment

El proyecto se deploya automáticamente en GitHub Pages mediante GitHub Actions cada vez que se hace push a la rama `main`.

### Manual Deployment
```bash
# Build del proyecto
npm run build

# Los archivos están listos en la carpeta dist/
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

**William Velásquez**
- 📧 Email: [tu-email@ejemplo.com](mailto:tu-email@ejemplo.com)
- 💼 LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- 🐱 GitHub: [@devWilliamVel](https://github.com/devWilliamVel)
- 🌐 Portfolio: [tu-portfolio.com](https://tu-portfolio.com)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!
