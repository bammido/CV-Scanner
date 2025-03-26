import { useGlobalContext } from "../contexts/globalContext"

export default function useTheme() {
    
    const { theme, setTheme } = useGlobalContext()

    function toogleTheme() {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light')
            setTheme('light')
            document.documentElement.classList.remove('dark')
        } else {
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }

    return {
        toogleTheme
    }
}