import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '../product.service';
import { Routes, RouterModule } from '@angular/router';
import {Router} from '@angular/router'



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  productid:any=0;
  products:any;

  constructor(private _route: ActivatedRoute,private _productService:ProductService, 
    private _thisRoute:Router) {

    this._route.paramMap.subscribe( params => {
        console.log(params.get('id'));
        this.productid=params.get('id');
 
        this._productService.allProducts(products=>{
          this.products=products;
        })
    })

}
  updateProduct(){
    this._productService.updateProduct(this.products);
    console.log("product updated,now redirecting");
    this._thisRoute.navigate(['/products']);
  }

  deleteProduct(id){
    this._productService.productDelete(id);
    console.log("product deleted,now redirecting")
    this._thisRoute.navigate(['/products']);
  }

  ngOnInit() {
  }

}
