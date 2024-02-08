import { v4 as uuidv4 } from 'uuid';
class product {

    constructor(name, price, image,){
        this.id = uuidv4()
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

export {product}