import { FC, PropsWithChildren, useEffect, useReducer } from "react";

const { v4: uuidv4 } = require('uuid');

import { entriesReducer, EntriesContext } from './';
import { Entry } from "../../interfaces";
import { entriesApi } from "../../apis";


export interface EntriesState{
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
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

    const updateEntry = ( entry: Entry ) => {
        dispatch({ type: "[Entry] Entry-Updated", paylod: entry })
    }

    // Se ejecuta una sola vez
    const refreshEntries = async() => {
        const { data } = await entriesApi.get<Entry[]>('/entries')
        console.log(data)
        dispatch({ type: "[Entry] Refresh-Data", paylod: data })
    }
    
    useEffect(() => {
        refreshEntries()
    }, [])
    

    return (
        <EntriesContext.Provider value={{
            ...state,

            // Metodos

            addNewEntry,
            updateEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}