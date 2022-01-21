import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  showTable:boolean=false;
  userInfo:any;
accountnumber:any;
balance:any;
interest:any;
tenure:any;
  constructor(private route:Router,private userService:LoanService) { }

  ngOnInit(): void {

    this.reloadData();
    let admin = prompt("Please enter Passcode");

if (admin == "admin1234") {
  
  this.showTable=true;
  this.getUsers();
} else {
  this.showTable=false;
  
  
  this.route.navigate(['/home']);
  
}
  }

  reloadData()
  {
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUsers().subscribe((data)=>{
      this.userInfo = data;
      console.log("userInfo",this.userInfo);
      console.log();
      
    
    })
  }

  delete(data:any){
   this.userService.deleteUsers(data.id).subscribe((data)=>{
     this.route.navigate(['/admin']);
     this.reloadData();
   })
  }

}
