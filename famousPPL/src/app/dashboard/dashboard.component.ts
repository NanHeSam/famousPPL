import { Component, OnInit, OnDestroy } from '@angular/core';
import { FamousPplServiceService } from '../famous-ppl-service.service';
import { Observable } from 'rxjs/Observable';
import { famousPpl } from '../famousPpl';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ppl: famousPpl[]
  constructor(private fS: FamousPplServiceService){}

  ngOnInit(){
    this.getPeople();
  }

  getPeople(): void{
    this.fS.getPpl().subscribe(people=> this.ppl = people);
  }

  delete(key: string): void{
    this.fS.deletePerson(key);
  }
}
