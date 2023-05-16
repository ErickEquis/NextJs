import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { Entry } from "../../interfaces"
import { FC } from "react";

interface Props {
    entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const onDragonStart = ( event: DragEvent ) => {
        console.log(event)
    }

  return (
    <Card
        sx={{ marginBottom: 1}}
        draggable
        onDragStart={ onDragonStart }
        >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        { entry.description }
                    </Typography>
                </CardContent>

                <CardActions sx={{ display: 'flex', justifyContent: 'end', padding: 2 }}>
                    <Typography variant="body2">hace 30 minutos</Typography>
                </CardActions>
            </CardActionArea>
    </Card>
  )
}
