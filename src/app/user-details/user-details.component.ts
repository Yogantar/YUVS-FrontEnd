import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id!:number;
  userInfo:any;

  userid:any;
  constructor(private route:ActivatedRoute,private userService:LoanService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getUserInfo(this.id).subscribe(
      (data) => {this.userInfo = data}
    );
  }

}
