import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../userservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName:string;
  password:string;
  //router:Router;

  USER = {'password':'admin'}

  constructor(private router:Router, private userService:UserService) { }
  validateUser(event:any){
    event.preventDefault()
    let user = event.target.elements[0].value;
    let pass = event.target.elements[1].value;
    if(pass == this.USER.password)
    {
      this.userService.setUserLoggedIn(user)
      this.router.navigate(['dashboard']);
    }
    
  }
  ngOnInit() {
    console.log(this.userService.username)
  }

}
