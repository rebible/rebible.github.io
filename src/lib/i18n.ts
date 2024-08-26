import { promises as fs } from 'fs'
import path from 'path'

export async function getTranslations(lang: string) {
  const filePath = path.join(process.cwd(), 'public', 'locales', `${lang}.json`)
  const fileContents = await fs.readFile(filePath, 'utf8')
  const translations = JSON.parse(fileContents)

  return function t(key: string): string {
    return translations[key] || key
  }
}
