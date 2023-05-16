import { FC, PropsWithChildren, useReducer } from "react";

const { v4: uuidv4 } = require('uuid');

import { entriesReducer, EntriesContext } from './';
import { Entry } from "../../interfaces";


export interface EntriesState{
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Esto es una descripcion en pendiente',
            status: 'pending',
            createAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En progreso: Esto es una descripcion en progreso',
            status: 'in-progress',
            createAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Terminado: Esto es una descripcion en finalizado',
            status: 'finished',
            createAt: Date.now() - 10000
        }
    ],
}

export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4,
            description,
            createAt: Date.now(),
            status: "pending"
        }

        dispatch({ type: '[Entry] Add-Entry', paylod: newEntry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            // Metodos

            addNewEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}