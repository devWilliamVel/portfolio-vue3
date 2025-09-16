/**
 * Validators - Funciones de validación para formularios y datos
 */

import type { FormValidationResult } from '@/types'

/**
 * Valida si un email es válido
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Valida si una URL es válida
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Valida si un número de teléfono es válido (formato básico)
 */
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{7,20}$/
  return phoneRegex.test(phone)
}

/**
 * Valida si una cadena no está vacía
 */
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0
}

/**
 * Valida la longitud mínima de una cadena
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.trim().length >= minLength
}

/**
 * Valida la longitud máxima de una cadena
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.trim().length <= maxLength
}

/**
 * Valida que una cadena contenga solo letras
 */
export const isOnlyLetters = (value: string): boolean => {
  const lettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/
  return lettersRegex.test(value)
}

/**
 * Valida que una cadena contenga solo números
 */
export const isOnlyNumbers = (value: string): boolean => {
  const numbersRegex = /^\d+$/
  return numbersRegex.test(value)
}

/**
 * Valida si un número está dentro de un rango
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max
}

/**
 * Valida si una fecha es válida
 */
export const isValidDate = (date: string | Date): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj instanceof Date && !isNaN(dateObj.getTime())
}

/**
 * Valida si una fecha es en el futuro
 */
export const isFutureDate = (date: string | Date): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return isValidDate(dateObj) && dateObj.getTime() > Date.now()
}

/**
 * Valida si una fecha es en el pasado
 */
export const isPastDate = (date: string | Date): boolean => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return isValidDate(dateObj) && dateObj.getTime() < Date.now()
}

/**
 * Valida una contraseña (reglas básicas)
 */
export const isValidPassword = (
  password: string,
  options: {
    minLength?: number
    requireUppercase?: boolean
    requireLowercase?: boolean
    requireNumbers?: boolean
    requireSpecialChars?: boolean
  } = {}
): { isValid: boolean; errors: string[] } => {
  const {
    minLength = 8,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true
  } = options
  
  const errors: string[] = []
  
  if (password.length < minLength) {
    errors.push(`Debe tener al menos ${minLength} caracteres`)
  }
  
  if (requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Debe contener al menos una letra mayúscula')
  }
  
  if (requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Debe contener al menos una letra minúscula')
  }
  
  if (requireNumbers && !/\d/.test(password)) {
    errors.push('Debe contener al menos un número')
  }
  
  if (requireSpecialChars && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push('Debe contener al menos un carácter especial')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Validador de formulario de contacto
 */
export const validateContactForm = (data: {
  name: string
  email: string
  subject: string
  message: string
}): FormValidationResult => {
  const errors: Record<string, string[]> = {}
  
  // Validar nombre
  if (!isRequired(data.name)) {
    errors.name = ['El nombre es requerido']
  } else if (!hasMinLength(data.name, 2)) {
    errors.name = ['El nombre debe tener al menos 2 caracteres']
  } else if (!hasMaxLength(data.name, 100)) {
    errors.name = ['El nombre no puede exceder 100 caracteres']
  } else if (!isOnlyLetters(data.name)) {
    errors.name = ['El nombre solo puede contener letras']
  }
  
  // Validar email
  if (!isRequired(data.email)) {
    errors.email = ['El email es requerido']
  } else if (!isValidEmail(data.email)) {
    errors.email = ['El formato del email no es válido']
  } else if (!hasMaxLength(data.email, 254)) {
    errors.email = ['El email no puede exceder 254 caracteres']
  }
  
  // Validar asunto
  if (!isRequired(data.subject)) {
    errors.subject = ['El asunto es requerido']
  } else if (!hasMinLength(data.subject, 3)) {
    errors.subject = ['El asunto debe tener al menos 3 caracteres']
  } else if (!hasMaxLength(data.subject, 200)) {
    errors.subject = ['El asunto no puede exceder 200 caracteres']
  }
  
  // Validar mensaje
  if (!isRequired(data.message)) {
    errors.message = ['El mensaje es requerido']
  } else if (!hasMinLength(data.message, 10)) {
    errors.message = ['El mensaje debe tener al menos 10 caracteres']
  } else if (!hasMaxLength(data.message, 2000)) {
    errors.message = ['El mensaje no puede exceder 2000 caracteres']
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Sanitiza una cadena para prevenir XSS básico
 */
export const sanitizeString = (str: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  }
  
  return str.replace(/[&<>"'/]/g, (char) => map[char])
}

/**
 * Valida si un archivo tiene una extensión permitida
 */
export const isValidFileType = (
  fileName: string,
  allowedTypes: string[]
): boolean => {
  const extension = fileName.split('.').pop()?.toLowerCase()
  return extension ? allowedTypes.includes(extension) : false
}

/**
 * Valida el tamaño de un archivo
 */
export const isValidFileSize = (
  fileSize: number,
  maxSizeInMB: number
): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024
  return fileSize <= maxSizeInBytes
}