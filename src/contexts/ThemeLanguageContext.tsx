'use client'

import { createContext, useContext, useState } from 'react'

type ThemeLanguageContextType = {
  isDarkMode: boolean
  language: 'pt' | 'en'
  toggleTheme: () => void
  toggleLanguage: () => void
}

const ThemeLanguageContext = createContext<ThemeLanguageContextType | undefined>(undefined)

export function ThemeLanguageProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState<'pt' | 'en'>('pt')

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const toggleLanguage = () => setLanguage(curr => curr === 'pt' ? 'en' : 'pt')

  return (
    <ThemeLanguageContext.Provider value={{ isDarkMode, language, toggleTheme, toggleLanguage }}>
      {children}
    </ThemeLanguageContext.Provider>
  )
}

export const useThemeLanguage = () => {
  const context = useContext(ThemeLanguageContext)
  if (!context) throw new Error('useThemeLanguage must be used within ThemeLanguageProvider')
  return context
}
