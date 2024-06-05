import mongoose from 'mongoose';
const {Schema,model}=mongoose;
const destinationSchema=new Schema({
    name:{type:String,required:true},
    description:{type:String},
    location:{type:String,required:true},
    main_attractions:{type:[String]}
});

const Destination=model('Destination',destinationSchema);
export default Destination;
