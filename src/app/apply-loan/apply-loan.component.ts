import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css']
})
export class ApplyLoanComponent implements OnInit {

  id!:number;
  message:any;
  userInfo:any;
  account:any =
  {
    
    accountnumber:'',
    balance:0,
    interest:0,
    tenure:0
  };

  constructor(private loanService:LoanService,private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.loanService.getUserInfo(this.id).subscribe(
      (data) => {this.userInfo = data}
    );
  }

  onSubmit()
  {
    var userData:any;

         
    
    
    this.loanService.addAccoutDetails(this.userInfo.account.acc_id, this.account).subscribe(
      (data) => { this.message = data }
    )
    console.log(this.message);
    this.router.navigate([`dashboard/${this.id}`]);
}
  }


