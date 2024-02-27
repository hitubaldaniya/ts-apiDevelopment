import express from 'express';
import { deleteUserById, getUser, getUserByEmail, getUserById } from '../model/userModel';

export const getAllUsers = async (req: express.Request, res: express.Response, next: Function) => {
    try {
        const users = await getUser();
        return res.status(200).json(users);
    } catch(error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const deletedUser = await deleteUserById(id);
        return res.json(deletedUser);
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params;
        const { username } = req.body;

        if(!username){
            return res.sendStatus(400);
        }
        
        const user = await getUserById(id);
        
        if(user){
            user.username = username;
            await user.save();
            return res.status(200).json(user).end
        } else {
            return res.sendStatus(400);
        }


    } catch(error) {
        console.error(error);
        return res.sendStatus(400);
    }
}
