import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-enter-user',
  templateUrl: './option-enter-user.component.html',
  styleUrls: ['./option-enter-user.component.css']
})
export class OptionEnterUserComponent implements OnInit {
  signInIsOpen = false;
  loginIsOpen=false;
  constructor() { }

  ngOnInit(): void {
  }
  signUpPage(){};
  loginPage(){};
}