import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Login } from 'src/app/shared/modals/login';
import { Visitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Visiters } from 'src/app/shared/modals/visiters';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  hide = true;
  formGroupLogin:FormGroup;
  
  constructor(public userService:UserService,public router:Router,private _formBuilder: FormBuilder) { }
  loginData:Login= new Login();
  ngOnInit(): void {
    this.formGroupLogin = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  }
  
  login(){
    this.userService.login(this.loginData).subscribe(res => {
      if (res == null) {
        alert("null")
      }
      else {
        this.userService.CurrentUser=res;
        this.router.navigate(["/home"]);
      }
    });
  }

}