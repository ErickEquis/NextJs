import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false
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

    return (
    <UIContext.Provider value={{
        ...state,

        // Metodos
        openSideMenu,
        closeSideMenu

    }}>
        { children }
    </UIContext.Provider>
    )
}