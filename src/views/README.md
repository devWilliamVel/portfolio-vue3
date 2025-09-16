# Views

Esta carpeta contiene las páginas principales de la aplicación.

## Estructura del Portfolio:

### Páginas principales:
- `HomeView.vue` - Página de inicio con presentación
- `AboutView.vue` - Información personal y experiencia
- `SkillsView.vue` - Habilidades técnicas y blandas
- `ProjectsView.vue` - Showcase de proyectos
- `ContactView.vue` - Formulario de contacto

## Convenciones:
- **PascalCase** con sufijo `View`: `HomeView.vue`
- Una view por página principal
- Usar Composition API con `<script setup>`
- Importar componentes necesarios

## Ejemplo:
```vue
<template>
  <div class="home-view">
    <AppHeader />
    <main class="main-content">
      <!-- Contenido de la página -->
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { AppHeader, AppFooter } from '@/components/layout'
</script>
```