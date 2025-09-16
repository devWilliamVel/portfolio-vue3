# Components

Esta carpeta contiene todos los componentes reutilizables del proyecto.

## Estructura:

### `/ui`
Componentes de interfaz de usuario básicos y reutilizables:
- Botones, inputs, modals, cards, etc.
- No contienen lógica de negocio específica
- Son altamente reutilizables

### `/layout` 
Componentes de layout y estructura:
- Header, Footer, Navigation, Sidebar
- Wrappers y containers principales

## Convenciones de nombres:
- **PascalCase** para nombres de archivos: `MyButton.vue`
- **PascalCase** para nombres de componentes: `<MyButton />`
- Usar prefijos descriptivos: `App`, `Base`, `The` cuando sea apropiado

## Ejemplo:
```vue
<template>
  <button :class="buttonClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
// Component logic here
</script>
```