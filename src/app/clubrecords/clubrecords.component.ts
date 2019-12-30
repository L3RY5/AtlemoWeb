import { Component, OnInit,ViewChild,ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import { MatTableDataSource,MatPaginator } from '@angular/material/';

export interface clubRecordsInt {
  discipline: string;
  naam: string;
  datum:string;
  plaats: string;
  records: string;
}

/* begin Tabellen met de clubb records */
/*BEN */
const RECORDBEN_MEISJES: clubRecordsInt[] = [
  {discipline:"60m",naam:"Sieben Yaan",datum:"29-06-13",plaats:"Tienen",records:"9\"87"},
  {discipline:"600m",naam:"Byrne Chinook",datum:"27-06-09",plaats:"Vilvoorde",records:"2'06\"64"},
  {discipline:"1000m",naam:"Byrne Chinook",datum:"03-08-08",plaats:"Lebbeke",records:"4'07\"76"},
  {discipline:"Hoogspringen",naam:"Hasani Geraldine",datum:"18-07-04",plaats:"Dilbeek",records:"1m21"},
  {discipline:"Verspringen",naam:"Hasani Geraldine",datum:"03-07-04",plaats:"Bosvoorde",records:"3m83"},
  {discipline:"kogelstoten",naam:"Hasani Geraldine",datum:"26-06-04",plaats:"Vilvoorde",records:"9m09"},
  {discipline:"hockeybal",naam:"Hasani Geraldine",datum:"27-09-03",plaats:"Nijvel",records:"21m99"},
  {discipline:"4x60m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"vierkamp",naam:"Byrne Chinook",datum:"06-06-09",plaats:"Vilvoorde",records:"1069p"},
 
];
const RECORDBEN_JONGENS: clubRecordsInt[] = [
{discipline:"60m",naam:"Roefmans Lucas",datum:"23-04-10",plaats:"Lebbeke",records:"9\"85"},
{discipline:"600m",naam:"Flachet Liam",datum:"30-05-09",plaats:"Machelen",records:"2'15\"54"},
{discipline:"1000m",naam:"Dari Redouane",datum:"24-05-01",plaats:"St-Niklaas",records:"3'53\"37"},
{discipline:"Hoogspringen",naam:"Philips David",datum:"03-06-12",plaats:"Vilvoorde",records:"1m10"},
{discipline:"Verspringen",naam:"Roefmans Lucas",datum:"03-05-09",plaats:"Anderlecht",records:"3m62"},
{discipline:"kogelstoten",naam:"Ben Sabih Sohaib",datum:"04-07-98",plaats:"Molenbeek",records:"8m01"},
{discipline:"hockeybal",naam:"Amezyan Imadeddine",datum:"20-06-09",plaats:"Molenbeek",records:"27m57"},
{discipline:"4x60m",naam:"",datum:"",plaats:"",records:""},
{discipline:"vierkamp",naam:"Ndabukiye Radjabu Sham",datum:"07-06-14",plaats:"Vilvoorde",records:"1136p"},
];
const RECORDBEN_MEISJESind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Hasani Geraldine",datum:"27-03-04",plaats:"Gent",records:"10\"06"},
  {discipline:"1000m",naam:"Byrne Chinook",datum:"29-12-2007",plaats:"Gent",records:"4'22\"84"},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"Hasani Geraldine",datum:"10-01-04",plaats:"Woluwe",records:"3m51"},
  {discipline:"kogelstoten",naam:"Hasani Geraldine",datum:"10-01-04",plaats:"Woluwe",records:"7m62"},
  {discipline:"Vierkamp",naam:"",datum:"",plaats:"",records:""},
  
 
];
const RECORDBEN_JONGENSind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Davies Denis",datum:"10-01-04",plaats:"Woluwe",records:"10\"20"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"Davies Denis",datum:"10-01-04",plaats:"Woluwe",records:"85cm"},
  {discipline:"Verspringen",naam:"Zerrad Youne",datum:"23-3-02",plaats:"Gent",records:"2m75"},
  {discipline:"kogelstoten",naam:"Amezyan Imadedine",datum:"13-12-08",plaats:"Woluwe",records:"6m25"},
  {discipline:"Vierkamp",naam:"",datum:"",plaats:"",records:""},

 
];

/*pup*/

