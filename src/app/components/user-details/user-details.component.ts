import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  userId:number=0
  userDetails!:User
  
constructor(private _ActivatedRoute: ActivatedRoute
  ,private _UsersService:UsersService){
  this.userId = _ActivatedRoute.snapshot.params['id'];
}
   

ngOnInit(): void {
  this.getUserById(this.userId)
}

getUserById(id:number){
  this._UsersService.getUserById(id).subscribe({
    next:(res)=>{
      this.userDetails=res.data;
    }
  })
}
}
