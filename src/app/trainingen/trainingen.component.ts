import { Component, OnInit } from '@angular/core';

export interface TrainingsTijden {
  dag: string;
  tijd: string;
  locatie: string;
}

export interface TrainingsTijdenVolwassenen {
  dag: string;
  tijd: string;
  locatie: string;
  soort: string;
}

const kinderenTraining: TrainingsTijden[] = [
  {dag: 'Dinsdag (Kan/Ben)', tijd: '17u00 - 18u15', locatie: 'Sippelberg'},
  {dag: 'Donderdag (Pup/Min)', tijd: '17u00 - 18u15', locatie: 'Sippelberg'},
  {dag: 'Vrijdag (Kan/Ben)', tijd: '17u00 - 18u15', locatie: 'Sippelberg'},
  {dag: 'Zondag (Pup/Min)', tijd: '11u15 - 12u30', locatie: 'Sippelberg'},
];

const volwassenTraining: TrainingsTijdenVolwassenen[] = [
  {dag: 'Dinsdag', tijd: '18u30 - 20u00', locatie: 'Sippelberg',soort:'Pistetraining'},
  {dag: 'Donderdag', tijd: '18u30 - 20u00', locatie: 'Sippelberg',soort:'Pistetraining'},
  {dag: 'Vrijdag', tijd: '18u30 - 20u00', locatie: 'Sippelberg',soort:'Pistetraining'},
  {dag: 'Zondag', tijd: '10u00 - 11u00', locatie: 'Sippelberg',soort:'Pistetraining'},
];

/* Pre COVID19
const kinderenTraining: TrainingsTijden[] = [
  {dag: 'Dinsdag', tijd: '17u15 - 18u30', locatie: 'Sippelberg*'},
  {dag: 'Donderdag (Pup/Min)', tijd: '17u15 - 18u30', locatie: 'Sippelberg'},
  {dag: 'Vrijdag', tijd: '17u15 - 18u30', locatie: 'Sippelberg'},
];

const volwassenTraining: TrainingsTijdenVolwassenen[] = [
  {dag: 'Maandag', tijd: '17u30 - 19u00 ', locatie: 'Foyer**',soort:'Krachttraining'},
  {dag: 'Dinsdag', tijd: '17u15 - 19u00 ', locatie: 'Sippelberg',soort:'Pistetraining'},
  {dag: 'Woensdag', tijd:'17u30 - 19u00 ', locatie: 'Foyer',soort:'Krachttraining'},
  {dag: 'Donderdag',tijd:'17u15 - 19u00 ', locatie: 'Sippelberg',soort:'Pistetraining'},
  {dag: 'Vrijdag', tijd:'17u15 - 19u00 ', locatie: 'Sippelberg',soort:'Pistetraining'},
];
*/

@Component({
  selector: 'app-trainingen',
  templateUrl: './trainingen.component.html',
  styleUrls: ['./trainingen.component.css']
})

export class TrainingenComponent implements OnInit {
  displayedColumns: string[] = ['dag', 'tijd', 'locatie'];
  displayedColumnsVolwasen: string[] = ['dag', 'tijd', 'locatie','soort'];
  dataSourcePiste = kinderenTraining;
  dataSourceKracht = volwassenTraining;
  panelOpenState = false;
  constructor() { }

  ngOnInit() { }
}
