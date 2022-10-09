import { storedCart } from "../utilities/fakedb";

export const ProductsAndCartLoaders = async()=>{
    const productsData = await fetch ('products.json');
    const products = await productsData.json();

    const savedCart = storedCart();
    const initialCart = [];
   
    for(const id in savedCart){
        const addedProducts =  products.find(product => product.id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(savedCart)
        }
    }
    return {products, initialCart}
}

