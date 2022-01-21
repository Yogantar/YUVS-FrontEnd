import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id:any;
  userInfo:any;
  userName:any;
  constructor(private router:Router, private route:ActivatedRoute, private loanService:LoanService) { }

  ngOnInit(): void {

    this.id = localStorage.getItem('userId');
    this.loanService.getUserInfo(this.id).subscribe(
      (data) => {this.userInfo = data
          console.log(this.userInfo);
           this.userName = this.userInfo.name;
      }
    );
  }

  goToapply(){
    this.router.navigate([`/loan/${this.id}`]);
  }
  goToDeposit(){

    this.router.navigate([`/deposit/${this.id}`]);
  }

  goToUserDetails()
  {
    this.router.navigate([`/details/${this.id}`]);
  }
}