const RECORDPUP_MEISJES: clubRecordsInt[] = [
  {discipline:"60m",naam:"Nana-Owusu Philomina",datum:"25-06-11",plaats:"Huizingen",records:"8\"57"},
  {discipline:"1000m",naam:"Byrne Chinook",datum:"10-04-11",plaats:"Ninove",records:"3'30\"76"},
  {discipline:"Hoogspringen",naam:"Ndabukiye Radjabu Asha",datum:"07-06-14",plaats:"Vilvoorde",records:"1m27"},
  {discipline:"Verspringen",naam:"Nana-Owusu Philomina",datum:"02-07-11",plaats:"Machelen",records:"3m86"},
  {discipline:"kogelstoten",naam:"Hassani Geraldina",datum:"25-06-05",plaats:"Dilbeek",records:"8m89"},
  {discipline:"hockeybal",naam:"Byrne Chinook",datum:"02-07-11",plaats:"Machelen",records:"27m82"},
  {discipline:"Discuswerpen",naam:"Ackerman Aurelie",datum:"02-09-00",plaats:"Vilvoorde",records:"18m11"},
  {discipline:"4x60m",naam:"Wester Yasmine, Lamsadya Manel,Nicaise Eline,Byrne Chinook",datum:"17-04-10",plaats:"Dilbeek",records:"42\"58"},
  {discipline:"Vierkamp",naam:"Nana-Owusu Philomina",datum:"02-07-11",plaats:"Machelen",records:"1776p"},
 
 
];
const RECORDPUP_JONGENS: clubRecordsInt[] = [
  {discipline:"60m",naam:"Roefmans Lucas",datum:"23-06-12",plaats:"Dilbeek",records:"8\"87"},
  {discipline:"1000m",naam:"Kamil Yassin",datum:"12-06-04",plaats:"Vilvoorde",records:"3'33\"21"},
  {discipline:"60Horden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"Davies Isaac",datum:"28-06-03",plaats:"Huizingen",records:"1m20"},
  {discipline:"Verspringen",naam:"Akhedov Manzul",datum:"28-08-05",plaats:"Anderlecht",records:"3m90"},
  {discipline:"kogelstoten",naam:"Karsikaya Murat",datum:"06-06-98",plaats:"Machelen",records:"7m50"},
  {discipline:"hockeybal",naam:"Melhaoui Anouar",datum:"19-08-01",plaats:"Dilbeek",records:"33m08"},
  {discipline:"Discuswerpen",naam:"V. Outenboer Karim",datum:"17-04-99",plaats:"Brussel",records:"13m35"},
  {discipline:"4x60m",naam:"Roefmans Lucas,Jacques Meert Andries, Ayad Hamza, Van Hecke Honor",datum:"22-04-12",plaats:"Huizingen",records:"40\"09"},
  {discipline:"Vierkamp",naam:"Akhmedov Manzul",datum:"28-08-05",plaats:"Anderlecht",records:"1691p"},
 
];

const RECORDPUP_MEISJESind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Byrne Chinook",datum:"26-12-09",plaats:"Gent",records:"10\"16"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"Byrne Chinook",datum:"9-12-07",plaats:"Gent",records:"2m65"},
  {discipline:"kogelstoten",naam:"Dari Jamaa",datum:"30-12-00",plaats:"Gent",records:"2m73"},
  {discipline:"Vierkamp",naam:"",datum:"",plaats:"",records:""},
];
const RECORDPUP_JONGENSind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Dannou Mohamed",datum:"15-12-01",plaats:"Woluwe",records:"10\"10"},
  {discipline:"1000m",naam:"Yahklef Hamza",datum:"23-02-02",plaats:"Gent",records:"3'49\"33"},
  {discipline:"60m Horden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"Yahklef Hamza",datum:"1-12-01",plaats:"Woluwe",records:"1m05"},
  {discipline:"Verspringen",naam:"Dahhou Mohamed	",datum:"1-12-01",plaats:"Woluwe",records:"3m65"},
  {discipline:"kogelstoten",naam:"Bougdim Amine	",datum:"14-1-01",plaats:"Gent",records:"5m65"},
  {discipline:"Vierkamp",naam:"",datum:"",plaats:"",records:""},
];

/*Min */

const RECORDMIN_MEISJES: clubRecordsInt[] = [
  {discipline:"80m",naam:"Nana-Owusu Philomena",datum:"29-06-13",plaats:"Tienen",records:"10\"75"},
  {discipline:"150m",naam:"Nana-Owusu Philomena",datum:"29-06-13",plaats:"Tienen",records:"20\"02"},
  {discipline:"300m",naam:"Byrne Chinook",datum:"29-06-13",plaats:"Tienen",records:"46\"65"},
  {discipline:"1000m",naam:"Byrne Chinook",datum:"23-06-12",plaats:"Dilbeek",records:"3'21\"91"},
  {discipline:"60mHorden",naam:"Ackerman Aurélie",datum:"25-08-02",plaats:"Vorst",records:"10\"51"},
  {discipline:"Hoogspringen",naam:"Ackerman Aurélie",datum:"08-06-02",plaats:"Vilvoorde",records:"1m40"},
  {discipline:"Verspringen",naam:"Nana-Owusu Philomena",datum:"05-05-12",plaats:"Kortenberg",records:"4m45"},
  {discipline:"Polsstok",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Byrne Cheyenne",datum:"17-04-10",plaats:"Dilbeek",records:"10m50"},
  {discipline:"Discuswerpen",naam:"Ackerman Aurélie",datum:"22-06-02",plaats:"Vilvoorde",records:"25m82"},
  {discipline:"Speerwerpen",naam:"Byrne Chinook",datum:"20-04-13",plaats:"Kessel-Lo",records:"20m78"},
  {discipline:"4x80m",naam:"Geldof T., Catteeuw F., Abba S., Nana-Owusu P",datum:"20-04-13",plaats:"Kessel-Lo",records:"47\"25"},
  {discipline:"Vijfkamp",naam:"Ackerman Aurélie",datum:"20-05-02",plaats:"Anderlecht",records:"2501p"},
 
 
];
const RECORDMIN_JONGENS: clubRecordsInt[] = [
  {discipline:"80m",naam:"Ciccarone Tommaso",datum:"27-09-03",plaats:"Nijvel",records:"10\"86"},
  {discipline:"150m",naam:"Roefmans Lucas",datum:"05-05-14",plaats:"Laken",records:"21\"01"},
  {discipline:"300m",naam:"Ciccarone Tommaso",datum:"26-07-03",plaats:"Vilvoorde",records:"44\"28"},
  {discipline:"1000m",naam:"Aabaila Abdelsamad",datum:"24-05-03",plaats:"Brussel",records:"3'10\"21"},
  {discipline:"80mHorden",naam:"Parfenov Jevgeni",datum:"05-05-05",plaats:"Schaarbeek",records:"19\"86"},
  {discipline:"Hoogspringen",naam:"Roefmans Lucas",datum:"07-06-14",plaats:"Vilvoorde",records:"1m52"},
  {discipline:"Verspringen",naam:"Roefmans Lucas",datum:"05-05-14",plaats:"Laken",records:"4m84"},
  {discipline:"Polsstok",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Benrezouq Samir",datum:"05-08-01",plaats:"Dilbeek",records:"8m94"},
  {discipline:"Discuswerpen",naam:"Seamari Rachid	",datum:"01-09-01",plaats:"Vilvoorde",records:"21m48"},
  {discipline:"Speerwerpen",naam:"Parfenov Jevegeni",datum:"28-08-05",plaats:"Anderlecht",records:"38m43"},
  {discipline:"4x80m",naam:"Talhaoui Mohamed, Talhaoui Abdennour, De Troch Wout, Meul Arthur",datum:"18-04-10",plaats:"Huizingen",records:"47\"89"},
  {discipline:"Vijfkamp",naam:"Roefmans Lucas",datum:"07-06-14",plaats:"Vilvoorde	",records:"2968p"},
 
];

const RECORDMIN_MEISJESind: clubRecordsInt[] = [
  
  {discipline:"60m",naam:"Nana-Owusu Philomena",datum:"17-12-11",plaats:"Woluwe",records:"8\"83"},
  {discipline:"150m",naam:"Ackerman Aurélie",datum:"29-12-01",plaats:"Gent",records:"22\"76"},
  {discipline:"300m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"hoogspringen",naam:"Ackerman Aurélie",datum:"29-12-01",plaats:"Gent",records:"1m38"},
  {discipline:"verspringen",naam:"Ackerman Aurélie",datum:"1-12-01",plaats:"Woluwe",records:"3m91"},
  {discipline:"Kogelstoten",naam:"Zahar Btisam",datum:"1-12-01",plaats:"Woluwe",records:"9m17"},
  
 
];
const RECORDMIN_JONGENSind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Roefmans Lucas",datum:"22-03-14",plaats:"Gent",records:"8\"74"},
  {discipline:"150m",naam:"Mirzoian Artur",datum:"29-12-01",plaats:"Gent",records:"24\"00"},
  {discipline:"300m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1000m",naam:"Aabayla Abdelsamad",datum:"22-3-03",plaats:"Gent",records:"3'15\"20"},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"Davies Isaac",datum:"20-12-02",plaats:"Woluwe",records:"1m20"},
  {discipline:"Verspringen",naam:"Roefmans Lucas",datum:"22-03-14",plaats:"Gent",records:"4m26"},
  {discipline:"Kogelstoten",naam:"Ariozsoy ziya",datum:"23-12-00",plaats:"Gent",records:"7m03"},
  {discipline:"Vijfkamp",naam:"",datum:"",plaats:"",records:""},
  
 
];

