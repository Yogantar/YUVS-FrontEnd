import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user:any = {
    id:0,
    name:'',
    address:'',
    phone_no:0,
    email:'',
    password:''
};

  constructor(private loanService:LoanService,private router:Router) { }

  ngOnInit(): void {
  }

  onRegister(){
    this.loanService.registerUser(this.user).subscribe(
      (data) => console.log(data)
    );
    this.router.navigate(['/login']);
  }
  
}
