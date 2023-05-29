import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../../database';
import { Entry, IEntry } from '../../../../models';

type Data = 
|{ message: string }
| IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const { id } = req.query;

    if ( !mongoose.isValidObjectId( id ) ) {
        
        return res.status(400).json({ message: 'El id no es valido ' + id });

    }

    switch ( req.method ) {
        case 'PUT':

            return updateEntry( req, res );

        case 'GET':

            return getEntry( res, req );
    
        default:
            
            return res.status(400).json({ message: 'Metodo no existe' })
    }
    
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { id } = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById( id );

    if ( !entryToUpdate ) {

        await db.disconnect();
        return res.status(400).json({ message: 'No hay entrada con ese ID: ' + id });

    }

    const {

        description = entryToUpdate.description,
        status = entryToUpdate.status

    } = req.body;

    try {
        
        const updateEntry = await Entry.findByIdAndUpdate( id, { description, status }, { runValidators: true, new: true });
        res.status(200).json( updateEntry! );

    } catch (error: any) {

        await db.disconnect();
        res.status(400).json({ message: error.errors.status.message })
        
    }
    

}

const getEntry = async ( res: NextApiResponse<Data>, req: NextApiRequest ) => {

    const { id } = req.query;

    db.connect();

    const entryToGet = await Entry.findById( id );

    db.disconnect();

    if ( !entryToGet ) {
        
        return res.status(400).json({ message: "No hay entrada con ese id: " + id });

    }

    res.status(200).json( entryToGet );
    
}