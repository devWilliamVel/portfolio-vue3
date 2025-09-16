import { ref, watch, type Ref } from 'vue'

/**
 * Composable para manejar localStorage de forma reactiva
 * Incluye serialización automática de objetos y sincronización entre tabs
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  options?: {
    serializer?: {
      read: (value: string) => T
      write: (value: T) => string
    }
  }
) {
  const serializer = options?.serializer || {
    read: (v: string) => {
      try {
        return JSON.parse(v)
      } catch {
        return v as T
      }
    },
    write: (v: T) => JSON.stringify(v)
  }
  
  // Leer valor inicial del localStorage
  const read = (): T => {
    if (typeof window === 'undefined') {
      return defaultValue
    }
    
    try {
      const item = window.localStorage.getItem(key)
      if (item === null) {
        return defaultValue
      }
      return serializer.read(item)
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  }
  
  // Escribir valor al localStorage
  const write = (value: T): void => {
    if (typeof window === 'undefined') {
      return
    }
    
    try {
      window.localStorage.setItem(key, serializer.write(value))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }
  
  // Crear ref reactivo con valor inicial
  const storedValue = read()
  const value: Ref<T> = ref(storedValue) as Ref<T>
  
  // Sincronizar cambios con localStorage
  watch(
    value,
    (newValue) => {
      write(newValue)
    },
    { deep: true }
  )
  
  // Escuchar cambios desde otras tabs/ventanas
  if (typeof window !== 'undefined') {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          const newValue = serializer.read(e.newValue)
          value.value = newValue
        } catch (error) {
          console.warn(`Error parsing storage event for key "${key}":`, error)
        }
      }
    }
    
    window.addEventListener('storage', handleStorageChange)
  }
  
  // Función para actualizar el valor manualmente
  const setValue = (newValue: T | ((current: T) => T)) => {
    if (typeof newValue === 'function') {
      value.value = (newValue as (current: T) => T)(value.value)
    } else {
      value.value = newValue
    }
  }
  
  // Función para remover del localStorage
  const remove = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem(key)
        value.value = defaultValue
      } catch (error) {
        console.error(`Error removing localStorage key "${key}":`, error)
      }
    }
  }
  
  return {
    value,
    setValue,
    remove
  }
}