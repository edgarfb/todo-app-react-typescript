import React, { createContext, useContext, useState } from "react";

const themeContext = createContext('dark');
const setThemeContext = createContext<React.Dispatch<string>>(() => { });

type childrenProp = { children: React.ReactElement };

export default function ThemeProvider({ children }: childrenProp) {
    const [theme, setTheme] = useState('dark');

    console.log(theme);
    return (
        <themeContext.Provider value={theme}>
            <setThemeContext.Provider value={setTheme}>

                {children}
            </setThemeContext.Provider>
        </themeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(themeContext)
}

export const useSetTheme = () => {
    return useContext(setThemeContext)
}