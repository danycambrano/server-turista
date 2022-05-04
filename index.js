import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';

import router from './routes';


//conexion a la base de datos mongodb
mongoose.Promise=global.Promise;
const dbUrl='mongodb://localhost:27017/turista';
mongoose.connect(dbUrl,{useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose=>console.log('Conectado a la BD en el puerto 27017'))
.catch(err=>console.log(err));

const app=express();
app.set('port',process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/api', router);

app.listen(app.get('port'),()=>{
    console.log('Servidor HTTP corriendo en el puerto: ' + app.get('port'))
});
