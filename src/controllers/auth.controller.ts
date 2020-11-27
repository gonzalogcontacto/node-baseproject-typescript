import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import data from '../config/config.json';


class AuthController {

    public async index (req: Request, res: Response) {        

        const token = jwt.sign(
            { email: req.body.email },
             data.secretJwt,
            { expiresIn: '1h'}
        );
       
        res.send(token);
    }

}

export const authController = new AuthController();