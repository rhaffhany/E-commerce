import { afterNextRender, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private _AuthService:AuthService, private _Router:Router, private _FormBuilder:FormBuilder){}

  registerForm:FormGroup = this._FormBuilder.group({
    name:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)] ],
    email:['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.pattern(/^\w{6,}$/)] ],
    rePassword:['', [Validators.required, Validators.pattern(/^\w{6,}$/)] ],
    phone:['', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)] ],
  });

  // registerForm:FormGroup = new FormGroup( {
  //   name:new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email:new FormControl('', [Validators.required, Validators.email]),
  //   password:new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  //   rePassword:new FormControl('', [Validators.required, Validators.pattern(/^\w{6,}$/)]),
  //   phone:new FormControl('', [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]),
  // });

  isLoading:boolean =  false;
  errorMsg:string = '';

  // 34an lw user shal el disabled ely 3la button
  handleRegister():void{
    this.isLoading = true;

    if(this.registerForm.valid){
      this._AuthService.registerForm(this.registerForm.value).subscribe({
        next:(response)=>{
          // console.log(response);
          
          if(response.message == "success"){
            this._Router.navigate(['/login']);
          }
          
          this.isLoading = false;
        },
        error:(err)=>{
          // h4of el mess f el postman / backend
          this.isLoading = false;

          this.errorMsg = err.error.message;
        }

      });
    }
  }
}
