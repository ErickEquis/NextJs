import { createContext } from "react"

interface ContextProps {
    sidemenuOpen: boolean;

    // Metodos
    openSideMenu: () => void;
    closeSideMenu: () => void;
}

// Context: permite mandar argumentos a distintos componentes que se encuentren en un mismo nivel 
export const UIContext = createContext( {} as ContextProps )