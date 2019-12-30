import {
  Component,
  OnInit,
  ViewChild
}

from '@angular/core';

import {
  ErrorStateMatcher
}

from '@angular/material/core';

import {
  MatStepper,
  MatHorizontalStepper
}

from '@angular/material';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter
}

from '@angular/material-moment-adapter';

import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
}

from '@angular/material/core';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
}

from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
   // return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return !!(control && control.invalid && (control.dirty  || isSubmitted));
  }
}

/* export interface Geslacht {
value: string;
viewValue: string;
}
export interface GeslSoortacht {
value: string;
viewValue: string;
} */
@Component({
    selector: 'app-inschrijving',
    templateUrl: './inschrijving.component.html',
    styleUrls: ['./inschrijving.component.css'],
    providers: [ // The locale would typically be provided on the root module of your application. We do it at

      // the component level here, due to limitations of our example generation script.
      {
        provide: MAT_DATE_LOCALE,
        useValue: 'nl-NL'
      }

      ,

      // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
      // `MatMomentDateModule` in your applications root module. We provide it at the component level
      // here, due to limitations of our example generation script.
      {
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE]
      }

      ,
      {
        provide: MAT_DATE_FORMATS,
        useValue: MAT_MOMENT_DATE_FORMATS
      }

      ,
    ],

  }

) export class InschrijvingComponent implements OnInit {
  //gender;
  //genderList = ['Male', 'Female']
  selectedGeslacht: string;
  selectedAtleet: string;
  inschrijfVoornaam: string;
  inschrijfNaam: string;
  isLinear = true;
  firstFormGroup: FormGroup;
  step1Completed = false;
  step2Completed = false;
  step3Completed = false;

  @ViewChild(MatStepper, {
      static: false
    }

  ) stepper: MatStepper;


  /*Validators*/
  naamFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
  
  ]);
  voorNaamFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
   
  ]);
  geboortePlaatsFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator
  ]);
  nationaliteitFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,


  ]);

  emailFormControl = new FormControl('', [Validators.required,
    Validators.email,
    this.noWhitespaceValidator,

  ]);
  adressFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,

  ]);
  nrFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
    /* this.intergerValidator, */

  ]);

  postcodeFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
    this.MinFourLetters

  ]);

  gemeenteControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,

  ]);

  tel1FormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,this.MinTenLetters

  ]);


  /**einde Validators */
  matcher = new MyErrorStateMatcher();


  constructor(private _adapter: DateAdapter < any > , private _formBuilder: FormBuilder,private _snackBar: MatSnackBar) {}
  naamInschrijving:string;
  voorNaamInschrijving:string;
  
  



  ngOnInit() {
    /* this.firstFormGroup = this._formBuilder.group({
        first: new FormControl('', [Validators.required,
          this.noWhitespaceValidator
        ]),
        voornaamCtrl: ['', Validators.minLength(3)],

      }

    ); */

  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;

    return isValid ? null : {
      'whitespace': true
    }

    ;
  }
  public MinFourLetters(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length < 4;
    const isValid = !isWhitespace;

    return isValid ? null : {
      'smallerdanfor': true
    }

    ;
  }
  public MinTenLetters(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length < 10;
    const isValid = !isWhitespace;

    return isValid ? null : {
      'smallerdanTen': true
    }

    ;
  }

  /*Functions */

  goForward(stepper: MatStepper) {
    //this.step1Completed = true;
if (this.naamFormControl.valid&&this.voorNaamFormControl.valid&&
  this.geboortePlaatsFormControl.valid&&this.nationaliteitFormControl.valid&&
  this.emailFormControl.valid&&this.adressFormControl.valid&&
  this.nrFormControl.valid&&this.postcodeFormControl.valid&&
  this.gemeenteControl.valid&&this.tel1FormControl.valid) {
    this.step1Completed = true;
    this.stepper.next()
} else {
  this._snackBar.open("1 of meerdere velden zijn niet correct ingevuld", "Sluiten", {
    duration: 5000,
  });
}

    

    /* stepper.next() */
  }

  goForwardMEdish(stepper: MatStepper) {
    this.step2Completed = true;
    this.stepper.next()
    /* stepper.next() */
  }

  goForwardConfirm(stepper: MatStepper) {
    this.step3Completed = true;
    this.stepper.next()
    /* stepper.next() */
  }
}
