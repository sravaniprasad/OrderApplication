import { Component, OnInit } from '@angular/core';
import { Afoods } from '../shared/models/Afood';
import { ActivatedRoute } from '@angular/router';
import { AmericanfoodService } from '../services/food/americanfood.service';

@Component({
  selector: 'app-american-foodpage',
  templateUrl: './american-foodpage.component.html',
  styleUrls: ['./american-foodpage.component.css']
})
export class AmericanFoodpageComponent implements OnInit {

  food!:Afoods;
  constructor(private activatedRoute:ActivatedRoute, private Afoodservice:AmericanfoodService){
   activatedRoute.params.subscribe((params)=>{
    if(params['id'])
    this.food=Afoodservice.getAfoodById(params['id'])
   })
  }
  ngOnInit(): void {
    
  }
}
