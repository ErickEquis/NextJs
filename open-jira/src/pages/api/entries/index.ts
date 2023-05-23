import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

// Tipado TS
type Data = 
    | { message: string }
    | IEntry[]

    // Manejo de peticiones
export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch ( req.method ) {
        case 'GET':
            return getEntries( res )

        default:
            return res.status(400).json({ message: 'Endpoint no existe' });
    }

}

// Obtencion de datos
const getEntries = async( res: NextApiResponse<Data> ) => {


    await db.connect();
    const entries = await Entry.find().sort({ createAt: 'ascending' });
    await db.disconnect()

    res.status(200).json( entries )

}