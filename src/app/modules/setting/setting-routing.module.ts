import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';

const routes: Routes = [
  {path:'' , redirectTo:'forget-pass', pathMatch:'full'},
  {path:'forget-pass' , component: ForgetpasswordComponent, title: 'Forget Password'},
  {path:'update-pass' , component: UpdatepasswordComponent, title: 'Update Password'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
