import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormControlName,FormGroup,NgForm,Validators}  from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // signup:FormGroup;
  // email:string="";
  // password:string="";
  user: any;
  msg: string;
  loginbull:boolean=true;
  signup=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.minLength(3)])
  })
 

  constructor(private service:MyserviceService,private router:Router) { 
   
  }

  ngOnInit(): void {
  }
  verify(){
    let email =this.signup.get('email').value;
    let password =this.signup.get('password').value;

    this.service.show(email,password).subscribe(result=>{
      this.user=result;
      if(this.user[0]!=undefined){
        
        localStorage.setItem('email',this.user[0].email)
        this.router.navigate(['/home'])
      }else{
        this.loginbull=false
        this.msg='email and password not match'
        
      }
    })
    
  }

}
