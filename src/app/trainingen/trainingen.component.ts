import { Component, OnInit } from '@angular/core';

export interface TrainingsTijden {
  dag: string;
  tijd: string;
  locatie: string;

 
}
export interface TrainingsTijdenVolvasen {
  dag: string;
  tijd: string;
  locatie: string;
  soort:String;
 
}

const kinderenTraining: TrainingsTijden[] = [
  {dag: "Dinsdag ", tijd: '17u15 - 18u30', locatie: "Sippelberg* "},
  {dag: "Donderdag(Pup/Min) ", tijd: '17u15 - 18u30', locatie: "Sippelberg "},
  {dag: "Vrijdag ", tijd: '17u15 - 18u30', locatie: "Sippelberg "},
  
];
const volwassenTraining: TrainingsTijdenVolvasen[] = [
  {dag: "Maandag ", tijd: '17u30 - 19u00 ', locatie: "Foyer**",soort:"Krachttraining"},
  {dag: "Dinsdag ", tijd: '17u15 - 19u00 ', locatie: "Sippelberg",soort:"Pistetraining"},
  {dag: "Woensdag ", tijd:'17u30 - 19u00 ', locatie: "Foyer",soort:"Krachttraining"},
  {dag: "Donderdag",tijd:'17u15 - 19u00 ', locatie: "Sippelberg",soort:"Pistetraining"},
  {dag: "Vrijdag ", tijd:'17u15 - 19u00 ', locatie: "Sippelberg",soort:"Pistetraining"},
 
  
  
];
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

  ngOnInit() {
  }

}
