import { Injectable } from '@angular/core';
import { Afoods } from 'src/app/shared/models/Afood';
@Injectable({
  providedIn: 'root'
})
export class AmericanfoodService {

  constructor() { }
  getAfoodById(id:number):Afoods{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAll():Afoods[]{

    return[
      {
        id:111,
        name:'cheese',
        price:'1500/Kg',
        stars:3.7,
        favourite: false,
        imageUrl:'/assets/cheese.avif',
      },
      {
        id:222,
        name:'dessert',
        price:'17000/Kg, 100/piece',
        stars:4.0,
        favourite: true,
        imageUrl:'/assets/dessert.jpg',
     
      },
      {
        id:333,
        name:'ricedishes',
        price:'150/plate',
        stars:4.3,
        favourite: true,
        imageUrl:'/assets/all.jpg',
     
      },
      {
        id:444,
        name:'Vegetable-Sandwich',
        price:'100/piece',
        stars:4.6,
        favourite: false,
        imageUrl:'/assets/Vegetable-Sandwich.jpg',
     
      },
      {
        id:555,
        name:'bbq',
        price:'1000/plate',
        stars:2.7,
        favourite: false,
        imageUrl:'/assets/bbq.jpg',
     
      },
      {
        id:666,
        name:'Breads',
        price:'250/pack',
        stars:4.0,
        favourite: false,
        imageUrl:'/assets/breads.jpg',
     
      }
    ]
  }
}
