import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-add-foodpop-up',
  templateUrl: './add-foodpop-up.component.html',
  styleUrls: ['./add-foodpop-up.component.scss']
})
export class AddFoodpopUpComponent {
  firstName;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private foodService:FoodService){
    this.firstName = data.name;
  }

  foodPopUpObj={
      id: parseInt(localStorage["length1"])+1,
      name:'',
      price:null,
      cookTime: '',
      favorite: null,
      origins: [''],
      stars:null,
      imageUrl:'',
      tags:[''],
  }
  strOrigins!:string;
  strTags!:string;

  addFood(){
    this.foodPopUpObj.origins=this.strOrigins.split(',')
    this.foodPopUpObj.tags=this.strTags.split(',')
    this.foodService.add(this.foodPopUpObj);
  }
}
