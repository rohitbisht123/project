import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  item: any;
 
 

  constructor( ) { }

  ngOnInit(): void {
   this.item=JSON.parse(localStorage.getItem('foodcart'));
 
  }
  
  
}
