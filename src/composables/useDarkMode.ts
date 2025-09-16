import { ref, computed, watch, onMounted } from 'vue'
import { useLocalStorage } from './useLocalStorage'
import type { ThemeMode } from '@/types'

/**
 * Composable para manejar el tema oscuro/claro
 * Incluye persistencia en localStorage y detección del tema del sistema
 */
export function useDarkMode() {
  // Obtener preferencia guardada o usar 'system' como default
  const { value: storedTheme, setValue: setStoredTheme } = useLocalStorage<ThemeMode>('theme', 'system')
  
  // Estado reactivo del tema actual
  const currentTheme = ref<ThemeMode>(storedTheme.value)
  
  // Detectar preferencia del sistema
  const prefersDark = ref(false)
  
  // Computed para determinar si está activo el modo oscuro
  const isDark = computed(() => {
    if (currentTheme.value === 'system') {
      return prefersDark.value
    }
    return currentTheme.value === 'dark'
  })
  
  // Aplicar el tema al DOM
  const applyTheme = (theme: 'light' | 'dark') => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    
    // Opcional: cambiar también la clase para compatibilidad
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }
  
  // Función para cambiar el tema
  const setTheme = (theme: ThemeMode) => {
    currentTheme.value = theme
    setStoredTheme(theme)
  }
  
  // Toggle entre light y dark (sin usar system)
  const toggleTheme = () => {
    const newTheme = isDark.value ? 'light' : 'dark'
    setTheme(newTheme)
  }
  
  // Función para ciclar entre todos los temas
  const cycleTheme = () => {
    const themes: ThemeMode[] = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(currentTheme.value)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }
  
  // Detectar cambios en la preferencia del sistema
  const updateSystemPreference = () => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      prefersDark.value = mediaQuery.matches
      
      // Listener para cambios en la preferencia del sistema
      const handler = (e: MediaQueryListEvent) => {
        prefersDark.value = e.matches
      }
      
      mediaQuery.addEventListener('change', handler)
      
      // Cleanup function
      return () => mediaQuery.removeEventListener('change', handler)
    }
  }
  
  // Watcher para aplicar cambios de tema
  watch(
    isDark,
    (newIsDark) => {
      applyTheme(newIsDark ? 'dark' : 'light')
    },
    { immediate: true }
  )
  
  // Setup inicial
  onMounted(() => {
    const cleanup = updateSystemPreference()
    
    // Aplicar tema inicial
    applyTheme(isDark.value ? 'dark' : 'light')
    
    // Retornar función de cleanup
    return cleanup
  })
  
  return {
    // Estado
    currentTheme: computed(() => currentTheme.value),
    isDark,
    prefersDark: computed(() => prefersDark.value),
    
    // Acciones
    setTheme,
    toggleTheme,
    cycleTheme,
    
    // Utilidades
    isSystem: computed(() => currentTheme.value === 'system'),
    themeIcon: computed(() => {
      if (currentTheme.value === 'system') return 'fa-circle-half-stroke'
      return isDark.value ? 'fa-moon' : 'fa-sun'
    }),
    themeLabel: computed(() => {
      const labels = {
        light: 'Tema Claro',
        dark: 'Tema Oscuro',
        system: 'Sistema'
      }
      return labels[currentTheme.value]
    })
  }
}