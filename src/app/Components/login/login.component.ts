import { AuthLayoutComponent } from './../../layouts/auth-layout/auth-layout.component';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}

  loginForm:FormGroup = new FormGroup( {
    email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
  });

  isLoading:boolean =  false;
  errorMsg:string = '';

  // 34an lw user shal el disabled ely 3la button
  handleLogin():void{
    this.isLoading = true;
    if(this.loginForm.valid){
      this._AuthService.loginForm(this.loginForm.value).subscribe({
        next:(response)=>{

          // console.log(response);
          
          if(response.message == "success"){
            localStorage.setItem('token', response.token);
            this._AuthService.saveUser();
            this._Router.navigate(['/home']);
          }
          
          this.isLoading = false;
        },
        error:(err)=>{
          this.isLoading = false;

          this.errorMsg = err.error.message;
        }

      });
    }
  }

}
