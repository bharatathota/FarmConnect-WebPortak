import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
//import {sharedService} from 'src/app/services/sharedService';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName : any;
  password : any;
  firstname : any;
  lastname : any;

  constructor(private httpClient: HttpClient, private sessionStorageService: SessionStorageService,
              private router: Router,private registerService:RegisterService) { }

  ngOnInit() {
  }

  login =() => {
    this.router.navigate(['login']);
  }

  register = () =>{
    var params = {
      "email" :this.userName,
      "password":this.password,
      "firstname":this.firstname,
      "lastname":this.lastname
    }
  this.registerService.doRegister(params).subscribe(data=>{
    if(data.status.toLowerCase() == 'success'){
      alert(data.message);
      this.router.navigate(['login']);
    }
  });
}
}
