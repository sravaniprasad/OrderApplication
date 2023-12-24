import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  

  getFoodById(id:number):Foods{
    return this.getAll().find(food =>food.id == id)!;
  }
  getAllTag():Tag[]{

    return [
      {name:'All', count:9},
      {name:'Meat', count:2},
      {name:'SnackFoods', count:2},
      {name:'Veg', count:2},
      {name:'Tiffins', count:2},
      {name:'Fruits', count:1},
      {name:'Spicy',count:3}
    ];
  }

  getAllFoodByTag(tag:string) :Foods[]{
        
    return tag=="All"?
    this.getAll() : this.getAll().
    filter(food =>food.tags?.includes(tag))
    
        // if(tag == 'All')
        //  return this.getAll()
        //  else
        //   return this.getAll().filter(food =>food.tags?.includes(tag))
  }
  
  getAll():Foods[]{
    return [
      // '/assets/burger.jpg',
      // '/assets/food.jpg',
      // '/assets/spices.jpg',
      // '/assets/veg.jpg',
      // '/assets/all.jpg',
      // '/assets/Nonveg.jpg',
      // '/assets/plate.jpg',
      // '/assets/tiffins.jpg',
      // '/assets/fruits.jpg',
        {
          id:1,
          price:70,
          name:'Burger',
          favorite:true,
          stars:2,
          tags:['SnackFoods','Spicy'],
          imageUrl:'/assets/burger.jpg',
          cookTime:'10-20',
          origins:['india','china'],
      
        },
        {
          id:2,
          price:100,
          name:'JunkFood',
          favorite:true,
          stars:3.2,
          tags:['SnackFoods','Spicy','hot','yummy'],
          imageUrl:'/assets/food.jpg',
          cookTime:'5-10',
          origins:['india','middle-east'],
      
        },
        {
          id:3,
          price:50,
          name:'Spices',
          favorite:false,
          stars:4.5,
          tags:['Veg','Spicy'],
          imageUrl:'/assets/spices.jpg',
          cookTime:'10',
          origins:['india'],
      
        },
        {
          id:4,
          price:200,
          name:'Vegetables',
          favorite:true,
          stars:4.1,
          tags:['Veg','Sweet and hot'],
          imageUrl:'/assets/veg.jpg',
          cookTime:' to pack in 5 ',
          origins:['india','middle-east'],
      
        },
        {
          id:5,
          price:90,
          name:'Pasta',
          favorite:true,
          stars:4.0,
          tags:['Tiffins','Sweet and hot'],
          imageUrl:'/assets/all.jpg',
          cookTime:'5-10 ',
          origins:['india'],
      
        },
        {
          id:6,
          price:350,
          name:'Non Veg',
          favorite:true,
          stars:4.9,
          tags:['Meat','Too Hot and Spicy'],
          imageUrl:'/assets/Nonveg.jpg',
          cookTime:'20-30',
          origins:['india','china','middle-east'],
      
        },
        {
          id:7,
          price:150,
          name:'salad non-veg',
          favorite:true,
          stars:3.9,
          tags:['Meat','hot'],
          imageUrl:'/assets/plate.jpg',
          cookTime:'20 ',
          origins:['india','china'],
      
        },
        {
          id:8,
          price:90,
          name:'Tiffins',
          favorite:true,
          stars:4.7,
          tags:['Tiffins','All tiffins available'],
          imageUrl:'/assets/tiffins.jpg',
          cookTime:'10',
          origins:['india'],
      
        },
        {
          id:9,
          price:400,
          name:'Fruits',
          favorite:true,
          stars:4.5,
          tags:['Fruits','Sweet and Tasty'],
          imageUrl:'/assets/fruits.jpg',
          cookTime:'to pack in 5 ',
          origins:['india','All over the world'],
      
        },

    ]
  }
}

