import { List, Paper } from "@mui/material"
import { EntryCard } from "./EntryCard"
import { EntryStatus } from "../../interfaces"
import { FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";

interface Props {
    status: EntryStatus;
}


export const EntryList: FC<Props> = ({ status }) => {

    // console.log(status)

    const { entries } = useContext( EntriesContext )

    const entriesByStatus = useMemo( () => entries.filter ( entry => entry.status === status ) , [ entries ] )

    return (
        <div>
            <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px', '&::-webkit-scrollbar': { display: 'none' }}}>
                <List sx={{ opacity: 1}}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={ entry._id } entry={ entry } />
                        ) )
                    }
                </List>
            </Paper>
        </div>
    )
}