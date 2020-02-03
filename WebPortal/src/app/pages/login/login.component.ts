import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName : any;
  password : any;

  constructor(private httpClient: HttpClient, private sessionStorageService: SessionStorageService,
              private router: Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  register () {
    this.router.navigate(['register']);
  }

  login = () =>{
    var params = {
      "email" :this.userName,
      "password":this.password
    }
  this.loginService.doLogin(params).subscribe(data=>{
    console.log(data);
    if(data.status.toLowerCase() == 'success'){
      if(data.jwtToken != null && data.jwtToken != undefined && data.jwtToken != '')
      this.sessionStorageService.store('token',data.jwtToken);
      console.log(this.sessionStorageService.retrieve('token'));
      this.router.navigate(['dashboard']);
  }
  });
}
}
