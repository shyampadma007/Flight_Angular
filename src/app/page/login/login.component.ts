import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*form:any = {
    user_name : null,
    password : null
  };*/

 
  isLoggedin = false;
  isLoginFailed = false;
  errorMessage = '';
  roles : string[] = [];

  constructor(private authService : AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  
  onSubmit(loginCheck : any ) : void {
    //const { user_name,password } = this.form;

    if(loginCheck.value.username=="admin" && loginCheck.value.password=="admin")
    {
      this.router.navigate(['/admin/addflight']);
    }
    else{
    const data = {
      "username" : loginCheck.value.username,
      "password" : loginCheck.value.password
    }
    console.log(loginCheck.value.username);
    this.authService.login(data).subscribe(
      data => {
        console.log("CHECK",data);
        this.router.navigate(['/userbooking']);
        this.isLoginFailed = false;
        this.isLoggedin = true;
        
      },
      error => {
        console.log("ERROR");
        console.log(error.error.text);
        if(error.error.text=='Success'){
          this.router.navigate(['/userbooking']);
        } 
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
        
      }
    );
  }
}
 
}
