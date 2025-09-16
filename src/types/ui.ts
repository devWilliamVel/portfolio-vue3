// Tipos para componentes de UI
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

export interface CardProps {
  variant?: 'elevated' | 'outlined' | 'filled'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
}

export interface ModalProps {
  visible: boolean
  title?: string
  width?: string | number
  closable?: boolean
  maskClosable?: boolean
  centered?: boolean
}

export interface FormFieldProps {
  label?: string
  error?: string
  required?: boolean
  disabled?: boolean
  placeholder?: string
}

// Tipos para el sistema de tema
export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  text: string
  textSecondary: string
  border: string
  error: string
  warning: string
  success: string
  info: string
}

export interface ThemeConfig {
  colors: ThemeColors
  fonts: {
    primary: string
    secondary: string
    mono: string
  }
  breakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
}