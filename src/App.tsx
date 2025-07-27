import './App.css'
import {ThemeProvider} from "@/components/theme-provider.tsx";

export default function App() {
    return(
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <p>Hello world</p>
        </ThemeProvider>
    )

}


