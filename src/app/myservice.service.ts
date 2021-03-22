import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foods, Student } from 'src/model/student';

const httpoptions = {
  headers: new HttpHeaders({'Content-type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http:HttpClient) { }
  url= "http://localhost:3000"
  show(email,password):Observable<Student[]>{
    return this.http.get<Student[]>(this.url+'/student?email='+email+'&password='+password)

  }
  insert(data):Observable<Student[]>{
    return this.http.post<Student[]>(this.url+'/student',data,httpoptions)

  }

  getfood(data1):Observable<Foods[]>{
    return this.http.post<Foods[]>(this.url+'/foods',data1,httpoptions)

  }
//find data from foods table
  find():Observable<Foods[]>{
    return this.http.get<Foods[]>(this.url+'/foods')

  }
  
}
