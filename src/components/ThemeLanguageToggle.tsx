'use client'

import { useThemeLanguage } from '@/contexts/ThemeLanguageContext'

export function ThemeLanguageToggle() {
  const { isDarkMode, language, toggleTheme, toggleLanguage } = useThemeLanguage()

  return (
    <div className="fixed top-2 sm:top-4 right-2 sm:right-4 space-x-2 sm:space-x-4 z-50">
      <button
        onClick={toggleTheme}
        className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border border-blue-500/40 hover:bg-blue-500/10 transition"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      <button
        onClick={toggleLanguage}
        className="px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-lg border border-blue-500/40 hover:bg-blue-500/10 transition"
      >
        {language.toUpperCase()}
      </button>
    </div>
  )
}
