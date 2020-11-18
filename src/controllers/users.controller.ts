import { Request, Response } from 'express';

class UsersController {
    public index (req: Request, res: Response) {
        res.send('INDEX, la ruta funciona');
    }

    public show (req: Request, res: Response) {
        res.send('SHOW, la ruta funciona');
    }
}

export const usersController = new UsersController();