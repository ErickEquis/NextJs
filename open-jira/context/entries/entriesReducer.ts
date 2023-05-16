import { Entry } from "../../interfaces";
import { EntriesState } from "./"

type EntriesActionType = 
| { type: '[Entry] Add-Entry', paylod: Entry }

export const entriesReducer = ( state: EntriesState, action: EntriesActionType ): EntriesState => {

    switch (action.type) {
        case '[Entry] Add-Entry':
            return {
                ...state,
                entries: [ ...state.entries, action.paylod ]
            }
    
        default:
            return state;
    }

}