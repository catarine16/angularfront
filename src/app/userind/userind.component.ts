import { Component } from '@angular/core';

@Component({
  selector: 'app-userind',
  templateUrl: './userind.component.html',
  styleUrls: ['./userind.component.css']
})
export class UserindComponent {
loggedIn: boolean = false;
username: string = '';

isUserLoggedIn(): boolean{
  return this.loggedIn;
}
login() {
  this.loggedIn = true;
  this.username = 'Jose B.'
}
logout(){
  this.loggedIn= false;
  this.username= '';
}
}
