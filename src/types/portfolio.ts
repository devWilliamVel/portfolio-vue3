// Tipos principales del portfolio
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  category: ProjectCategory
  startDate: string
  endDate?: string
}

export interface Skill {
  name: string
  level: SkillLevel
  category: SkillCategory
  icon?: string
  description?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  current: boolean
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  description?: string
  current: boolean
}

export interface ContactInfo {
  name: string
  email: string
  phone?: string
  location: string
  socialLinks: SocialLink[]
}

export interface SocialLink {
  platform: SocialPlatform
  url: string
  username?: string
}

// Tipos de unión
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'soft' | 'languages'
export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'api' | 'library'
export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email' | 'website'
export type ThemeMode = 'light' | 'dark' | 'system'