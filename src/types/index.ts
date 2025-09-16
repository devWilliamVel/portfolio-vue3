// Punto de entrada para todos los tipos del proyecto
export * from './portfolio'
export * from './ui'

// Tipos globales y utilitarios
export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Tipos para eventos
export interface NavigationEvent {
  section: string
  previous?: string
}

export interface ThemeChangeEvent {
  theme: 'light' | 'dark'
  previous: 'light' | 'dark'
}

// Tipos para formularios
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormValidationResult {
  isValid: boolean
  errors: Record<string, string[]>
}

// Tipos para animaciones
export interface AnimationConfig {
  duration: number
  easing: string
  delay?: number
}

export interface ScrollPosition {
  x: number
  y: number
}