import mongoose from 'mongoose';

const destinationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    location:{type:String,required:true},
    main_attractions:{type:[String]}
});

const Destination=mongoose.model('Destination',destinationSchema);
export default Destination;
