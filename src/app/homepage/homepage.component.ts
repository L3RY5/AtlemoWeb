import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  entries = [
    {
      'title': 'Trainingen geschorst tot 3 april',
      'img': 'assets/img/LogoAtlemoNormaal.jpg',
      'results_url': '',
      'album_url': '',
      'text': 'Vanaf vandaag 13 maart zijn alle (jeugd)trainingen geschorst tot 3 april 2020.',
      'more_text': 'Deze beslissing werd genomen in navolging van de beslissing van de federale regering om alle sportactiviteiten te schorsen. Zorg in deze periode goed voor jezelf en je naasten zodat we na deze periode eens zo goed kunnen sporten. Alleen of in kleine groepjes lopen is trouwens geen probleem. Blijf dus wel in beweging!',
      'collapsed': true,
    },
    {
      'title': '46ste Sparta Cross 23/11',
      'img': 'assets/img/drieFontain.jpg',
      'results_url': 'https://www.sparta-vilvoorde.be/images/cross_23.11.2019.pdf',
      'album_url': 'https://photos.app.goo.gl/7JsGABy6uHDUHNyY8',
      'text': 'De plus en plus d’athlètes d’Atlemo participent aux compétition,',
      'more_text': " cette fois-ci 36 athlètes étaient présents à Vilvoorde, bravo à eux, ils confirment leurs évolutions et également celles du club. Félicitation à Lbakkari Isra qui termine à la 3 eme place.  Encore une très belle journée et de très bon résultats. Fière de nos athlètes. Merci aux Coach et parents.\
              \n\
              Vandaag liepen maar liefst 34 atleten de veldloop in Vilvoorde. Ze toonden er hun stijgende vorm. Isra liep er zelfs naar een mooie podiumplaats. Fier op onze atleten - van jong tot oud!",
      'collapsed': true,
    },
    {
      'title': '67ste Grote Prijzen van Duffel 17/11',
      'img': 'assets/img/duffelDrieMusk.jpg',
      'results_url': 'https://www.duff.be/…/files/20191117_Grote_Prijzen_Heren.pdf',
      'album_url' : 'https://photos.app.goo.gl/KEuQu19PuXZrSTGq9',
      'text': "Grote opkomst van Atlemo vandaag/Grande participation pour Atlemo aujourd'hui !!",
      'more_text': "Alweer een mooie vertegenwoordiging van Atlemo in Duffel. Alle 29 aanwezige atleten gaven er het beste van zichzelf. Naast de overwinning van Adam El Habouchi bij de benjamins, waren er tal van andere goeie prestaties.  Maar nog belangrijker: de goede teamsfeer! Proficiat aan iedereen - dankzij jullie en alle betrokkenen bij Atlemo gaat de club stap voor stap vooruit. Volgende week afspraak in Vilvoorde!\
              \n\
              Encore de très bonne performance aujourd’hui à duffel, 29 athlètes d’Atlemo étaient présents dont 3 kangourous. Félicitation à Adam el habouchi pour sa victoire chez les benjamins. Beaucoup de top 10 également. Mais plus important encore: la bonne ambiance d’équipe! Félicitations à tous - grâce à vous et à toutes les personnes impliquées à Atlemo, le club avance pas à pas.  Rendez vous la semaine prochaine à Vilvoorde.",
      'collapsed': true,
    },
    {
      'title': 'Jogging van de vrede op 11/11',
      'img': 'assets/img/jogginPaix.jpg',
      'results_url': '',
      'album_url' : 'https://photos.app.goo.gl/wjN9MUHFQDiPkvDi7',
      'text': "Mooie dag voor atlemo ondanks de regen.",
      'more_text': "Een dertigtal atleten namen deel aan deze jogging met zes podiumplaatsen als resultaat.  Très belle journée pour Atlemo, trentaine d’athlètes ont participés à ce jogging et 6 podium au total.\n\
              1ère place : Adam 500m\n\
              Moussa 4 km\n\
              3ème place: Amel 500m\n\
              Otis 1km\n\
              M’hamed 4km\n\
              Mounia 8km\n\
              Bravo à notre partenaire les gazelles plusieurs podium également",
      'collapsed': true,
    },
    {
      'title': 'Cross Braine L’alleud op 9/11',
      'img': 'assets/img/crossBrain.jpg',
      'results_url': '',
      'album_url' : 'https://photos.app.goo.gl/ryhyH3QD1cxsr41w7',
      'text': "Steeds meer jongeren van Atlemo nemen deel aan de geplande",
      'more_text': "wedstrijden. Zo liepen 26 atleten een eerste veldloop in Braine L’alleud. Proficiat aan alle deelnemers!  De plus en plus de jeunes d’Atlemo participent aux compétition, 26 athlètes ont participé aux 1er cross à Braine l’Alleud. Félicitations à eux.",
      'collapsed': true,
    },
    {
      'title': 'Cross Cup Relays in Berlare op 27/10',
      'img': 'assets/img/relay2019.jpg',
      'results_url': 'http://www.chronorace.be/Classements/Classement.aspx?eventId=1187107485865488&mode=large&IdClassement=20488',
      'album_url' : 'https://photos.app.goo.gl/ySMLSM1tZgEEkn1j8',
      'text': "Proficiat aan onze vier jeugdploegen tijdens de Cross Cup Relays in Berlare (2 teams pupillen meisjes,",
      'more_text': "1 team pupillen jongens en 1 team miniemen jongens). Een mooie opener van het winterseizoen. Volgende afspraak op 9 november voor de eerste individuele veldloop van het seizoen!  Félicitations a nos 4 équipes engagées lors de la cross cup relais (2équipes pupilles filles, 1 équipe pupille garçon et 1 équipe minime garçon).  Beau début de saison. Rendez-vous le 9 novembre pour le 1er cross individuel",
      'collapsed': true,
    },
    {
      'title': 'Meeting in Vorst op 8/6',
      'img': 'assets/img/ismaelaW.jpg',
      'results_url': 'assets/docs/MemorialReneRavetsPerformances.pdf',
      'album_url' : 'https://photos.app.goo.gl/JN8khbW2AdUy8arU7',
      'text': "Mooie prestaties op zaterdag tijdens de jeugdmeeting in Vorst - met als hoogtepunt vier medailles:",
      'more_text': "Isra won een zilveren medaille op de 600m, terwijl Ismaila maar liefst drie medailles mee naar Molenbeek bracht: zilver voor het kogelstoten en twee maal brons voor de 60m en de 600m! Benaissa werd twee maal vierde op de 60m en de 600m. Noheyla en Faycal eindigden eveneens telkens vierde op de 1000m. Proficiat ook aan alle andere jeugdatleetjes! Vive Atlemo!",
      'collapsed': true,
    },
    {
      'title': 'Meeting in Duffel op 11/5',
      'img': 'assets/img/60260600_2585361131492908_8079722426042155008_n.jpg',
      'results_url': 'https://www.duff.be/sites/default/files/20190511_Runners%20Lab%20Athletics%20Classic%20Meeting_1.pdf',
      'album_url' : 'https://photos.app.goo.gl/UhmcyuYrFK2AdghJ6',
      'text': "samedi 11 mai avait lieu le meeting de duffel..  13 jeunes athlètes d'Atlemo ont participés à cette compétition ,pour leur première fois,",
      'more_text': "ils se sont très bien battus et bien amusés.  Bravo à Benaissa qui termine sa course sur la 1ère marche du podium au 60 m. Merci au parents, entraîneurs de leurs aides et rendez-vous à la prochaine compétition.",
      'collapsed': true,
    },
    {
      'title': 'Opleiding Aspirant-Initiator Atletiek',
      'img': 'assets/img/aspIni.jpg',
      'results_url': '',
      'album_url' : '',
      'text': "Opleiding Aspirant-Initiator Atletiek - 4 en 5 mei 2019 - Sippelberg, Sint-Jans-Molenbeek.",
      'more_text': "Proficiat aan de hele groep. Sterk werk van kersverse lesgevers Ayoub, Sedric en Chinook. In samenwerking met Les Gazelles de Bruxelles, BAV, Sportinbrussel, Vlaamse Atletiekliga Bravo à Benaissa qui termine sa course sur la 1ère marche du podium au 60 m.",
      'collapsed': true,
    },
    {
      'title': 'Dag van de arbeid',
      'img': 'assets/img/dagArbeid.jpg',
      'results_url': '',
      'album_url' : '',
      'text': "Drukke dag voor Atlemo op de dag van de arbeid: in de voormiddag organiseerden onze jeugdtrainers een meerkamp voor onze jeugdatleetjes",
      'more_text': "(benjamins, pupillen en miniemen) op onze piste - in de namiddag snelde Bilal naar een sterk PR tijdens de tien km van Knokke - en 's avonds brak Anas de negen minuten barrière tijdens zijn 3000m in Herentals!",
      'collapsed': true,
    },
  ];

  constructor() { }

  ngOnInit() { }

}
