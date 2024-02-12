import { FoodService } from './../services/food/food.service';
import { Component } from '@angular/core';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent {
  food!:Food;
  id!:number;

  constructor(private activatedRoute:ActivatedRoute,private foodService:FoodService,
    private cartService:CartService, private router:Router){
    this.activatedRoute.params.subscribe((params)=>{
      if(params["id"])
        this.food = this.foodService.getFoodById(params["id"]);
        window.scroll({
          top: 200, 
          left: 0, 
          behavior: 'smooth'
        });
      this.id=parseInt(params["id"])
      this.id-=1;
    })
  }

  unfavorite(){
    if(this.food.favorite)
      this.food.favorite=false;
    else
      this.food.favorite=true;
    console.log(localStorage.getItem(this.id.toString()));
    localStorage.setItem(this.id.toString(),JSON.stringify(this.food))
  }

  ngOnInit():void{
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('home/cart-page');
  }
}
