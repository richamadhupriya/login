import { Component, OnInit } from '@angular/core';
import {UserService} from '../userservice.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username:string
  constructor(private userService:UserService) {
    //this.username = userService.username
   }

  ngOnInit() {
    console.log(this.userService.username)
  }


}
