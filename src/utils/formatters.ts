/**
 * Formatters - Funciones para formatear datos
 */

/**
 * Formatea una fecha en español
 */
export const formatDate = (
  date: Date | string,
  options: {
    format?: 'short' | 'long' | 'numeric'
    includeTime?: boolean
  } = {}
): string => {
  const { format = 'short', includeTime = false } = options
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  if (isNaN(dateObj.getTime())) {
    return 'Fecha inválida'
  }
  
  const formatOptions: Intl.DateTimeFormatOptions = {}
  
  switch (format) {
    case 'long':
      formatOptions.year = 'numeric'
      formatOptions.month = 'long'
      formatOptions.day = 'numeric'
      break
    case 'numeric':
      formatOptions.year = 'numeric'
      formatOptions.month = '2-digit'
      formatOptions.day = '2-digit'
      break
    default: // short
      formatOptions.year = 'numeric'
      formatOptions.month = 'short'
      formatOptions.day = 'numeric'
  }
  
  if (includeTime) {
    formatOptions.hour = '2-digit'
    formatOptions.minute = '2-digit'
  }
  
  return new Intl.DateTimeFormat('es-ES', formatOptions).format(dateObj)
}

/**
 * Formatea un rango de fechas
 */
export const formatDateRange = (
  startDate: Date | string,
  endDate?: Date | string | null,
  format: 'short' | 'long' = 'short'
): string => {
  const start = formatDate(startDate, { format })
  
  if (!endDate) {
    return `${start} - Presente`
  }
  
  const end = formatDate(endDate, { format })
  return `${start} - ${end}`
}

/**
 * Trunca un texto a una longitud específica
 */
export const truncateText = (
  text: string,
  maxLength: number,
  suffix: string = '...'
): string => {
  if (text.length <= maxLength) {
    return text
  }
  
  return text.slice(0, maxLength - suffix.length) + suffix
}

/**
 * Capitaliza la primera letra de una cadena
 */
export const capitalize = (text: string): string => {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}

/**
 * Convierte un string a kebab-case
 */
export const kebabCase = (text: string): string => {
  return text
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * Convierte un string a camelCase
 */
export const camelCase = (text: string): string => {
  return text
    .replace(/[-_\s]+(.)?/g, (_, char) => (char ? char.toUpperCase() : ''))
    .replace(/^(.)/, (char) => char.toLowerCase())
}

/**
 * Pluraliza una palabra en español (versión básica)
 */
export const pluralize = (
  count: number,
  singular: string,
  plural?: string
): string => {
  if (count === 1) {
    return `${count} ${singular}`
  }
  
  const pluralForm = plural || `${singular}s`
  return `${count} ${pluralForm}`
}

/**
 * Formatea números grandes con sufijos
 */
export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

/**
 * Formatea bytes a formato legible
 */
export const formatBytes = (bytes: number, decimals: number = 2): string => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`
}

/**
 * Genera un slug para URLs
 */
export const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Mantener solo letras, números, espacios y guiones
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Reemplazar múltiples guiones con uno solo
    .replace(/^-|-$/g, '') // Remover guiones al inicio y final
}

/**
 * Extrae iniciales de un nombre completo
 */
export const getInitials = (name: string, maxInitials: number = 2): string => {
  return name
    .split(' ')
    .slice(0, maxInitials)
    .map(word => word.charAt(0).toUpperCase())
    .join('')
}

/**
 * Formatea un número de teléfono (formato básico)
 */
export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')
  }
  
  return phone // Retornar original si no coincide con el formato esperado
}