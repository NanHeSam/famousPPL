import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamousPplServiceService } from '../famous-ppl-service.service';
import { ValidationService } from '../validate-service';
import { Observable } from 'rxjs/Observable';
import { famousPpl } from '../famousPpl';
import { countries } from '../const';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-famous-ppl-update',
  templateUrl: './famous-ppl-update.component.html',
  styleUrls: ['./famous-ppl-update.component.css']
})
export class FamousPplUpdateComponent implements OnInit {
  @Input() person: famousPpl;
  countries = countries;
  personForm: any;
  curPerson: Observable<famousPpl>;
  constructor(private fs: FamousPplServiceService, private fb: FormBuilder, private route: Router) {
    this.createForm();
  }

  ngOnChanges() {
    this.personForm.reset({
      name: this.person.name,
      country: this.person.country,
      description: this.person.description
    });
  }

  ngOnInit(){
    let id = this.route.url.substr(this.route.url.lastIndexOf('/') + 1);
    this.curPerson = this.fs.getPersonById(id);
    console.log(this.curPerson);
  }
  
  createForm(){
    this.personForm = this.fb.group({
      name: ['', Validators.required, ValidationService.nameValidator],
      country: ['', Validators.required, ValidationService.countryValidator],
      description: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  onSubmit(key: string){
    let savePerson = this.preparePerson();
    this.fs.updatePerson(key, this.person);
  }

  preparePerson(): famousPpl{
    const formModel = this.personForm.value;
    const savePerson: famousPpl = {
      name: formModel.name as string,
      country: formModel.country as string,
      description: formModel.description as string
    };
    return savePerson;
  }
}