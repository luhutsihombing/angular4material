import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public auth;
  
  constructor() { }

  ngOnInit() 
  {
    this.auth = JSON.parse(sessionStorage.getItem('Auth'));
    console.log("Profile Token:"+this.auth.user.firstName);
  }
  
}
