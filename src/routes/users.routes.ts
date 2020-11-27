import { Router } from 'express';
import { usersController } from '../controllers/users.controller';
import { checkJwt } from '../middlewares/checkJwt';

class UsersRoutes {

    public router: Router = Router();

    constructor(){
        this.router.get('/show',[checkJwt],  usersController.show);
        
        this.router.get('/', usersController.index);
        this.router.post('/', usersController.create);
        this.router.delete('/:id', usersController.delete);
        this.router.put('/:id', usersController.update);

        this.router.get('/sales', usersController.sales);
    }
}

export const userRoutes = new UsersRoutes();
