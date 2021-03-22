import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { CartComponent } from './cart/cart.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {path:'' ,redirectTo:'login', pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'registration',component:RegistrationComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'addfood',component:AddfoodComponent
  },
  {
    path:'cart',component:CartComponent
  },
  {
    path:'foodlist',component:FoodlistComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
