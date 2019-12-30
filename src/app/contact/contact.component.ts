//import { Http } from '@angular/http';
import { Component, OnInit, NgModule } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators}from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpClient} from "@angular/common/http";


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
voornaam:string;
telefoon:string;
email:string;
onderwerp:string;
message:string;
endpoint:string;
http :  HttpClient;

 

  selectedOnderwerp: string;
  naamFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
  
  ]);
  voorNaamFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
   
  ]);
comentaarFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,
  ]);
 telFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,this.MinTenLetters


  ]);
  onderwerpFormControl = new FormControl('', [Validators.required


  ]);
  emailFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,Validators.email


  ]);

  matcher = new MyErrorStateMatcher();
  constructor(private _snackBar: MatSnackBar,http :  HttpClient) { 
    this.http = http; }
 

  ngOnInit() {
    
    /*this.naam=this.naamFormControl.value;
    this.voornaam=this.voorNaamFormControl.value;
    this.email=this.emailFormControl.value;
    this.telefoon=this.telFormControl.value;
    this.message=this.comentaarFormControl.value;
    this.onderwerp=this.onderwerpFormControl.value;*/

     //Start php via the built in server: $ php -S localhost:8000
     this.endpoint = "https://vserver361.axc.eu/CMD_FILE_MANAGER/domains/molemgf361.361.axc.nl/public_html/sendEmail.php";
  }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;

    return isValid ? null : {
      'whitespace': true
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
  sendContactMail(){
    if(this.naamFormControl.valid){
      console.log("ok naam");
      if(this.voorNaamFormControl.valid){
        console.log("ok voorNaam");
        if(this.emailFormControl.valid){
          console.log("ok email");
          if(this.telFormControl.valid){
            console.log("ok tel");
            
            console.log(this.naamFormControl.value);
            console.log(this.voorNaamFormControl.value);
            console.log(this.emailFormControl.value);
            console.log(this.telFormControl.value);
            console.log(this.comentaarFormControl.value);
            console.log(this.onderwerpFormControl.value);
            let postVars = {
              email : this.emailFormControl.value,
              naam : this.naamFormControl.value,
              voornaam : this.voorNaamFormControl.value,
              telefoon : this.telFormControl.value,
              message : this.comentaarFormControl.value,
              onderwerp:this.onderwerpFormControl.value
            };
            this.http.post(this.endpoint, postVars)
            .subscribe( 
                response => console.log(response),
                response => console.log(response)
            )
  
          }else{
            this._snackBar.open("tel niet correct ingevuld", "Sluiten", {
              duration: 5000,
            });
          }
        }else{
          this._snackBar.open("email niet correct ingevuld", "Sluiten", {
            duration: 5000,
          });
        }
      }else{
        this._snackBar.open("voorNaam niet correct ingevuld", "Sluiten", {
          duration: 5000,
        });
      }
    }else{
      this._snackBar.open("naam niet correct ingevuld", "Sluiten", {
        duration: 5000,
      });
    }

  }
  /*sendContactMail(){
    if (this.naamFormControl.valid&&this.voorNaamFormControl.valid&&
        this.emailFormControl.valid&&this.telFormControl.valid
       ) {
      console.log("ok");
      
    } else {
      this._snackBar.open("1 of meerdere velden zijn niet correct ingevuld", "Sluiten", {
        duration: 5000,
      });
    }
  }*/

 
}
