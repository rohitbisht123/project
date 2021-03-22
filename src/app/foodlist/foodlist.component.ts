import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  foodArray=[];

  constructor(private service:MyserviceService) { }
  data:any;

  ngOnInit(): void {
    this.service.find().subscribe(result=>{
      this.data=result;
    })
  }


  addtocart(foods_id){
    console.log(foods_id);
    let foodData = this.data.filter((result)=>{
      return result.id == foods_id;
    
    })
    this.foodArray.push(foodData[0]);
    console.log(this.foodArray);
    localStorage.setItem('foodcart',JSON.stringify(this.foodArray))
    
  


  }





}
