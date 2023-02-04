import path from "path";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const options = {
    fileSystem: {
        pathProducts: 'productos.json',
        pathCarts: 'carritos.json',
    },
    // mariaDB:{
    //     client:"mysql",
    //     connection:{
    //         host:"127.0.0.1",
    //         user:"root",
    //         password:"",
    //         database:"coderhousedb"
    //     }
    // },
    sqliteDB:{
        client:"sqlite3",
        connection:{
            filename:path.join(__dirname , "../DB/ecommerce.sqlite")
        },
        useNullAsDefault:true
    },
    firebase:{
        serviceKey:{},
        databaseUrl:""
    },
    mongoDB:{
        url:"mongodb+srv://fercancino:Coder2022@cluster0.l7wm19l.mongodb.net/ecommerce?retryWrites=true&w=majority"
    }
}