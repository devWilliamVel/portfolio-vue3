import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
}

/**
 * Composable para usar Intersection Observer API
 * Útil para animaciones al hacer scroll, lazy loading, etc.
 */
export function useIntersectionObserver(
  target: Ref<Element | null>,
  callback: (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => void,
  options: IntersectionObserverOptions = {}
) {
  const isSupported = typeof window !== 'undefined' && 'IntersectionObserver' in window
  const isIntersecting = ref(false)
  const observer = ref<IntersectionObserver | null>(null)
  
  const defaultOptions: IntersectionObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options
  }
  
  const cleanup = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
  }
  
  const observe = () => {
    if (!isSupported || !target.value) return
    
    cleanup()
    
    observer.value = new IntersectionObserver((entries) => {
      isIntersecting.value = entries.some(entry => entry.isIntersecting)
      callback(entries, observer.value!)
    }, defaultOptions)
    
    observer.value.observe(target.value)
  }
  
  const unobserve = () => {
    if (observer.value && target.value) {
      observer.value.unobserve(target.value)
    }
  }
  
  onMounted(() => {
    observe()
  })
  
  onUnmounted(() => {
    cleanup()
  })
  
  return {
    isIntersecting,
    observer,
    observe,
    unobserve,
    cleanup
  }
}

/**
 * Composable específico para animaciones de entrada
 * Se activa cuando el elemento entra en el viewport
 */
export function useScrollAnimation(
  target: Ref<Element | null>,
  options: IntersectionObserverOptions & { 
    once?: boolean
    animationClass?: string 
  } = {}
) {
  const {
    once = true,
    animationClass = 'animate-fade-in',
    ...observerOptions
  } = options
  
  const hasAnimated = ref(false)
  const isVisible = ref(false)
  
  const { observe, cleanup } = useIntersectionObserver(
    target,
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && (!once || !hasAnimated.value)) {
          isVisible.value = true
          hasAnimated.value = true
          
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.add(animationClass)
          }
          
          if (once) {
            cleanup()
          }
        } else if (!entry.isIntersecting && !once) {
          isVisible.value = false
          
          if (entry.target instanceof HTMLElement) {
            entry.target.classList.remove(animationClass)
          }
        }
      })
    },
    observerOptions
  )
  
  return {
    isVisible,
    hasAnimated,
    observe,
    cleanup
  }
}