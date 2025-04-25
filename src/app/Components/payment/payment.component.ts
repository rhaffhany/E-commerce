import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{

  constructor(private _FormBuilder:FormBuilder, private _PaymentService:PaymentService, private _ActivatedRoute:ActivatedRoute) {}

  cartId:any = '';

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(params) =>{
        this.cartId = params.get('id');
      }
    });
  }

  checkForm:FormGroup = this._FormBuilder.group({
    details:[''],
    phone:[''],
    city:['']
  });

  checkOut():void{
    const cartDetails = this.checkForm.value;
    this._PaymentService.checkOut(this.cartId, cartDetails).subscribe({
      next:(res) =>{
        window.open(res.session.url, '_self');
      }
    });
  }

}
