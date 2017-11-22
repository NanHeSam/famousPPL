import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import { famousPpl } from './famousPpl';
import { FirebaseObjectObservable } from 'angularfire2/database';
@Injectable()
export class FamousPplServiceService {
  private dbPath: string = '/People';
  person: famousPpl;
  ppl: FirebaseListObservable<famousPpl[]>;
  constructor(private af: AngularFire) { 
  }

  getPpl (): Observable<famousPpl[]>{
    this.ppl = this.af.database.list(`${this.dbPath}`);
    return this.ppl;
  }

  getPersonById (key: string): Observable<famousPpl>{
    return this.af.database.object(`${this.dbPath}/${key}`);
  }

  addPeroson (person: famousPpl): void{
    this.af.database.list(`${this.dbPath}`).push(person);
  }

  deletePerson(key: string) {
    this.af.database.object(`${this.dbPath}/${key}`).remove();
  }

  updatePersonDescription(key: string, description: string){
    this.af.database.object(`${this.dbPath}/${key}`).set({
      description: description
    });
  }

  updatePersonCountry(key: string, country: string){
    this.af.database.object(`${this.dbPath}/${key}`).set({
      country: country
    });
  }

  updatePersonName(key: string, name: string){
    this.af.database.object(`${this.dbPath}/${key}`).set({
      name: name
    });
  }

  updatePerson(key: string, person: famousPpl){
    this.af.database.object(`${this.dbPath}/${key}`).update(person);
  }
}
