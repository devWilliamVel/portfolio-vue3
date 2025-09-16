import { ref, computed, onMounted, onUnmounted } from 'vue'

/**
 * Composable para manejar scroll spy - detección automática de secciones visibles
 * Útil para highlighting en navegación mientras se hace scroll
 */
export function useScrollSpy(
  sectionIds: string[],
  options: {
    offset?: number
    rootMargin?: string
    threshold?: number
  } = {}
) {
  const { offset = 100, rootMargin = '-20%', threshold = 0.1 } = options
  
  const activeSection = ref<string>('')
  const observer = ref<IntersectionObserver | null>(null)
  const sections = ref<Map<string, IntersectionObserverEntry>>(new Map())
  
  // Función para determinar qué sección está más visible
  const updateActiveSection = () => {
    let mostVisible: { id: string; ratio: number } = { id: '', ratio: 0 }
    
    sections.value.forEach((entry, id) => {
      if (entry.isIntersecting && entry.intersectionRatio > mostVisible.ratio) {
        mostVisible = { id, ratio: entry.intersectionRatio }
      }
    })
    
    if (mostVisible.id && activeSection.value !== mostVisible.id) {
      activeSection.value = mostVisible.id
    }
  }
  
  const initObserver = () => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }
    
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (id) {
            sections.value.set(id, entry)
          }
        })
        updateActiveSection()
      },
      {
        rootMargin,
        threshold
      }
    )
    
    // Observar todas las secciones
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element && observer.value) {
        observer.value.observe(element)
      }
    })
  }
  
  const cleanup = () => {
    if (observer.value) {
      observer.value.disconnect()
      observer.value = null
    }
    sections.value.clear()
  }
  
  // Función para navegar a una sección específica
  const scrollToSection = (sectionId: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.getElementById(sectionId)
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetTop = elementTop - offset
      
      window.scrollTo({
        top: offsetTop,
        behavior
      })
      
      // Actualizar manualmente la sección activa
      activeSection.value = sectionId
    }
  }
  
  // Función para obtener todas las secciones con su información
  const getSectionInfo = () => {
    return sectionIds.map((id) => {
      const element = document.getElementById(id)
      const entry = sections.value.get(id)
      
      return {
        id,
        element,
        isVisible: entry?.isIntersecting || false,
        intersectionRatio: entry?.intersectionRatio || 0,
        isActive: activeSection.value === id
      }
    })
  }
  
  // Computed para verificar si una sección específica está activa
  const isActive = (sectionId: string) => computed(() => activeSection.value === sectionId)
  
  onMounted(() => {
    initObserver()
  })
  
  onUnmounted(() => {
    cleanup()
  })
  
  return {
    activeSection: computed(() => activeSection.value),
    scrollToSection,
    getSectionInfo,
    isActive,
    cleanup
  }
}

/**
 * Composable para smooth scroll con offset personalizado
 */
export function useSmoothScroll(offset: number = 80) {
  const scrollToElement = (
    element: Element | string,
    behavior: ScrollBehavior = 'smooth'
  ) => {
    const targetElement = typeof element === 'string' 
      ? document.querySelector(element) || document.getElementById(element)
      : element
    
    if (!targetElement) {
      console.warn('Element not found for smooth scroll')
      return
    }
    
    const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset
    const offsetTop = elementTop - offset
    
    window.scrollTo({
      top: offsetTop,
      behavior
    })
  }
  
  const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
    window.scrollTo({
      top: 0,
      behavior
    })
  }
  
  return {
    scrollToElement,
    scrollToTop
  }
}