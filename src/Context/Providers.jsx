import { BarProvider } from "./BarContext";
import { LoginProvider } from "./LoginContext";
import { RegisterProvider } from "./RegisterContext";
import { ThemeProvider } from "./ThemeContext";


export const Providers = ({children}) => {
    return (
        <ThemeProvider>
            <RegisterProvider>
                <LoginProvider>
                    <BarProvider>
                        {children}
                    </BarProvider>
                </LoginProvider>
            </RegisterProvider>
        </ThemeProvider>
    )
}