/*KAD */

const RECORDKAD_DAMES: clubRecordsInt[] = [
  {discipline:"100m",naam:"Nana-Owusu Philomena",datum:"31-05-14",plaats:"Vilvoorde",records:"13\"31"},
  {discipline:"200m",naam:"Ackerman Aurélie",datum:"21-04-03",plaats:"Ninove",records:"29\"59"},
  {discipline:"300m",naam:"Ackerman Aurélie",datum:"01-05-03",plaats:"Huizingen",records:"47\"76"},
  {discipline:"400m",naam:"Byrne Chinook",datum:"31-05-2014",plaats:"Oordegem",records:"65\"38"},
  {discipline:"800m",naam:"Byrne Chinook",datum:"24-05-14",plaats:"Lokeren",records:"2'28\"89"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"Byrne Chinook",datum:"26-04-15",plaats:"Kessel-Lo",records:"5'14\"60"},
  {discipline:"80mHorden",naam:"Ackerman Aurélie",datum:"22-05-04",plaats:"Huizingen",records:"13\"63"},
  {discipline:"300mHorden",naam:"Ackerman Aurélie",datum:"22-05-04",plaats:"Huizingen",records:"51\"88"},
  {discipline:"4x100M",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x800M",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"Ackerman Aurélie",datum:"01-08-04",plaats:"Dilbeek",records:"1m44"},
  {discipline:"Verspringen",naam:"Ackerman Aurélie",datum:"01-08-04",plaats:"Ninove",records:"4m36"},
  {discipline:"Hinkstap",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Polsstok",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Ackerman Aurélie",datum:"01-08-04",plaats:"Dilbeek",records:"8m17"},
  {discipline:"Discuswerpen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hamerslingeren",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Speerwerpen",naam:"Ackerman Aurélie",datum:"19-07-03",plaats:"Halle",records:"21m91"},
  {discipline:"Zeskamp",naam:"Ackerman Aurélie",datum:"01-08-04",plaats:"Dilbeek",records:"2534p"},

];
const RECORDKAD_HEREN: clubRecordsInt[] = [
  {discipline:"100m",naam:"M'Rabet Ismael",datum:"28-04-12",plaats:"Kessel-Lo",records:"12\"55"},
  {discipline:"200m",naam:"Ciccarone Tommaso",datum:"02-05-04",plaats:"Aalst",records:"25\"91"},
  {discipline:"300m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400m",naam:"Ciccarone Tommaso",datum:"23-05-04",plaats:"Huizingen",records:"62\"59"},
  {discipline:"800m",naam:"Melhaoui Sidi-Mohamed",datum:"22-05-04",plaats:"Huizingen",records:"2'04\"65"},
  {discipline:"1000m",naam:"Melhaoui Sidi-Mohamed",datum:"18-07-04",plaats:"Dilbeek",records:"2'45\"60"},
  {discipline:"1500m",naam:"Melhaoui Sidi-Mohamed",datum:"16-05-04",plaats:"Lommel",records:"4'13\"34"},
  {discipline:"1500mSteeple",naam:"",datum:"",plaats:"",records:""},
  {discipline:"100mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"300mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x100m",naam:"Fatihi M,Jaques Meert A,Trabelsi Y,Anas Doukali A",datum:"03-05-2015",plaats:"Roeselare",records:""},
  {discipline:"4x800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"M'Rabet Ismael,Melhaoui Sidi-Mohamed",datum:"04-06-11, 11-05-03",plaats:"Oordegem,Hamme",records:"1m60"},
  {discipline:"Verspringen",naam:"Roefmans Lukas",datum:"02-08-2015",plaats:"Brasschaat",records:"5m64"},
  {discipline:"Hinkstap",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Polsstok",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Seamari Rachid",datum:"18-05-03",plaats:"Vilvoorde",records:"9m90"},
  {discipline:"Discuswerpen",naam:"Fallah Ayoub",datum:"28-04-12",plaats:"Kessel-Lo",records:"33m79"},
  {discipline:"Hamerslingeren",naam:"Ariozsoy Ziya",datum:"27-09-03",plaats:"Nijvel",records:"20m40"},
  {discipline:"Speerwerpen",naam:"Parfenov Yevgeni",datum:"15-10-06",plaats:"Anderlecht",records:"41m74"},
  
 
];

const RECORDKAD_DAMESind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Nana-Owusu Pilomena",datum:"02-03-2014",plaats:"Gent",records:"8\"32"},
  {discipline:"200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"60mHorden",naam:"Ackerman Aurélie",datum:"23-02-03",plaats:"Gent",records:"10\"61"},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"Ackerman Aurélie",datum:"4-1-03",plaats:"Gent",records:"4m00"},
  {discipline:"Kogelstoten",naam:"",datum:"",plaats:"",records:""},
];
const RECORDKAD_HERENind: clubRecordsInt[] = [
  {discipline:"60m",naam:"M'Rabet Ismael",datum:"27-02-11",plaats:"Gent",records:"8\"15"},
  {discipline:"200m",naam:"Ciccarone Tommaso",datum:"13-03-04",plaats:"Gent",records:"26\"49"},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"Melhaoui Sidi-Mohamed",datum:"27-03-04",plaats:"Gent",records:"2'04\"30"},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"M'Rabet Ismael",datum:"08-01-12",plaats:"Gent",records:"4m87"},
  {discipline:"Kogelstoten",naam:"Fallah Ayoub",datum:"17-12-11",plaats:"Woluwe",records:"9m53"},

 
];

