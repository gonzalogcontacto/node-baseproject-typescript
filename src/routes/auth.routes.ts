import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { authController } from '../controllers/auth.controller';

class AuthRoutes {

    public router: Router = Router();

    constructor(){
        this.router.post('/login', authController.index);
    }
}

export const authRoutes = new AuthRoutes();
