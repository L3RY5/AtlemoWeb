import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ContactComponent } from './contact/contact.component';
import { InschrijvingComponent } from './inschrijving/inschrijving.component';
import { AlgemeneInformatieComponent } from './algemene-informatie/algemene-informatie.component';
import { BeleidsplanComponent } from './beleidsplan/beleidsplan.component';
import { WedstrijdenComponent } from './wedstrijden/wedstrijden.component';
import { TrainingenComponent } from './trainingen/trainingen.component';
import { LinksComponent } from './links/links.component';
import { ClubrecordsComponent } from './clubrecords/clubrecords.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './numbers-only.directive';
import { NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { OrganisatieComponent } from './organisatie/organisatie.component';
import { MultimediaComponent } from './multimedia/multimedia.component';



const routes: Routes = [
  { path: '', 
    redirectTo:"/home",
    pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'inschrijving', component: InschrijvingComponent },
  { path: 'algemeneInformatie', component: AlgemeneInformatieComponent },
  { path: 'beleidsplan', component: BeleidsplanComponent },
  { path: 'wedstrijden', component: WedstrijdenComponent },
  { path: 'trainingen', component: TrainingenComponent },
  { path: 'organisatie', component:  OrganisatieComponent},
  { path: 'multimedia', component:  MultimediaComponent},
  { path: 'clubrecords', component: ClubrecordsComponent },
  { path: 'links', component: LinksComponent },
  { path: '**',
    redirectTo:"/home",
    pathMatch: 'full' },
  
 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ContactComponent,
    InschrijvingComponent,
    AlgemeneInformatieComponent,
    BeleidsplanComponent,
    WedstrijdenComponent,
    TrainingenComponent,
    LinksComponent,
    ClubrecordsComponent,
    NumberDirective,
    OrganisatieComponent,
    MultimediaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
      FormsModule, ReactiveFormsModule,NgbModule,
      NgbPaginationModule, NgbAlertModule,
      MatSnackBarModule,
      NgbModule.forRoot()
     
  
   
  ],exports:[],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }

