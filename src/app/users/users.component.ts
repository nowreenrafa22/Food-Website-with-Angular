import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  response:any;
  constructor(private userService:UserService){}

  extractUsers(){
    this.userService.getUsers().subscribe(
      (response)=>this.response=response
    );
  }

  ngOnInit(){
   this.extractUsers(); 
   setTimeout(()=>
   {console.log(this.response[0])
    console.log(this.response.length)
   } ,3000)
  }

  
  upload(e:any){
    console.log(e.target.files)
  }

}
