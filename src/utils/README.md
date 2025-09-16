# Utils

Esta carpeta contiene funciones utilitarias puras (sin estado reactivo).

## Categorías:

### `formatters.ts`
- Formateo de fechas, números, texto
- Funciones de transformación de datos

### `validators.ts`
- Validaciones de formularios
- Verificaciones de datos

### `helpers.ts`
- Funciones auxiliares generales
- Utilidades matemáticas y de cadenas

### `constants.ts`
- Constantes de la aplicación
- Configuraciones estáticas

## Convenciones:
- **camelCase** para funciones: `formatDate`
- Funciones puras sin efectos secundarios
- Bien documentadas y testeadas
- Tipadas con TypeScript

## Ejemplo:
```typescript
// utils/formatters.ts
export const formatDate = (date: Date, format: 'short' | 'long' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions = format === 'long' 
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short', day: 'numeric' }
  
  return new Intl.DateTimeFormat('es-ES', options).format(date)
}

export const truncateText = (text: string, maxLength: number): string => {
  return text.length > maxLength 
    ? text.slice(0, maxLength) + '...' 
    : text
}
```