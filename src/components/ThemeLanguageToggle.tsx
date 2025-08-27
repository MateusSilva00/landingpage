'use client'

import { useThemeLanguage } from '@/contexts/ThemeLanguageContext'

export function ThemeLanguageToggle() {
  const { isDarkMode, language, toggleTheme, toggleLanguage } = useThemeLanguage()

  return (
    <div className="fixed top-4 right-4 space-x-4 z-50">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg border border-blue-500/40 hover:bg-blue-500/10 transition"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <button
        onClick={toggleLanguage}
        className="px-4 py-2 rounded-lg border border-blue-500/40 hover:bg-blue-500/10 transition"
      >
        {language.toUpperCase()}
      </button>
    </div>
  )
}
