import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FamousPplServiceService } from './famous-ppl-service.service';
import { Observable } from 'rxjs/Observable';
import { famousPpl } from './famousPpl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'List of Famous People';
  person: famousPpl;
  ppl: famousPpl[];
  constructor(private fs: FamousPplServiceService){ }
  ngOnInit(){
    this.getPeople();
  }
  getPeople(): void{
    this.fs.getPpl().subscribe(people => this.ppl = people);
  }
}
