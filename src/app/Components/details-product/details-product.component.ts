import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApidataService } from 'src/app/services/apidata.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit{

  constructor(private _ApidataService:ApidataService,
              private _ActivatedRoute:ActivatedRoute,
              private _CartService:CartService){}

  productId:any;
  productsDetails:any = {};

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({
      next:(params)=>{
        this.productId = params.get('id');
      }
    });

    this._ApidataService.GetSpecificProduct(this.productId).subscribe({
      next:(respone)=>{
        this.productsDetails = respone.data;
      }
    });

  }

  productSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay: true,
    nav: false
  }

  addProduct(productID:string):void{
    this._CartService.addToCart(productID).subscribe({
      next:(response) =>{
        // console.log(response.message);
      },
    })
  }


}
