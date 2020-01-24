import { Component, OnInit, ViewChild,ViewChildren, AfterViewInit, QueryList } from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material/';
import {ErrorStateMatcher}from '@angular/material/core';
import {MAT_MOMENT_DATE_FORMATS,MomentDateAdapter}from '@angular/material-moment-adapter';
import {DateAdapter,MAT_DATE_FORMATS,MAT_DATE_LOCALE}from '@angular/material/core';
import {FormBuilder,FormGroup,FormControl,FormGroupDirective,NgForm,Validators}from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

export interface VeldLoopJongeren {
  datum: string;
  adres: string;
  club:string;
  eersteStart: string;
  samenKomst: string;
  categorieen:string;
}
export interface wedstrijdZomer {
  wedstrindINfo: string;
  samenkomst: string;
  benPup:string;
  min:string;
  kadSchol: string;
  jun: string;
  sen: string;
  mas: string;
}

const WEDSTRRIID_WINTER: VeldLoopJongeren[] = [
  {datum: '14/9/2019',club:"Jogging Foyer",categorieen:'Allen', adres: 'Rue des Ateliers 25,1080 Molenbeek', eersteStart: "12:00h",samenKomst:"Rue des Ateliers 25, 1080 Molenbeek"},
  {datum: '19/10/2019',club:"Ekiden",categorieen:'Allen', adres: 'Koning Boudewijnstadion', eersteStart: "13:00h",samenKomst:"Koning Boudewijnstadion"},
  {datum: '27/10/2019',club:"Crosscup Relays Berlare",categorieen:'Alle', adres: 'Dendermondsesteenweg 13a, 9290 Berlare', eersteStart: "    :  h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '03/11/2019',club:"Cross Leuven",categorieen:'Allen', adres: 'Diestseseteenweg 272, 3010 Kessen-Lo', eersteStart: "  :  h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '09/11/2019',club:"Cross 44ste grote prijs Gaston Reiff ",categorieen:'Pup/Min/Kad/Sch', adres: 'avenue Alphonse Allard - 1420 Braine-l Alleud', eersteStart: "  :  h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '11/11/2019',club:"Vredesjogging",categorieen:'Pup/Min/Kad/Sch', adres: 'Sportcomplex Sint-Agatha-Berchem', eersteStart: "  :  h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '17/11/2019',club:"67ste Grote Prijzen",categorieen:'Pup/Min/Kad/Sch', adres: 'Rooienberg 56, 2570 Duffel', eersteStart: "12:00h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '23/11/2019',club:"46ste Sparta Cross",categorieen:'Pup/Min/Kad/Sch', adres: 'Domein 3 Fonteinen, Beneluxlaan 44 - 1800 Vilvoorde', eersteStart: ": h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '14/12/2019',club:"Indoor ",categorieen:'Kad/Sch', adres: '', eersteStart: ":h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '05/01/2020',club:"Cross 47ste DAMES- en HERENVELDLOOP",categorieen:'Pup/Min/Kad/Sch', adres: 'Prinsenbos - Pastoor Wouterstraat - 1050 Grimbergen', eersteStart: ":h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '12/01/2020',club:"Kampioenschap van Brussel",categorieen:'Pup/Min/Kad/Sch', adres: 'Stade Fallon, Woluwe', eersteStart: ":h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '26/01/2020',club:"Cross Grote Prijs Electro 80",categorieen:'Pup/Min/Kad/Sch', adres: 'Domein 3 Fonteinen, Beneluxlaan 44 - 1800 Vilvoorde', eersteStart: ":h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},
  {datum: '23/02/2020',club:"Cross BK",categorieen:'Allen', adres: 'Park van Laken, Jules Praetlaan - 1020 Laken', eersteStart: ":h",samenKomst:"Mahatma Gandhilaan 5,1080 Molenbeek"},

];

const WEDSTRRIID_ZOMER: wedstrijdZomer[] = [
/*{wedstrindINfo:"07/05/2016\nZaterdag 12u00\n(MAC) Derooverstadion\nStadionstraat 1830 Machelen",samenkomst:"10u00 F. Vandesandestr 1081 Koekelberg",benPup:"4Kamp",min:"5Kamp",kadSchol:"5Kamp\n100m,200m\n800m,1500m",jun:"5Kamp\n100m,200m\n800m,1500m",sen:"5Kamp\n100m,200m\n800m,1500m,5000m",mas:"5Kamp\n100m,200m\n800m,1500m"},*/

];

@Component({
  selector: 'app-wedstrijden',
  templateUrl: './wedstrijden.component.html',
  styleUrls: ['./wedstrijden.component.css'],
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
})


export class WedstrijdenComponent implements OnInit {
  firstFormGroup: FormGroup;
  dataSourceWinter :MatTableDataSource<VeldLoopJongeren>;
  dataSourceZomer :MatTableDataSource<wedstrijdZomer>;

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  displayedColumns: string[] = ['datum', 'club','categorieen','adres', 'eersteStart','samenKomst'];
  displayedZomer: string[] = ['wedstrindINfo', 'samenkomst','benPup', 'min','kadSchol','jun','sen','mas'];


  naamFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,

  ]);
  voorNaamFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,

  ]);
  geboorteJaarControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,this.MinFourLetters
  ]);
  locatieFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,


  ]);
  datumWedFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,


  ]);
  diciplineFormControl = new FormControl('', [Validators.required,
    this.noWhitespaceValidator,


  ]);




  matcher = new MyErrorStateMatcher();
  constructor(private _adapter: DateAdapter < any > ,private _snackBar: MatSnackBar) {
    this.dataSourceWinter=new MatTableDataSource<VeldLoopJongeren>(WEDSTRRIID_WINTER);
    this.dataSourceZomer=new MatTableDataSource<wedstrijdZomer>(WEDSTRRIID_ZOMER);
   }

ngAfterViewInit() {
  this.dataSourceWinter.paginator=this.paginator.toArray()[0];
  this.dataSourceZomer.paginator=this.paginator.toArray()[1];
}
  ngOnInit() {

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

applyFilter(filterValue:string){
  this.dataSourceWinter.filter = filterValue.trim();
  this.dataSourceZomer.filter = filterValue.trim();
}

wedstrijdInschrijving(){
  if (this.naamFormControl.valid && this.voorNaamFormControl.valid&&
      this.geboorteJaarControl.valid && this.datumWedFormControl.valid&&
      this.diciplineFormControl.valid && this.locatieFormControl.valid) {
        console.log("ok send mail");
  } else {
    this._snackBar.open("1 of meerdere velden zijn niet correct ingevuld", "Sluiten", {
      duration: 5000,
    });
  }
}

}
