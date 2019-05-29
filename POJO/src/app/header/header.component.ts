import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName:string;
  now:any=new Date();
  months:string[]=["January","February","March","April","May","June","August","September","October","November","December"]
  day:number;
  month:any;
  minutes:any;
  hours:any;
  seconds:any;
  today:any;
  constructor(public afAuth: AngularFireAuth) {
    this.userName=JSON.parse(localStorage.getItem("userName"));
   }


  ngOnInit() {

    setInterval(()=>{
      this.day=this.now.getDate();
      this.month=this.months[this.now.getMonth()];
      this.hours=this.now.getHours();
      this.minutes=this.now.getMinutes();
      this.seconds=this.now.getSeconds();
      this.today=this.day+"-"+this.month+"  "+this.hours+":"+this.minutes+":"+this.seconds;
      },1000);
  }

  logout() {
    this.afAuth.auth.signOut();
  }



}
