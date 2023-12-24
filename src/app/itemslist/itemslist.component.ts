import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent {

  constructor(private dialog:MatDialog ,private router:Router){}
  ngOnInit(): void {
    
  }
  Indoamerica(){
    
    this.router.navigateByUrl('dashboard')
  }
  americanfoods(){
    this.router.navigateByUrl('americanfoods')
  }
  openpopup(){
   //   this.dialog.open()
   document.getElementById("popup1")
   ?.classList.toggle("active");
  }
}
