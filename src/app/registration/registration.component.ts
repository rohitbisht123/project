import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,NgForm,Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  login:FormGroup;
  firstname:string="";
  lastname:string="";
  eamil:string="";
  address:string="";
  password:string="";
 user:any;

  constructor(private frmbuilder:FormBuilder,private service:MyserviceService,private router:Router) { 
    this.login=frmbuilder.group({
      firstname:["",[Validators.required,Validators.minLength(3)]],
      lastname:["",[Validators.required,Validators.minLength(3)]],
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.minLength(3)]],
      address:["",[Validators.required]],
      Gender:["",[Validators.required]],
      // country:["",[Validators.required]],
      // state:["",[Validators.required]],

    })
  }

  ngOnInit(): void {
  }
  // data(){
  //   console.log(this.login);
    
  // }
  data(){
    this.service.insert(this.login.value).subscribe(result=>{
      this.user=result;
      
      console.log(this.user);
      this.router.navigate(['/login'])
      
    })
  
  }



}
