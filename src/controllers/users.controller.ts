import { log } from 'console';
import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/user.model';
import { Product } from '../models/product.model';
import { Provider } from '../models/provider.model';

class UsersController {

    public async index (req: Request, res: Response) {        
    
        try{
            // SELECT * FROM USERS WHERE name = 'Antonio' AND id:3 AND familyName = 'Lozano' OR familyName='Belén'
            const users = await User.findAll({ 
                where: {
                    name: {
                        [Op.like] : '%A%'
                    },
                    id: 3,
                    [Op.or] : [
                        {familyName: 'Lozano'},
                        {familyName: 'Belén'}
                    ]
                },
                raw: true
            });
            const userAntonio = await User.findByPk(3, { raw: true});

            if(userAntonio && users){
                res.send(users);
            }else{
                res.sendStatus(404);
            }
            
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }   
    }

    public async show (req: Request, res: Response) {

        const product: Product[] = await Product.findAll(
            {
                include: [
                    {
                        model: Provider
                    }
                ]   
            }
        );

        res.send(product);
        
    }
}

export const usersController = new UsersController();