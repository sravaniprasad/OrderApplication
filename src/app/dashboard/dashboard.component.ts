import { Component,OnInit } from '@angular/core';
import { AmericanfoodService } from '../services/food/americanfood.service';
import { Afoods } from '../shared/models/Afood';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  foods:Afoods[]=[];
  constructor(private foodService:AmericanfoodService){

  }
  ngOnInit(): void{
       this.foods=this.foodService.getAll();
  }
}
