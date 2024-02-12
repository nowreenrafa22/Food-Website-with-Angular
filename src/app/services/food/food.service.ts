import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/food';
import {Tag} from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  // x=[
  //   {
  //     id: 1,
  //     name: 'Pizza Pepperoni',
  //     cookTime: '10-20',
  //     price: 10,
  //     favorite: false,
  //     origins: ['italy'],
  //     stars: 4.5,
  //     imageUrl:       'assets\\images\\foods\\icecream.jpg',
  //     tags: ['FastFood', 'Pizza', 'Lunch'],
  //   },
  //   {
  //     id: 2,
  //     name: 'Meatball',
  //     price: 20,
  //     cookTime: '20-30',
  //     favorite: true,
  //     origins: ['persia', 'middle east', 'china'],
  //     stars: 4.7,
  //     imageUrl:'assets\\images\\foods\\wrap.webp',
  //     tags: ['SlowFood', 'Lunch'],
  //   },
  //   {
  //     id: 3,
  //     name: 'Hamburger',
  //     price: 5,
  //     cookTime: '10-15',
  //     favorite: false,
  //     origins: ['germany', 'us'],
  //     stars: 3.5,
  //     imageUrl: 'assets\\images\\foods\\burger.webp',
  //     tags: ['FastFood', 'Hamburger'],
  //   },
  //   {
  //     id: 4,
  //     name: 'Fried Potatoes',
  //     price: 2,
  //     cookTime: '15-20',
  //     favorite: true,
  //     origins: ['belgium', 'france'],
  //     stars: 3.3,
  //     imageUrl: 'assets\\images\\foods\\oyster.jpg',
  //     tags: ['FastFood', 'Fry'],
  //   },
  //   {
  //     id: 5,
  //     name: 'Chicken Soup',
  //     price: 11,
  //     cookTime: '40-50',
  //     favorite: false,
  //     origins: ['india', 'asia'],
  //     stars: 3.0,
  //     imageUrl: 'assets\\images\\foods\\hotdog.jpg',
  //     tags: ['SlowFood', 'Soup'],
  //   },
  //   {
  //     id: 6,
  //     name: 'Vegetables Pizza',
  //     price: 9,
  //     cookTime: '40-50',
  //     favorite: false,
  //     origins: ['italy'],
  //     stars: 4.0,
  //     imageUrl:'assets\\images\\foods\\pizza.jpeg',
  //     tags: ['FastFood', 'Pizza', 'Lunch'],
  //   },
  // ]
  constructor() { 
    // let i=0;
    // this.x.forEach((j)=>{
    //   let jsonString=JSON.stringify(j);
    //   localStorage.setItem(i+"",jsonString);
    //   i++;
    // });
    // localStorage.setItem("length1","6")
  }

  getAllFoodsByTag(tag:string):Food[]{
    if(tag=='All'){
      return this.getAll();
    }
    else{
      return this.getAll().filter(food=>food.tags?.includes(tag))
    }
  }

  getFoodById(id:number):Food{
    return this.getAll().find(food=>food.id == id)!;
  }

  getAllTags():Tag[]{
    return [
      {name:'All',count:localStorage["length1"]},
      { name: 'FastFood', count: this.getAll().filter(food=>food.tags?.includes("FastFood")).length},
      { name: 'Pizza',  count:this.getAll().filter(food=>food.tags?.includes("Pizza")).length},
      { name: 'Lunch',  count:this.getAll().filter(food=>food.tags?.includes("Lunch")).length},
      { name: 'SlowFood',  count:this.getAll().filter(food=>food.tags?.includes("SlowFood")).length},
      { name: 'Hamburger',  count:this.getAll().filter(food=>food.tags?.includes("Hamburger")).length},
      { name: 'Fry',  count:this.getAll().filter(food=>food.tags?.includes("Fry")).length},
      { name: 'Soup',  count:this.getAll().filter(food=>food.tags?.includes("Soup")).length},
    ]
  }

  getAll():Food[]{
    let foods=[];
    let length=localStorage["length1"];
    let len:number=+length;
    for (let i=0;i<len;i++){
      let index=i+"";
      foods.push(JSON.parse(localStorage[index]));
    }
    return foods
  }

  add(y:any){
    // this.x.push(y);
    let length=localStorage["length1"];
    let len:number=+length;
    len+=1;
    localStorage.setItem(localStorage["length1"],JSON.stringify(y));
    localStorage.setItem("length1",len.toString())
    location.reload();
  }
  
  delete(){
    let length=localStorage["length1"];
    let len:number=+length;
    localStorage.removeItem(len+"");
    len-=1;
    localStorage.setItem("length1",len.toString())
    location.reload();
  }
}
