import {products} from './constData/product.js'
import Product from './model/productSchema.js'

const Defaultdata = async() => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products)
        console.log('data import succesfully');
    } catch (error) {
        console.log('Error',error.message);
    }
}

export default Defaultdata