/*SCH */

const RECORDSCH_DAMES: clubRecordsInt[] = [
  {discipline:"100m",naam:"Nana-Owusu Philomena",datum:"07-05-2016",plaats:"Lebbekke",records:"14\"02"},
  {discipline:"200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"300m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"3000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"100mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400mHorden",naam:"Byrne Chinook",datum:"07-05-2016",plaats:"Lebbeke",records:"83\"69"},
  {discipline:"Hoogspringen",naam:"Nana-Owusu Philomena",datum:"07-05-2016",plaats:"Lebbeke",records:"1m35"},
  {discipline:"Verspringen",naam:"Byrne Chinook",datum:"07-05-2016",plaats:"Lebbeke",records:"3m99"},
  {discipline:"Kogelstoten",naam:"Guemmar Mounia",datum:"12-04-03",plaats:"Vilvoorde",records:"8m68"},
  {discipline:"Discuswerpen",naam:"Guemmar Mounia",datum:"30-08-03",plaats:"Molenbeek",records:"20m01"},
  {discipline:"Hamerslingeren",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Speerwerpen",naam:"Guemmar Mounia",datum:"12-04-03",plaats:"Vilvoorde",records:"21m87"},

 
];
const RECORDSCH_HEREN: clubRecordsInt[] = [
  {discipline:"100m",naam:"Es-sanfaoui Khalid",datum:"16-06-13",plaats:"Anderlecht",records:"12\"09"},
  {discipline:"200m",naam:"Es-sanfaoui Khalid",datum:"22-06-13",plaats:"Vilvoorde",records:"24\"40"},
  {discipline:"300m",naam:"Es-sanfaoui Khalid",datum:"19-05-13",plaats:"Lokeren",records:"40\"04"},
  {discipline:"400m",naam:"Es-sanfaoui Khalid",datum:"26-05-13",plaats:"Duffel",records:"56\"48"},
  {discipline:"800m",naam:"Fatihi Iilas",datum:"21-06-2014",plaats:"Lier",records:"2'08\"88"},
  {discipline:"1000m",naam:"Kouagnia Rocky",datum:"23-04-05",plaats:"Hamme",records:"2'57\"67"},
  {discipline:"1500m",naam:"Melhaoui Sidi-Mohamed",datum:"15-05-05",plaats:"Bornem",records:"4'15\"56"},
  {discipline:"3000m",naam:"Melhaoui Sidi-Mohamed",datum:"03-06-05",plaats:"Oordegem",records:"9'09\"06"},
  {discipline:"100mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x100m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"Melhaoui Sidi-Mohamed",datum:"14-05-06",plaats:"Aalter",records:"1m70"},
  {discipline:"Verspringen",naam:"Takkal Zacharia",datum:"08-05-2011",plaats:"Laken",records:"5m44"},
  {discipline:"Hinkstap",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Ariozsoy Ziya",datum:"30-04-05",plaats:"Tienen",records:"11m43"},
  {discipline:"Discuswerpen",naam:"Seamari Rachid",datum:"06-07-05",plaats:"Vilvoorde",records:"35m15"},
  {discipline:"Hamerslingeren",naam:"Ariozsoy Ziya",datum:"17-04-05",plaats:"Tienen",records:"23m84"},
  {discipline:"Speerwerpen",naam:"Doljenkov Vadim",datum:"30-04-06",plaats:"Vilvoorde",records:"31m78"},
  
 
];

const RECORDSCH_DAMESind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Geldof Mayté",datum:"08-01-2012",plaats:"Gent",records:"8\"89"},
  {discipline:"200m",naam:"Geldof Mayté",datum:"08-01-2012",plaats:"Gent",records:"29\"56"},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"",datum:"",plaats:"",records:""},
 
];
const RECORDSCH_HERENind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Kouagnia Rocky",datum:"19-03-06",plaats:"Gent",records:"7\"72"},
  {discipline:"200m",naam:"Kouagnia Rocky",datum:"19-03-06",plaats:"Gent",records:"25\"23"},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1000m",naam:"Temsamani Jawad",datum:"03-03-01",plaats:"Gent",records:"2'47\"5"},
  {discipline:"1500m",naam:"Temsamani Jawad",datum:"31-03-01",plaats:"Gent",records:"4'33\"58"},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"Akhmadov Manzul",datum:"27-02-10",plaats:"Gent",records:"5m04"},
  {discipline:"Kogelstoten",naam:"Jimenez Luis",datum:"20-12-03",plaats:"Woluwe",records:"10m64"},
 
];

