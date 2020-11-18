import { Router } from 'express';
import { usersController } from '../controllers/users.controller';

class UsersRoutes {

    public router: Router = Router();

    constructor(){
        this.router.get('/show', usersController.show);
        this.router.get('/', usersController.index);
    }
}

export const userRoutes = new UsersRoutes();
