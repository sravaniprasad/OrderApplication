import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{

food!:Foods;
  constructor(activatedRoute:ActivatedRoute,
     private api:FoodService,
      private cartService:CartService, private router:Router){
   
    activatedRoute.params.subscribe((params)=>{
   if(params['id'])
   this.food =api.getFoodById(params['id'])
   

    })
 
  }
  ngOnInit(): void {
    
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('cart-page')
  }
}
