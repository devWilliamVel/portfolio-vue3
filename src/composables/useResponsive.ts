import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Breakpoints estándar del proyecto
 */
const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const

export type Breakpoint = keyof typeof breakpoints

/**
 * Composable para manejar responsive design
 * Proporciona información reactiva sobre el tamaño de pantalla actual
 */
export function useResponsive() {
  const windowWidth = ref(0)
  const windowHeight = ref(0)
  
  // Función para actualizar las dimensiones
  const updateDimensions = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth
      windowHeight.value = window.innerHeight
    }
  }
  
  // Computed para determinar el breakpoint actual
  const currentBreakpoint = computed((): Breakpoint => {
    const width = windowWidth.value
    
    if (width >= breakpoints['2xl']) return '2xl'
    if (width >= breakpoints.xl) return 'xl'
    if (width >= breakpoints.lg) return 'lg'
    if (width >= breakpoints.md) return 'md'
    if (width >= breakpoints.sm) return 'sm'
    return 'xs'
  })
  
  // Computed para verificar si estamos en diferentes breakpoints
  const isXs = computed(() => currentBreakpoint.value === 'xs')
  const isSm = computed(() => currentBreakpoint.value === 'sm')
  const isMd = computed(() => currentBreakpoint.value === 'md')
  const isLg = computed(() => currentBreakpoint.value === 'lg')
  const isXl = computed(() => currentBreakpoint.value === 'xl')
  const is2xl = computed(() => currentBreakpoint.value === '2xl')
  
  // Computed para verificar si estamos en o por encima de cierto breakpoint
  const isSmAndUp = computed(() => windowWidth.value >= breakpoints.sm)
  const isMdAndUp = computed(() => windowWidth.value >= breakpoints.md)
  const isLgAndUp = computed(() => windowWidth.value >= breakpoints.lg)
  const isXlAndUp = computed(() => windowWidth.value >= breakpoints.xl)
  const is2xlAndUp = computed(() => windowWidth.value >= breakpoints['2xl'])
  
  // Computed para verificar si estamos en o por debajo de cierto breakpoint
  const isSmAndDown = computed(() => windowWidth.value < breakpoints.md)
  const isMdAndDown = computed(() => windowWidth.value < breakpoints.lg)
  const isLgAndDown = computed(() => windowWidth.value < breakpoints.xl)
  const isXlAndDown = computed(() => windowWidth.value < breakpoints['2xl'])
  
  // Computed para categorías de dispositivos
  const isMobile = computed(() => windowWidth.value < breakpoints.md)
  const isTablet = computed(() => 
    windowWidth.value >= breakpoints.md && windowWidth.value < breakpoints.lg
  )
  const isDesktop = computed(() => windowWidth.value >= breakpoints.lg)
  
  // Computed para orientación
  const isLandscape = computed(() => windowWidth.value > windowHeight.value)
  const isPortrait = computed(() => windowHeight.value > windowWidth.value)
  
  // Función para verificar si estamos en un breakpoint específico
  const is = (breakpoint: Breakpoint): boolean => {
    return currentBreakpoint.value === breakpoint
  }
  
  // Función para verificar si estamos en o por encima de un breakpoint
  const isAndUp = (breakpoint: Breakpoint): boolean => {
    return windowWidth.value >= breakpoints[breakpoint]
  }
  
  // Función para verificar si estamos en o por debajo de un breakpoint
  const isAndDown = (breakpoint: Breakpoint): boolean => {
    const breakpointKeys = Object.keys(breakpoints) as Breakpoint[]
    const currentIndex = breakpointKeys.indexOf(breakpoint)
    const nextBreakpoint = breakpointKeys[currentIndex + 1]
    
    if (!nextBreakpoint) return true
    return windowWidth.value < breakpoints[nextBreakpoint]
  }
  
  // Setup de event listeners
  onMounted(() => {
    updateDimensions()
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateDimensions, { passive: true })
    }
  })
  
  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', updateDimensions)
    }
  })
  
  return {
    // Dimensiones
    windowWidth: computed(() => windowWidth.value),
    windowHeight: computed(() => windowHeight.value),
    
    // Breakpoint actual
    currentBreakpoint,
    
    // Verificaciones exactas
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
    
    // Verificaciones hacia arriba
    isSmAndUp,
    isMdAndUp,
    isLgAndUp,
    isXlAndUp,
    is2xlAndUp,
    
    // Verificaciones hacia abajo
    isSmAndDown,
    isMdAndDown,
    isLgAndDown,
    isXlAndDown,
    
    // Categorías de dispositivos
    isMobile,
    isTablet,
    isDesktop,
    
    // Orientación
    isLandscape,
    isPortrait,
    
    // Funciones utilitarias
    is,
    isAndUp,
    isAndDown,
    
    // Breakpoints de referencia
    breakpoints: computed(() => breakpoints)
  }
}