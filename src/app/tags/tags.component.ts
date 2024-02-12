import { Component, Input } from '@angular/core';
import {Tag} from '../shared/models/Tag'
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent {

  @Input()
  

  foodPageTags?:string[]
  tags?:Tag[];
  constructor(private foodService:FoodService){}

  ngOnInit():void{
    if(!this.foodPageTags)
      this.tags=this.foodService.getAllTags();
  }
}
