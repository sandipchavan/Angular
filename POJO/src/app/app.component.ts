import { Component } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "POJO";
  isUserLoggedIn:boolean=false;
  constructor(db: AngularFirestore,public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result)=>{
      console.log(result.user);
      var name=result.user.displayName.split(' ')[0];
      console.log(name+"fafafafafaf");
      localStorage.setItem("userName",JSON.stringify( name));
    });
  }


}
