// import { Http } from '@angular/http';
import { Component, OnInit, NgModule } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient} from '@angular/common/http';
import { isDevMode } from '@angular/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

export interface Onderwerp {
  value: string;
  viewValue: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
/* export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
} */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent implements OnInit {
  naam: string;
  voornaam: string;
  telefoon: string;
  email: string;
  onderwerp: string;
  message: string;
  endpoint: string;
  http: HttpClient;



  selectedOnderwerp: string;
  naamFormControl = new FormControl('', [
    Validators.required,
    this.requiredTrimmed,
  ]);
  voorNaamFormControl = new FormControl('', [
    Validators.required,
    this.requiredTrimmed,
  ]);
  comentaarFormControl = new FormControl('', [
    Validators.required,
    this.requiredTrimmed,
  ]);
  telFormControl = new FormControl('', [
    Validators.required,
    this.requiredTrimmed,
    Validators.minLength(7)
  ]);
  onderwerpFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    this.requiredTrimmed,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private _snackBar: MatSnackBar, http: HttpClient) {
    this.http = http;
  }


  ngOnInit() {
    // Start php via the built in server: $ php -S localhost:8000
    this.endpoint = 'sendEmail.php';
  }

  public requiredTrimmed(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : {
      whitespace: true
    };
  }

  sendContactMail(event) {
    event.target.disabled = true;

    // Collect errors
    const formErrors = [];
    if (!this.naamFormControl.valid) {
      formErrors.push('Naam niet correct ingevuld.'); }
    if (!this.voorNaamFormControl.valid) {
      formErrors.push('Voornaam niet correct ingevuld.'); }
    if (!this.emailFormControl.valid) {
      formErrors.push('Email niet correct ingevuld.'); }
    if (!this.telFormControl.valid) {
      formErrors.push('Telefoonnummer niet correct ingevuld.'); }
    console.log(formErrors);

    if (formErrors.length > 0) {
      // Cannot get newlines to show without making a component for this
      // which is too much effort right now.
      this._snackBar.open(formErrors.join('\n'), 'Sluiten', {
        duration: 5000,
      });
      event.target.disabled = false;
      return;
    }

    // No errors, send message.
    const postVars = {
      email : this.emailFormControl.value,
      naam : this.naamFormControl.value,
      voornaam : this.voorNaamFormControl.value,
      telefoon : this.telFormControl.value,
      message : this.comentaarFormControl.value,
      onderwerp : this.onderwerpFormControl.value
    };
    if (!isDevMode()) {
      this.http.post(this.endpoint, postVars)
        .subscribe(
          response => {
            console.log(response);
            if (response['sent'] === true) {
              event.target.innerText = 'Verstuurd!';
            } else {
              event.target.disabled = false;
            }
          },
          error => {
            console.log(error);
            this._snackBar.open('Er ging iets mis bij het verzenden.', 'Sluiten', {
              duration: 5000,
            });
            event.target.disabled = false;
          }
        );
    } else {
      console.log('Not sending mail in dev mode, local ISP probably blocks it anyway');
    }
  }
}
