import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/data-inerface';
import { ApidataService } from 'src/app/services/apidata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(private _ApidataService:ApidataService, 
              private _CartService:CartService,
              private _ToastrService:ToastrService){}

  productsData:any[] = [];
  CategoriesData:Category[] = [];

  ngOnInit(): void {
    this._ApidataService.getProducts().subscribe({
      next:(response)=>{
        this.productsData = response.data;
      }
    });

    this._ApidataService.getCategories().subscribe({
      next:(response)=>{
        this.CategoriesData = response.data;
      }
    });
  }

  catSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['prev', 'next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    autoplay:true,
    nav: true
  }

  headSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    autoplay: true,
    nav: true
  }

  addProduct(productID:string):void{
    this._CartService.addToCart(productID).subscribe({
      next:(response) =>{
        this._CartService.cartNumber.next(response.numOfCartItems);
        this._ToastrService.success(response.message);
      },
    })
  }

}


