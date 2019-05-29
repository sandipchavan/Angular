import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// angular-notifier
import { NotifierModule } from 'angular-notifier';
import { HeaderComponent } from './header/header.component';
// mdbootstrap module
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// font awesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './home/home.component';
import { HeadingComponent } from './heading/heading.component';
import { ProgressbarDirective } from './progressbar.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material design related component
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MaterialModule } from './modules/material/material.module';
import { MatIconModule } from "@angular/material/icon";
// ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { CardCarouselComponent } from './home/card-carousel/card-carousel.component';
// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

const appRoutes: Routes = [

];

@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    HomeComponent,
    HeadingComponent, ProgressbarDirective, CardCarouselComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NotifierModule.withConfig(),
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule, MatCheckboxModule,
    MaterialModule,
    NgbModule,MatIconModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'pojo-and-dao'),
    AngularFirestoreModule,AngularFireStorageModule,AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
