import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map'

export class ValidationService{

    static getValidatorErrorMessage(validatorName: string, validatorValue?: any){
        let config = {
            'required': 'Required',
            'invalidName': 'Invalid person name',
            'invalidCountry': 'Invalid country',
            'minlength': `Minimum length is ${validatorValue.requiredLength}`
        }
        return config[validatorName];
    }

    static nameValidator(control){
        return Observable.of(control.value.match(/^[a-zA-Z]+$/))
                        .map(result => result ? null : {"invalidName": true});
    }

    static countryValidator(control){
        return Observable.of(control.value.match(/^[a-zA-z]+$/))
                        .map(result => result ? null : {"invalidCountry" : true});
    }

    /*static descriptionValidator(control){
        return Observable.of(control.value.length <= 10)
                        .map(result => !! result ? {"minLength": true} : null)
    }*/
}