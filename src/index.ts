import bodyParser from 'body-parser';
import express from 'express';
import { userRoutes } from './routes/users.routes';

// Instance the express framework
const app = express();

// Setting the port of aplication server
app.set('port', 3000);

// Middlewares
app.use(express.json()); // Poder interpretar json en las peticiones

// Load the file routes users
app.use('/users', userRoutes.router);

// Start the server, using the port defined
app.listen(app.get('port'), () => {

    console.log(`Ther server is running on port ${app.get('port')}`); 
    
});

