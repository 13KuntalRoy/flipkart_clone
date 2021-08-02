import mongoose from 'mongoose'

const Connection =async(username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecomweb.o3var.mongodb.net/ECOM?retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
    console.log('Database connnect succesfully');
    }catch(error){
        console.log(('Error',error.message));
    }
}
export default Connection
