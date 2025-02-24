import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider  ({children}) {
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'true') {
            setTheme(true);
        }
    }, []);
    const handle_theme = () => {
        const root = document.documentElement;
        root.classList.toggle("darktheme");
        setTheme(!theme);
        localStorage.setItem('theme', theme);

    };


    return (
        <ThemeContext.Provider value={{ theme, handle_theme }}>
            {children}
        </ThemeContext.Provider>
     );
}

