import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { LogoComponent } from './logo/logo.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemslistComponent } from './itemslist/itemslist.component';
import { AmericanFoodpageComponent } from './american-foodpage/american-foodpage.component';

const routes: Routes = [
  {path:'',component:LogoComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'itemslist',component:ItemslistComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'login',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Afood/:id',component:AmericanFoodpageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
