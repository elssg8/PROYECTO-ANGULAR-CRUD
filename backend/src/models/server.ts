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

    middlewares(){//Funciones que se ejecutan antes de llegar a las rutas
        //Parseamos el body
        this.app.use(express.json());//Para que el servidor entienda formato JSON

        //CORS
        this.app.use(cors());//Para que el servidor acepte peticiones de otros servidores
    }

    //Conectar a la base de datos
    async dbConnect(){
        try {
            await db.authenticate();//Probamos la conexion
            console.log('Base de datos conectada');//Si se conecta, mostramos un mensaje    
        } catch (error) {//Si no se conecta, mostramos un mensaje de error
            console.log(error);//Mostramos el error
            console.log('Error al conectarse a la base de datos');//Mostramos un mensaje de error
        }
        
    }
}

export default Server;