/*Jun */

const RECORDJUN_DAMES: clubRecordsInt[] = [
  {discipline:"100m",naam:"Gharbi Houda",datum:"06-04-12",plaats:"Woluwe",records:"14\"81"},
  {discipline:"200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"300m",naam:"Rabhiou Yousra",datum:"09-06-2014",plaats:"Vilvoorde",records:"49\"05"},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"Rabhiou Yousra",datum:"27-04-14",plaats:"Tienen",records:"2'40\"53"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"3000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"5000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"100mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x100m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Byrne Cheyenne",datum:"09-05-2015",plaats:"Hamme",records:"7m43"},
  {discipline:"Discuswerpen	",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Speerwerpen",naam:"Byrne Cheyenne",datum:"09-05-2015",plaats:"Hamme",records:"11m22"},
 
];
const RECORDJUN_HEREN: clubRecordsInt[] = [
  {discipline:"100m",naam:"Jalloh Bakarr",datum:"12-06-10",plaats:"Vilvoorde",records:"11\"56"},
  {discipline:"200m",naam:"Mokkadem",datum:"30-08-2000",plaats:"Waregem",records:"22\"95"},
  {discipline:"300m",naam:"Jalloh Bakarr",datum:"12-06-10",plaats:"Vilvoorde",records:"36\"74"},
  {discipline:"400m",naam:"Mokkadem Hocine",datum:"14-08-2000",plaats:"Izegem",records:"49\"77"},
  {discipline:"800m",naam:"Mokkadem Hocine",datum:"26-08-2000",plaats:"Oordegem",records:"1'55\"16"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"Abdi Nuuh Saber",datum:"04-06-2016",plaats:"Oordegem",records:"4'08\"68"},
  {discipline:"3000m",naam:"Abdi Nuuh Saber",datum:"01-05-2016",plaats:"Mol",records:"9'25\"56"},
  {discipline:"5000m",naam:"Kebede Tulu Tedros",datum:"30-04-2006",plaats:"Vilvoorde",records:"16'50\"81"},
  {discipline:"Hoogspringen",naam:"Melhaoui Sidi-Mohamed",datum:"13-05-2007",plaats:"Vilvoorde",records:"1m75"},
  {discipline:"Verspringen",naam:"Kouagnia Rocky",datum:"29-04-2007",plaats:"Kessel-Lo",records:"4m87"},
  {discipline:"Kogelstoten",naam:"Ariozsoy Ziya",datum:"29-04-2006",plaats:"Vilvoorde",records:"11m45"},
  {discipline:"Discuswerpen",naam:"Seamari Rachid",datum:"29-04-2006",plaats:"Vilvoorde",records:"30m10"},
  {discipline:"Speerwerpen",naam:"Fallah Ayoub",datum:"15-05-2016",plaats:"Lier",records:"37m61"},
  
];

const RECORDJUN_DAMESind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Barghout Farah",datum:"08-01-2012",plaats:"Gent",records:"9\"83"},
  {discipline:"200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"",datum:"",plaats:"",records:""},

 
];
const RECORDJUN_HERENind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Es-sanfaoui Khalid",datum:"22-02-2014",plaats:"Gent",records:"7\"66"},
  {discipline:"200m",naam:"Es-sanfaoui Khalid",datum:"05-01-2014",plaats:"Gent",records:"24\"22"},
  {discipline:"400m",naam:"Mokkadem Hocine",datum:"5-3-2000",plaats:"Gent",records:"51\"57"},
  {discipline:"800m",naam:"Mokkadem Hocine",datum:"23-1-2000",plaats:"Gent",records:"2'00\"57"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"3000m",naam:"Abid Mourad",datum:"31-03-01",plaats:"Gent",records:"10'22\"66"},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Ariozsoy Ziya",datum:"15-01-06",plaats:"Gent",records:"11m84"},
 
];
/*SEN */

