import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import {FoodService} from '../services/food/food.service';
import { Food } from '../shared/models/food';
import {ActivatedRoute, Router} from'@angular/router';
import { AddFoodpopUpComponent } from '../add-foodpop-up/add-foodpop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-food-list',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  foods:Food[]=[];
  fav!:boolean;
  constructor(private foodService:FoodService, private route:ActivatedRoute, private dialogRef : MatDialog, 
    private auth:AuthService, private router:Router){
      this.fav=true;
    }
  i=0;

  ngOnInit():void{
    // if(!this.auth.isUserLoggedIn()){
    //   this.router.navigate(['/login']);
    // }
    this.foods = this.foodService.getAll();
    
    this.route.params.subscribe(params=>{
      if(params["searchTerm"]){
        this.foods=this.foodService.getAll().filter(food=>food.name.toLowerCase().includes(params["searchTerm"].toLowerCase()));
      }
      else if(params["tag"]){
        this.foods = this.foodService.getAllFoodsByTag(params["tag"]);
      }
      else{
        this.foods = this.foodService.getAll();
      }
    })
  }

  add(){
    let j=      {
      id: parseInt(localStorage["length1"])+1,
      name: 'Meatball',
      price: 20,
      cookTime: '20-30',
      favorite: true,
      origins: ['persia', 'middle east', 'china'],
      stars: 4.7,
      imageUrl:'assets\\images\\foods\\wrap.webp',
      tags: ['SlowFood', 'Lunch'],
    };
    this.foodService.add(j);
  }
  remove(){
    this.foodService.delete();
  }

  openDialog(){
    this.dialogRef.open(AddFoodpopUpComponent,{
      data:{
        name:"sam",
      }
    });

  }
  unfavorite(id:number){
    let favColor:HTMLElement=document.getElementById(`${id}favorite`)!;
    let food = this.foodService.getFoodById(id);

    if(food.favorite){
      food.favorite=false;
      favColor.style.color='grey'
    }
    else{
      food.favorite=true;
      favColor.style.color='red'
    }
    console.log(food);
    id-=1;
    localStorage.setItem(id.toString(),JSON.stringify(food))
    this.fav=true;
  }
  routeFoodPage(id: number){
    if(this.fav){
      
      this.router.navigate([`/home/food-list/food/${id}`]);
    }
    else{
      this.unfavorite(id)
    }
  }
}
