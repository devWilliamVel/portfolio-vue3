# Types

Esta carpeta contiene todas las definiciones de tipos TypeScript del proyecto.

## Archivos principales:

### `index.ts`
- Exporta todos los tipos públicos
- Punto de entrada para importaciones

### `portfolio.ts`
- Tipos específicos del portfolio
- Interfaces para proyectos, skills, etc.

### `ui.ts`
- Tipos para componentes de UI
- Props interfaces, theme types, etc.

### `api.ts`
- Tipos para respuestas de API
- Interfaces de servicios externos

## Convenciones:
- **PascalCase** para interfaces: `Project`, `Skill`
- **PascalCase** para tipos: `ThemeMode`, `SkillLevel`
- Usar `interface` para objetos extensibles
- Usar `type` para uniones y primitivos

## Ejemplo:
```typescript
// types/portfolio.ts
export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
}

export interface Skill {
  name: string
  level: SkillLevel
  category: SkillCategory
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft'
```