import { Component, OnInit } from '@angular/core';
import {Product} from './../product'
import { ProductService } from '../product.service';
import {Router} from '@angular/router';
import { Routes, RouterModule } from '@angular/router';



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product=new Product();
  constructor(private _productService:ProductService, private _router:Router) { }

  newProduct(){
    this._productService.newProduct(this.product);
    this.product=new Product();
    this._router.navigate(['/products'])
  }
  ngOnInit() {
  }

}
