import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    //headers are immutable
    // const myHeaders=new HttpHeaders({'myheader':'headervalue'})
    //http params
    // let myParams=new HttpParams().set('page','5').set('sort','true');
    // let myParams=new HttpParams({fromString:'name=Junior&id=58'});
    // return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users',{headers:myHeaders});
    // return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users',{params:myParams});
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUser():Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }

  createUser(user:User):Observable<User>{
    return this.http.post<User>('https://jsonplaceholder.typicode.com/users',user);
  }

  deleteUser(id:number) :Observable<boolean>{
    return this.http.delete<boolean>(`https://jsonplaceholder.typicode.com/${id}`);
  }
}
