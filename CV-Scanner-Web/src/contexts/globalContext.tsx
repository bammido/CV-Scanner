import { createContext, useContext } from "react";
import useSetThemeOnLoad, { ThemeType } from "../hooks/useSetThemeOnLoad";

interface IGlobalContext {
    theme: ThemeType;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}

const globalContext = createContext<null | IGlobalContext>(null);

export function GlobalContextProvider({ children }: { children : React.ReactNode}) {
    const { theme, setTheme } = useSetThemeOnLoad()

    return <globalContext.Provider value={{ theme, setTheme }}>
        {children}
    </globalContext.Provider>
}

export function useGlobalContext() {
    return useContext(globalContext) as IGlobalContext
}