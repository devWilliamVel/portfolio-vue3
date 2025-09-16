# Composables

Esta carpeta contiene funciones reutilizables que encapsulan lógica reactiva.

## Funcionalidades principales:

### Planeados:
- `useDarkMode()` - Gestión del tema claro/oscuro
- `useResponsive()` - Manejo de breakpoints responsivos
- `useScrollspy()` - Navegación automática por secciones
- `useIntersectionObserver()` - Animaciones al hacer scroll
- `useLocalStorage()` - Persistencia en localStorage
- `useApi()` - Manejo de llamadas a APIs

## Convenciones:
- **camelCase** con prefijo `use`: `useDarkMode.ts`
- Retornar objetos reactivos y funciones
- Usar TypeScript para tipado fuerte
- Documentar parámetros y retorno

## Ejemplo:
```typescript
import { ref, computed } from 'vue'

export function useDarkMode() {
  const isDark = ref(false)
  
  const toggleTheme = () => {
    isDark.value = !isDark.value
    // Lógica para persistir preferencia
  }
  
  const themeClass = computed(() => 
    isDark.value ? 'dark' : 'light'
  )
  
  return {
    isDark: readonly(isDark),
    toggleTheme,
    themeClass
  }
}
```