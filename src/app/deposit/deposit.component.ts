import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  id:number=0;
  message:any;
  userInfo:any;
  
  account = {
    accountnumber : "",
    balance: 0
  }

  constructor(private depositService:LoanService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.depositService.getUserInfo(this.id).subscribe(
      (data) => {this.userInfo = data}
    );
  }

  deposit(){
      console.log(this.userInfo);
      this.depositService.depositeMoney(this.userInfo.account.acc_id, this.account).subscribe(
        (data) => { this.message = data }
      )
      console.log(this.message);
      this.router.navigate([`dashboard/${this.id}`]);
  }

}
