import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomePageComponent,canActivate:[authGuard], 
    children:[    
      {path:'food-list',component:HomeComponent,canActivate:[authGuard],children:[
        {path:'food/:id', component:FoodPageComponent,canActivate:[authGuard]},
      ]},
      {path:'search/:searchTerm',component:HomeComponent,canActivate:[authGuard]},
      {path:'tag/:tag', component:HomeComponent,canActivate:[authGuard]},
      {path:'cart-page', component:CartPageComponent,canActivate:[authGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
