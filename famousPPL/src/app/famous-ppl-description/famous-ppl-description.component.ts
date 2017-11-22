import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { FamousPplServiceService } from '../famous-ppl-service.service';

import { Observable } from 'rxjs/Observable';
import { famousPpl } from '../famousPpl';

@Component({
  selector: 'app-famous-ppl-description',
  templateUrl: './famous-ppl-description.component.html',
  styleUrls: ['./famous-ppl-description.component.css']
})
export class FamousPplDescriptionComponent implements OnInit {
  @Input() person: famousPpl
  constructor(private fS: FamousPplServiceService, private route: ActivatedRoute,
  private location: Location, private router: Router) { }

  ngOnInit() {
    this.getPerson();
  }

  getPerson(): void{
    let id = this.route.snapshot.paramMap.get('id');
    this.fS.getPersonById(id).subscribe(person => this.person = person);
  }

  getBack(): void{
    this.location.back();
  }
  
  update(): void{
    let url = this.route.snapshot.paramMap.get('id');
    console.log(url);
    this.router.navigate(['/description/update/' + url]);
  }
}
