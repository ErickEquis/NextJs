import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false
}

export const UIProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

    // closeSideMenu
    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close Sidebar' })
    }

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' })
    }

    const setIsAddingEntry = ( isAdding: boolean ) => {
        dispatch({ type: 'UI - Set isAddingEntry', paylod: isAdding })
    }

    return (
    <UIContext.Provider value={{
        ...state,

        // Metodos
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry

    }}>
        { children }
    </UIContext.Provider>
    )
}