import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,NgForm,Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  addfood:FormGroup;
  food:string="";
  price:number;
  item:any;
  
  
  

  constructor(private frmbuilder:FormBuilder,private service:MyserviceService,private route:Router) { 
    this.addfood=frmbuilder.group({
      food:["",[Validators.required]],
      price:["",[Validators.required]],
    })
  }

  ngOnInit(): void {
  
  }
 
  data(){
    this.service.getfood(this.addfood.value).subscribe(result=>{
      this.item=result;
      this.route.navigate(['/foodlist'])
    })
  }

}