const RECORDSEN_DAMES: clubRecordsInt[] = [
  {discipline:"100m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"200m",naam:"Goethals Liesbeth",datum:"25-05-2015",plaats:"Lokeren",records:"30\"63"},
  {discipline:"300m",naam:"Challouki Imane",datum:"09-06-2014",plaats:"Vilvoorde",records:"59\"68"},
  {discipline:"400m",naam:"Goethals Liesbeth",datum:"09-05-2015",plaats:"Hamme",records:"71\"15"},
  {discipline:"800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"Aboulahcen Mounia",datum:"08-06-2002",plaats:"Izegem",records:"4'52\"82"},
  {discipline:"3000m",naam:"Aboulahcen Mounia",datum:"01-07-2004",plaats:"Tessenderlo",records:"9'19\"65"},
  {discipline:"5000m",naam:"Aboulahcen Mounia",datum:"07-07-2002",plaats:"Brussel",records:"15'52\"65"},
  {discipline:"10000m",naam:"Aboulahcen Mounia",datum:"03-07-2002",plaats:"Andenne",records:"33'39\"66"},
  {discipline:"4x100m",naam:"Goethals L,Geldof T,Byrne C,Nana-Owusu P",datum:"09-05-2015",plaats:"Hamme",records:"54\"51"},
  {discipline:"4x400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"kogelstoten",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Discuswerpen",naam:"",datum:"",plaats:"",records:""},
  
 
];
const RECORDSEN_HEREN: clubRecordsInt[] = [
  {discipline:"100m",naam:"Bah Ouma",datum:"08-08-2010",plaats:"Brussel",records:"11\"09"},
  {discipline:"200m",naam:"Lissassi Arnaud",datum:"19-05-01",plaats:"Diest",records:"22\"87"},
  {discipline:"300m",naam:"Elbakhlakhi Youssef",datum:"24-06-2004",plaats:"Wespelaar",records:"35\"87"},
  {discipline:"400m",naam:"Mokkadem Hocine",datum:"21-07-2001",plaats:"Oordegem",records:"50\"78"},
  {discipline:"800m",naam:"Jallouli Tarik",datum:"23-07-2003",plaats:"Gent",records:"1'50\"02"},
  {discipline:"1000m",naam:"Rizki Monder",datum:"25-08-2000",plaats:"Brussel",records:"2'21\"63"},
  {discipline:"1500m",naam:"Rizki Monder",datum:"31-05-2003",plaats:"Diest",records:"3'41\"51"},
  {discipline:"2000m",naam:"Kebede Tulu Tedros",datum:"13-06-2009",plaats:"Ninove",records:"5'47\"43"},
  {discipline:"3000m",naam:"Rizki Monder",datum:"31-05-2004",plaats:"Rehlingen",records:"7'42\"84"},
  {discipline:"5000m",naam:"Rizki Monder",datum:"20-07-2008",plaats:"Heusden-Zolder",records:"13'04\"06"},
  {discipline:"10000m",naam:"Rizki Monder",datum:"05-06-2006",plaats:"Neerpelt",records:"28'07\"10"},
  {discipline:"Uurloop",naam:"Jallouli Tarik",datum:"16-10-05",plaats:"Woluwe",records:"17km920m"},
  {discipline:"Marathon",naam:"",datum:"",plaats:"",records:"2h34'07"},
  {discipline:"3000mSteeple",naam:"",datum:"",plaats:"",records:""},
  {discipline:"100mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400mHorden",naam:"Hama Mamoudou",datum:"09-08-2008",plaats:"Ninove",records:"54\"04"},
  {discipline:"4x100m",naam:"Bah O., Ngarambe E., Takkal Z., Amadou B.",datum:"22-08-2010",plaats:"Kessel-Lo",records:"45\"66"},
  {discipline:"4x200m",naam:"Jalloh B., Amadou B., Byrne T., Bah O",datum:"22-08-2010",plaats:"Kessel-Lo",records:"1'32\"66"},
  {discipline:"4x400m",naam:"Lissassi A., Lissassi C., Rizki M., Mokkadem H.",datum:"13-05-2001",plaats:"Lanaken",records:"3'29\"50"},
  {discipline:"4x1500m",naam:"Melhaoui S., Bekkali O., Fumiere O., Rizki M.",datum:"17-09-2006",plaats:"Brussel",records:"16'36\"82"},
  {discipline:"Hoogspringen",naam:"El Bakhlakhi Youssef",datum:"15-05-2005",plaats:"Bornem",records:"1m80"},
  {discipline:"Verspringen",naam:"El Bakhlakhi Youssef",datum:"05-08-2005",plaats:"Huizingen",records:"6m29"},
  {discipline:"hinkstap",naam:"El Bakhlakhi Youssef",datum:"13-05-2007",plaats:"Vilvoorde",records:"12m46"},
  {discipline:"Polsstok",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"Hammani Lahcen",datum:"04-07-2004",plaats:"Vilvoorde",records:"12m33"},
  {discipline:"Discuswerpen",naam:"Hammani Lahcen	",datum:"05-06-2004",plaats:"Leuven",records:"47m00"},
  {discipline:"Hamerslingeren	",naam:"Hammani Lahcen",datum:"24-06-2004",plaats:"Wespelaar",records:"43m99"},
  {discipline:"Speerwerpen",naam:"Fallah Ayoub	",datum:"15-05-2016",plaats:"Lier",records:"37m61"},
 
];

const RECORDSEN_DAMESind: clubRecordsInt[] = [
  {discipline:"60",naam:"",datum:"",plaats:"",records:""},
  {discipline:"200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"800m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"3000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"",datum:"",plaats:"",records:""},
 
];
const RECORDSEN_HERENind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Bah Oumar",datum:"26-12-10",plaats:"Gent",records:"7\"22"},
  {discipline:"200m",naam:"Bah Oumar",datum:"26-12-10",plaats:"Gent",records:"23\"25"},
  {discipline:"400m",naam:"Mokkadem Hocine",datum:"18-02-01",plaats:"Gent",records:"51\"05"},
  {discipline:"800m",naam:"Jallouli Tarik",datum:"04-01-2003",plaats:"Gent",records:"1'55\"31"},
  {discipline:"1000m",naam:"Jallouli Tarik",datum:"03-03-01",plaats:"Gent",records:"2'35\"18"},
  {discipline:"1500m",naam:"Rizki Monder",datum:"22-02-2004",plaats:"Gent",records:"3'42\"83"},
  {discipline:"3000m",naam:"Rizki Monder",datum:"04-02-2006",plaats:"Stuttgart",records:"7'53\"67"},
  {discipline:"60mHorden",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"El Bakhlaki Youssef",datum:"27-03-04",plaats:"Gent",records:"6m29"},
  {discipline:"Kogelstoten",naam:"Drieghe Davy",datum:"20-12-03",plaats:"Woluwe",records:"8m21"},

 
];

/*MAS */

