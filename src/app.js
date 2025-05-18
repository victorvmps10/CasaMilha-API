import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';
import path from 'path';
import cors from  'cors';

class App{
    constructor(){
        this.server = express();
        mongoose.connect('mongodb+srv://victor:victor6702@casamilha.00l5lf3.mongodb.net/?retryWrites=true&w=majority&appName=CasaMilha');
        this.widdlewares();
        this.routes();
    }
    widdlewares(){
        this.server.use(cors());
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'uploads')))
        this.server.use(express.json());
    }
    routes(){
        this.server.use(routes);
    }
}

export default new App().server;
