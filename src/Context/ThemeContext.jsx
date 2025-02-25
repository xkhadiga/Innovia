import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider  ({children}) {
    const [theme, setTheme] = useState(false);
    useEffect(() => {
        const stored_theme = localStorage.getItem('innovatheme');
        if (stored_theme === 'true') {
            setTheme(true);
            document.documentElement.classList.add("darktheme"); 

        }
    }, []);
    const handle_theme = () => {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem('innovatheme', newTheme);
        const root = document.documentElement;
        root.classList.toggle("darktheme");
    };


    return (
        <ThemeContext.Provider value={{ theme, handle_theme }}>
            {children}
        </ThemeContext.Provider>
     );
}

