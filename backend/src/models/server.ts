import express, { Application, Request, Response } from "express";
import cors from 'cors';
import routesProducto from "../routes/producto.route";
import db from "../db/connection"

class Server{
    private app: Application;
    private port: string;

    constructor() {        
        this.app = express();
        this.port = process.env.PORT || '4000';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        })
    }

    routes(){
        this.app.get('/', (req: Request, resp: Response) =>{
            resp.json({
                msg: 'API working'
            })
        });
        this.app.use('/api/productos', routesProducto)
    }

    middlewares(){
        //Parseamos el body
        this.app.use(express.json());

        //CORS
        this.app.use(cors());
    }

    async dbConnect(){
        try {
            await db.authenticate();
            console.log('Base de datos conectada');    
        } catch (error) {
            console.log(error);
            console.log('Error al conectarse a la base de datos');
        }
        
    }
}

export default Server;