import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  email:string = "";
  password:string = "";
  message:string="";
  userInfo:any;
  userid:any;

  constructor(private loginservice:AuthenticationService ,private loanService:LoanService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.userid= this.loginservice.getId();
   console.log("Id: ",this.userid);
  }

  onLogin(){
    let pass =( btoa(this.password));
    this.loanService.loginUser(this.email, pass).subscribe(
      (data) => {
        this.userInfo = data;
        if(this.userInfo == undefined || this.userInfo == null){
          this.message = "invalid credential";
        }
        else
          {
            sessionStorage.setItem('username', this.email)
            localStorage.setItem("userInfo",this.userInfo);
            console.log(this.userInfo.id);
            localStorage.setItem("userId",this.userInfo.id)
            this.message = "Redirecting towards dashboard...";
            this.router.navigate([`/dashboard/${this.userInfo.id}`]);
          }
      }
    );
   

  }
}
