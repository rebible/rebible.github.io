'use client';

import React, { createContext, useContext, ReactNode } from 'react'
import ko from '../../public/locales/ko.json'
import en from '../../public/locales/en.json'

type Translations = typeof ko

const translations: Record<string, Translations> = { ko, en }

type TranslationContextType = {
  t: (key: string) => string
  lang: string
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider')
  }
  return context
}

export const TranslationProvider: React.FC<{
  children: ReactNode
  lang: string
}> = ({ children, lang }) => {
  const t = (key: string): string => {
    const keys = key.split('.')
    return keys.reduce((o, k) => o?.[k] as any, translations[lang] as any) || key
  }

  return (
    <TranslationContext.Provider value={{ t, lang }}>
      {children}
    </TranslationContext.Provider>
  )
}
