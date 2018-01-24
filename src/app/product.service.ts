import { Injectable } from '@angular/core';
import {Product} from './product';


@Injectable()
export class ProductService {
  products:Array<Product>=[]
  constructor() { }


  allProducts(callback){
    callback(this.products);
  }

  newProduct(product){
    product.id=this.products.length;
    this.products.push(product);
    console.log(this.products)
  }

  productDelete(id){
    for(let i=id;i<this.products.length-1;i++){
      this.products[i+1].id=i;
      this.products[i]=this.products[i+1];
    }
    this.products.pop();
  }

  editProduct(id,cb){
    cb(this.products[id]);
    
  }

  updateProduct(products){
    this.products=products;
  }
}
