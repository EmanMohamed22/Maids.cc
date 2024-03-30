import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { User, UserResponse } from 'src/app/shared/models/user';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  usersData:User[]=[]
  searchArr:User[]=[]
  users:User[]=[]
  searchValue!:number
  total_pages!:number
  pageSize!:number
  pageNumber:number=1
  
constructor(private _UsersService:UsersService,
  private _Toastr:ToastrService){
 
}
ngOnInit(): void {
  this.getFirstPageUsers()
}
// get users for the first page
getFirstPageUsers(){
  let page =1
  this._UsersService.getAllUsers(page).subscribe({
    next:(res)=>{
       this.users=res.data; 
       this.usersData.push(...res.data)
      this.total_pages=res.total_pages;
      this.getRestOfUsers();
    },error:(err)=>{
      this._Toastr.error("No data found")
    }
  })
}
// get all users
getRestOfUsers(){
  let page=2
  while( page< this.total_pages+1){
    
    this._UsersService.getAllUsers(page).subscribe({
      next:(res)=>{
      
        this.usersData.push(...res.data)    
      }
    })
    page++
  }
 
}
// search function
searchFn() {
  
  const found = this.usersData.find((obj) => {
    return obj.id === Number(this.searchValue);
  });

if (found) {
  this.searchArr= [found]
  
} else {
  this.searchArr=[]
}
  
}
// pagenation
handlePageEvent(e: PageEvent) {
  console.log(e);
  this.pageSize = e.pageSize;
  this.pageNumber=e.pageIndex+1
  this.users =this.usersData.slice((this.pageNumber-1)*this.pageSize,this.pageNumber*this.pageSize);
}

}
