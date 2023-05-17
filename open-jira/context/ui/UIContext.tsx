import { createContext } from "react"

interface ContextProps {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean

    // Metodos
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void
    startDragging: () => void
    endDragging: () => void
}

// Context: permite mandar argumentos a distintos componentes que se encuentren en un mismo nivel 
export const UIContext = createContext( {} as ContextProps )