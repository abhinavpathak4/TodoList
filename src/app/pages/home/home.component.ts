import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 name : string = 'abhinav';
  constructor(private authService : AuthService){}
  ngOnInit(): void {
    console.log('home component'); 
    this.getToken(); 
  }

  getToken(){
    this.authService.getToken().subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
