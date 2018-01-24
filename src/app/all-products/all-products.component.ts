import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products:Array<Product>;
  constructor(private _productService:ProductService) { 
  }

  productDelete(id){
    this._productService.productDelete(id);    
  }

  ngOnInit() {
    this._productService.allProducts((cb_products)=>{
      this.products=cb_products;
    })
  }

}
