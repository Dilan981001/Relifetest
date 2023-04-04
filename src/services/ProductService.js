import axios from 'axios';

export class ProductService{

    static serverURL = `https://dummyjson.com/products`;

    static getAllProducts(){
        let dataURL = `https://dummyjson.com/products`;
        return axios.get(dataURL)
    }

    static getProduct(productId){
        let dataURL =`${this.serverURL}/${productId}`
        return axios.get(dataURL)
    }

}