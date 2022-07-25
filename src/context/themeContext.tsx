import React, { createContext, useContext, useState } from "react";

const themeContext = createContext('');

type childrenProp = { children: React.ReactElement };

export default function ThemeProvider({ children }: childrenProp) {
    const [theme, setTheme] = useState('dark');

    console.log(theme);
    return (
        <themeContext.Provider value={theme}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(themeContext)
}