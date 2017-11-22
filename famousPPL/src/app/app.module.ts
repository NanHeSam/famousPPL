import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { FamousPplDescriptionComponent } from './famous-ppl-description/famous-ppl-description.component';
import { FamousPplServiceService } from './famous-ppl-service.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { FamousPplFormComponent } from './famous-ppl-form/famous-ppl-form.component';
import { ControlMessageComponent } from './control-message/control-message.component';
import { ValidationService } from './validate-service';
import { FamousPplUpdateComponent } from './famous-ppl-update/famous-ppl-update.component';

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
    FamousPplDescriptionComponent,
    DashboardComponent,
    FamousPplFormComponent,
    ControlMessageComponent,
    FamousPplUpdateComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ FamousPplServiceService, ValidationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
