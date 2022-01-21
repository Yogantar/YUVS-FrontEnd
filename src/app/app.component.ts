import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YUVS-home-loans';

  userid:any;

  constructor(public loginservice: AuthenticationService) {}

  ngOnInit():void{
   this.userid= localStorage.getItem('userId');
   console.log("Id: ",this.userid);
   
  }

}
