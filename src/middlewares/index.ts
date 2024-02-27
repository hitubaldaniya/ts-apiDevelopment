import express from "express";
import { get, merge } from 'lodash';

import { getUserBySessionToken } from '../model/userModel';

export const isOwner = async(req: express.Request, res: express.Response, next: Function) => {
    try {
        const { id } = req.params;
        
        const currentUserId = get(req, 'identity._id') + '';

        if(!currentUserId){
            return res.sendStatus(403);
        }

        if(currentUserId.toString() != id){
            return res.sendStatus(403);
        }
        
        next();
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: Function) => {
    try {
        const sessionToken = req.cookies['LOGIN-AUTH'];
        if(!sessionToken){
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);
        if(!existingUser){
            return res.sendStatus(403);
        }

        merge(req, { identity: existingUser });
        return next();

    } catch(error) {
        console.error(error);
        return res.sendStatus(400);
    }
}