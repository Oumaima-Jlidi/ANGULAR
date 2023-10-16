import { Component, OnInit } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../core/Services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  list:User[]=[];
   searchCategory: string = '';

   filteredList: User[] = [];
 
   constructor(private userservice:UserService) {
     this.filteredList = this.list;
     
   }
 
   updateFilteredList() {
    if (this.searchCategory === '') {
      this.filteredList = this.list;
    } else {
      this.filteredList = this.list.filter((user) =>
        user.accountCategory.toLowerCase().includes(this.searchCategory.toLowerCase())
      );
    }
  }
  
   deleteUser(user: User) {
   
     const userIndex = this.list.indexOf(user);
     if (userIndex !== -1) {
       this.list.splice(userIndex, 1);
       alert('Ce user a été supprimé');
     }
   }
   ngOnInit(): void {
     this.list=this.userservice.getAllusers();
   }
}
