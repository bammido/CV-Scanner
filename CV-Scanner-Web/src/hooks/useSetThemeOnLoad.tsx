import { useEffect, useState } from "react"

export type ThemeType = 'dark' | 'light' | ''

export default function useSetThemeOnLoad() {
  const [theme, setTheme] = useState<ThemeType>('')

    useEffect(() => {
        const isOsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    
        const localStorageTheme = localStorage.getItem('theme')

    
        if (localStorageTheme === 'dark' || (!(localStorageTheme) && isOsDarkMode)) {
          setTheme('dark')
          document.documentElement.classList.add('dark')
        } else {
          setTheme('light')
          document.documentElement.classList.remove('dark')
        }
    
        if(!localStorageTheme){
          localStorage.setItem('theme', isOsDarkMode? 'dark' : 'light')
        }

      }, [])

    return { theme, setTheme }
}