const RECORDMAS_DAMES: clubRecordsInt[] = [
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
 
];
const RECORDMAS_HEREN: clubRecordsInt[] = [
  {discipline:"100m",naam:"Byrne Timothy",datum:"29-04-2006",plaats:"Vilvoorde",records:"12\"39"},
  {discipline:"200m",naam:"Byrne Timothy",datum:"29-04-2006",plaats:"Vilvoorde",records:"24\"66"},
  {discipline:"300m",naam:"Byrne Timothy",datum:"24-05-2010",plaats:"Lebbeke",records:"38\"10"},
  {discipline:"400m",naam:"Byrne Timothy",datum:"06-06-2010",plaats:"Oordegem",records:"52\"97"},
  {discipline:"800m",naam:"Byrne Timothy",datum:"26-09-2009",plaats:"Maldegem",records:"2'03\"87"},
  {discipline:"1000m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"1500m",naam:"Diallo Mohamed",datum:"08-05-2011",plaats:"Laken",records:"4'24\"87"},
  {discipline:"3000m",naam:"Diallo Mohamed",datum:"06-05-2011",plaats:"Vilvoorde",records:"9'41\"62"},
  {discipline:"3000mSteeple",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Marathon",naam:"Hansen Gérald",datum:"29-05-2016",plaats:"Luxemburg",records:"2u55'34\""},
  {discipline:"400mHorden",naam:"Fumiere Olivier",datum:"13-05-2007",plaats:"Vilvoorde",records:"61\"30"},
  {discipline:"4x100m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"4x400m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen	",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Speerwerpen",naam:"",datum:"",plaats:"",records:""},

 
];

const RECORDMAS_DAMESind: clubRecordsInt[] = [
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
  {discipline:"",naam:"",datum:"",plaats:"",records:""},
 
];
const RECORDMAS_HERENind: clubRecordsInt[] = [
  {discipline:"60m",naam:"Byrne Tim",datum:"19-03-06",plaats:"Gent",records:"7\"87"},
  {discipline:"200m",naam:"Byrne Tim",datum:"19-03-06",plaats:"Gent",records:"25\"02"},
  {discipline:"400m",naam:"Byrne Tim",datum:"27-02-11",plaats:"Gent",records:"39\"12"},
  {discipline:"800m",naam:"Byrne Tim",datum:"26-02-11",plaats:"Gent",records:"53\"55"},
  {discipline:"1000m",naam:"Byrne Tim",datum:"08-03-08",plaats:"Gent",records:"2'06\"35"},
  {discipline:"60mHorden",naam:"Byrne Tim",datum:"16-03-08",plaats:"Gent",records:"2'50\"70"},
  {discipline:"4x200m",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Hoogspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Verspringen",naam:"",datum:"",plaats:"",records:""},
  {discipline:"Kogelstoten",naam:"",datum:"",plaats:"",records:""},
 
];

/* einde Tabellen met de clubb records */
@Component({
  selector: 'app-clubrecords',
  templateUrl: './clubrecords.component.html',
  styleUrls: ['./clubrecords.component.css']
})
export class ClubrecordsComponent implements OnInit  {
  /**outdoor */
  dataSourceBenM : MatTableDataSource<clubRecordsInt>;
  dataSourceBenJ : MatTableDataSource<clubRecordsInt>;
  dataSourcePupM : MatTableDataSource<clubRecordsInt>;
  dataSourcePupJ : MatTableDataSource<clubRecordsInt>;
  dataSourceMinM : MatTableDataSource<clubRecordsInt>;
  dataSourceMinJ : MatTableDataSource<clubRecordsInt>;
  dataSourceKadD : MatTableDataSource<clubRecordsInt>;
  dataSourceKadH : MatTableDataSource<clubRecordsInt>;
  dataSourceSchD : MatTableDataSource<clubRecordsInt>;
  dataSourceSchH : MatTableDataSource<clubRecordsInt>;
  dataSourceJunD : MatTableDataSource<clubRecordsInt>;
  dataSourceJunH : MatTableDataSource<clubRecordsInt>;
  dataSourceSenD : MatTableDataSource<clubRecordsInt>;
  dataSourceSenH : MatTableDataSource<clubRecordsInt>;
  dataSourceMasD : MatTableDataSource<clubRecordsInt>;
  dataSourceMasH : MatTableDataSource<clubRecordsInt>;

  /**indoor */
  dataSourceBenMind : MatTableDataSource<clubRecordsInt>;
  dataSourceBenJind : MatTableDataSource<clubRecordsInt>;
  dataSourcePupMind : MatTableDataSource<clubRecordsInt>;
  dataSourcePupJind : MatTableDataSource<clubRecordsInt>;
  dataSourceMinMind : MatTableDataSource<clubRecordsInt>;
  dataSourceMinJind : MatTableDataSource<clubRecordsInt>;
  dataSourceKadDind : MatTableDataSource<clubRecordsInt>;
  dataSourceKadHind : MatTableDataSource<clubRecordsInt>;
  dataSourceSchDind : MatTableDataSource<clubRecordsInt>;
  dataSourceSchHind : MatTableDataSource<clubRecordsInt>;
  dataSourceJunDind : MatTableDataSource<clubRecordsInt>;
  dataSourceJunHind : MatTableDataSource<clubRecordsInt>;
  dataSourceSenDind : MatTableDataSource<clubRecordsInt>;
  dataSourceSenHind : MatTableDataSource<clubRecordsInt>;
  dataSourceMasDind : MatTableDataSource<clubRecordsInt>;
  dataSourceMasHind : MatTableDataSource<clubRecordsInt>;



  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatPaginator) paginatorIndoor = new QueryList<MatPaginator>();
  

  displayedColumns: string[] = ['discipline', 'naam','datum', 'plaats','records'];

 
  



  panelOpenState = false;

  constructor() { 
     /*Datasources tabellen outdoor */
    this.dataSourceBenM =  new MatTableDataSource<clubRecordsInt>(RECORDBEN_MEISJES);
    this.dataSourceBenJ =  new MatTableDataSource<clubRecordsInt>(RECORDBEN_JONGENS);
    this.dataSourcePupM =  new MatTableDataSource<clubRecordsInt>(RECORDPUP_MEISJES);
    this.dataSourcePupJ =  new MatTableDataSource<clubRecordsInt>(RECORDPUP_JONGENS);
    this.dataSourceMinM =  new MatTableDataSource<clubRecordsInt>(RECORDMIN_MEISJES);
    this.dataSourceMinJ =  new MatTableDataSource<clubRecordsInt>(RECORDMIN_JONGENS);
    this.dataSourceKadD =  new MatTableDataSource<clubRecordsInt>(RECORDKAD_DAMES);
    this.dataSourceKadH =  new MatTableDataSource<clubRecordsInt>(RECORDKAD_HEREN);
    this.dataSourceSchD =  new MatTableDataSource<clubRecordsInt>(RECORDSCH_DAMES);
    this.dataSourceSchH =  new MatTableDataSource<clubRecordsInt>(RECORDSCH_HEREN);
    this.dataSourceJunD =  new MatTableDataSource<clubRecordsInt>(RECORDJUN_DAMES);
    this.dataSourceJunH =  new MatTableDataSource<clubRecordsInt>(RECORDJUN_HEREN);
    this.dataSourceSenD =  new MatTableDataSource<clubRecordsInt>(RECORDSEN_DAMES);
    this.dataSourceSenH =  new MatTableDataSource<clubRecordsInt>(RECORDSEN_HEREN);
    this.dataSourceMasD =  new MatTableDataSource<clubRecordsInt>(RECORDMAS_DAMES);
    this.dataSourceMasH =  new MatTableDataSource<clubRecordsInt>(RECORDMAS_HEREN);


  /*einde datasources tabellen */

    /*Datasources tabellen indoor */
    this.dataSourceBenMind =  new MatTableDataSource<clubRecordsInt>(RECORDBEN_MEISJESind);
    this.dataSourceBenJind =  new MatTableDataSource<clubRecordsInt>(RECORDBEN_JONGENSind);
    this.dataSourcePupMind =  new MatTableDataSource<clubRecordsInt>(RECORDPUP_MEISJESind);
    this.dataSourcePupJind =  new MatTableDataSource<clubRecordsInt>(RECORDPUP_JONGENSind);
    this.dataSourceMinMind =  new MatTableDataSource<clubRecordsInt>(RECORDMIN_MEISJESind);
    this.dataSourceMinJind =  new MatTableDataSource<clubRecordsInt>(RECORDMIN_JONGENSind);
    this.dataSourceKadDind =  new MatTableDataSource<clubRecordsInt>(RECORDKAD_DAMESind);
    this.dataSourceKadHind =  new MatTableDataSource<clubRecordsInt>(RECORDKAD_HERENind);
    this.dataSourceSchDind =  new MatTableDataSource<clubRecordsInt>(RECORDSCH_DAMESind);
    this.dataSourceSchHind =  new MatTableDataSource<clubRecordsInt>(RECORDSCH_HERENind);
    this.dataSourceJunDind =  new MatTableDataSource<clubRecordsInt>(RECORDJUN_DAMESind);
    this.dataSourceJunHind =  new MatTableDataSource<clubRecordsInt>(RECORDJUN_HERENind);
    this.dataSourceSenDind =  new MatTableDataSource<clubRecordsInt>(RECORDSEN_DAMESind);
    this.dataSourceSenHind =  new MatTableDataSource<clubRecordsInt>(RECORDSEN_HERENind);
    this.dataSourceMasDind =  new MatTableDataSource<clubRecordsInt>(RECORDMAS_DAMESind);
    this.dataSourceMasHind =  new MatTableDataSource<clubRecordsInt>(RECORDMAS_HERENind);

     /*einde datasources tabellen indoor */
  }

  ngOnInit() {
   
  }
  ngAfterViewInit() {
/*outdoor*/
    this.dataSourceBenM.paginator=this.paginator.toArray()[0];
    this.dataSourceBenJ.paginator=this.paginator.toArray()[1];
    this.dataSourcePupM.paginator=this.paginator.toArray()[2];
    this.dataSourcePupJ.paginator=this.paginator.toArray()[3];
    this.dataSourceMinM.paginator=this.paginator.toArray()[4];
    this.dataSourceMinJ.paginator=this.paginator.toArray()[5];
    this.dataSourceKadD.paginator=this.paginator.toArray()[6];
    this.dataSourceKadH.paginator=this.paginator.toArray()[7];
    this.dataSourceSchD.paginator=this.paginator.toArray()[8];
    this.dataSourceSchH.paginator=this.paginator.toArray()[9];
    this.dataSourceJunD.paginator=this.paginator.toArray()[10];
    this.dataSourceJunH.paginator=this.paginator.toArray()[11];
    this.dataSourceSenD.paginator=this.paginator.toArray()[12];
    this.dataSourceSenH.paginator=this.paginator.toArray()[13];
    this.dataSourceMasD.paginator=this.paginator.toArray()[14];
    this.dataSourceMasH.paginator=this.paginator.toArray()[15];


    /**Indoor */
    this.dataSourceBenMind.paginator=this.paginator.toArray()[16];
    this.dataSourceBenJind.paginator=this.paginator.toArray()[17];
    this.dataSourcePupMind.paginator=this.paginator.toArray()[18];
    this.dataSourcePupJind.paginator=this.paginator.toArray()[19];
    this.dataSourceMinMind.paginator=this.paginator.toArray()[20];
    this.dataSourceMinJind.paginator=this.paginator.toArray()[21];
    this.dataSourceKadDind.paginator=this.paginator.toArray()[22];
    this.dataSourceKadHind.paginator=this.paginator.toArray()[23];
    this.dataSourceSchDind.paginator=this.paginator.toArray()[24];
    this.dataSourceSchHind.paginator=this.paginator.toArray()[25];
    this.dataSourceJunDind.paginator=this.paginator.toArray()[26];
    this.dataSourceJunHind.paginator=this.paginator.toArray()[27];
    this.dataSourceSenDind.paginator=this.paginator.toArray()[28];
    this.dataSourceSenHind.paginator=this.paginator.toArray()[29];
    this.dataSourceMasDind.paginator=this.paginator.toArray()[30];
    this.dataSourceMasHind.paginator=this.paginator.toArray()[31];
  }


}
