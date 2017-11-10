import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ppl;
  country: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire){
  }

  ngOnInit(){
    this.country = this.af.database.list('/country');
    this.ppl = this.af.database.object('/demograph');
  }

  add(){
    this.country.push({
      name: 'Uganda'
    });
  }
  
  // ngOnDestry(){
  //   this.sub.unsubscribe();
  // }
}
