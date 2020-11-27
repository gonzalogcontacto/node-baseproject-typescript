import bodyParser from 'body-parser';
import express from 'express';
import { userRoutes } from './routes/users.routes';
import { authRoutes } from './routes/auth.routes';
import multer from 'multer';
import path from 'path';

// Configuración de guardado que multer debe aplicar al ponerlo en uso
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname,'uploads'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, file.originalname);
    }
})

// Inicializamos multer, con la configuración de guardado previamente definida.
const upload = multer({ storage: storage});

// Instance the express framework
const app = express();

// Setting the port of aplication server
app.set('port', 3000);

// Middlewares
app.use(express.json()); // Poder interpretar json en las peticiones

// Load the file routes users
app.use('/users', userRoutes.router);
// load Auth router
app.use('/auth', authRoutes.router);

// Example 
app.post('/single-upload', upload.single('file'), async (req, res) => {
    try{
        res.send(req.file);

    }catch(err){
        res.sendStatus(400) // Bad request
    }
});

app.post('/multiple-upload', upload.array('file', 2), async (req, res) => {
    try{
        res.send(req.files);

    }catch(err){
        res.sendStatus(400) // Bad request
    }
});

app.get('/file/:fileName', (req, res) => {
    try{
        res.download(path.join('src/uploads', req.params.fileName));
    }catch(error){
        res.sendStatus(404)
    }
});


// Start the server, using the port defined
app.listen(app.get('port'), () => {
    console.log(`Ther server is running on port ${app.get('port')}`);  
});

