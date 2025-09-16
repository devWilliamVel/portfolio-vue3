// Punto de entrada para todos los composables
// Facilita las importaciones en los componentes

export { useDarkMode } from './useDarkMode'
export { useLocalStorage } from './useLocalStorage'
export { useResponsive, type Breakpoint } from './useResponsive'
export { 
  useIntersectionObserver, 
  useScrollAnimation, 
  type IntersectionObserverOptions 
} from './useIntersectionObserver'
export { 
  useScrollSpy, 
  useSmoothScroll 
} from './useScrollSpy'