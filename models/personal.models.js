import mongoose,{Schema} from "mongoose";

const Personal=new Schema({
    nombre:{type: String},
    apellidos:{type: String},
    direccion:{type: String},
    createdA:{type:Date, default:Date.now}
});

const Persona=mongoose.model('personal',Personal);
export default Persona;