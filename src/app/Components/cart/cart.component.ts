import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  constructor(private _CartService:CartService, private _Renderer2:Renderer2) {}

  cartData:any = {};

  ngOnInit(): void {

    this._CartService.getCart().subscribe({
      next:(res) =>{
        this.cartData = res.data;
      }
    });

  }

  removeProduct(id:string):void{
    this._CartService.RemoveProduct(id).subscribe({
      next:(res) =>{
        this._CartService.cartNumber.next(res.numOfCartItems);
        this.cartData = res.data;
      }
    });
  }

  changeCount(count:number, id:string, el1:HTMLButtonElement, el2:HTMLButtonElement):void{
    this._Renderer2.setAttribute(el1,'disabled','true');
    this._Renderer2.setAttribute(el2,'disabled','true');

    this._CartService.updateProductQuatity(id,count).subscribe({
      next:(res) =>{
        this.cartData = res.data;
        // this._Renderer2.removeAttribute(el1,'disabled');
        // this._Renderer2.removeAttribute(el2,'disabled');
      },
      error:() =>{
        this._Renderer2.removeAttribute(el1,'disabled');
        this._Renderer2.removeAttribute(el2,'disabled');
      }
    });
  }

  clearCart():void{
    this._CartService.clearCart().subscribe({
      next:(res) =>{
        this.cartData = res;        
      }
    });
  }

}
