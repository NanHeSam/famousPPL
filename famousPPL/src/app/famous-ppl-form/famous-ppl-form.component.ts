import { Component, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FamousPplServiceService } from '../famous-ppl-service.service';
import { ValidationService } from '../validate-service';
import { Observable } from 'rxjs/Observable';
import { famousPpl } from '../famousPpl';
import { countries } from '../const';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-famous-ppl-form',
  templateUrl: './famous-ppl-form.component.html',
  styleUrls: ['./famous-ppl-form.component.css']
})
export class FamousPplFormComponent implements OnChanges {
  @Input() person: famousPpl;
  personForm: any;
  countries = countries;
  constructor(private fb: FormBuilder, private fs: FamousPplServiceService, private router: Router) { 
    this.createForm();
  }

  createForm(){
    this.personForm = this.fb.group({
      name: ['', Validators.required, ValidationService.nameValidator],
      country: ['', Validators.required, ValidationService.countryValidator],
      description: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  ngOnChanges() {
  }

  onSubmit(){
    this.person = this.preparePerson();
    this.fs.addPeroson(this.person);
    this.router.navigate(['/dashboard']);
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
