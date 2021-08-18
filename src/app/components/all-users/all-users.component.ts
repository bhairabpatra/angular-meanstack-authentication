import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUser :any =[]
  constructor(private AuthService:AuthService , private router:Router) { }

  ngOnInit(): void {

    this.getUser();
  }
  getUser(){
    this.AuthService.getUser().subscribe(res => {
         this.allUser = res;
         console.log(this.allUser)
    })
  }

}
