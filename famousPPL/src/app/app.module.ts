import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FamousPplListComponent } from './famous-ppl-list/famous-ppl-list.component';

export const firebaseConfig = {
  apiKey: "AIzaSyAPnSo1J79LpGCK4yshHRnPHbTbqKOWKqU",
  authDomain: "famousppl-b0d8c.firebaseapp.com",
  databaseURL: "https://famousppl-b0d8c.firebaseio.com",
  projectId: "famousppl-b0d8c",
  storageBucket: "famousppl-b0d8c.appspot.com",
  messagingSenderId: "727759079956"
};

@NgModule({
  declarations: [
    AppComponent,
    FamousPplListComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
