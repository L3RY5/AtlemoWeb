import { Component, OnInit,ViewChild,ViewChildren, AfterViewInit, QueryList} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface ClubRecordsInt {
  discipline: string;
  naam: string;
  datum: string;
  plaats: string;
  records: string;
}

enum Gender {
  Jongens = 'Jongens',
  Meisjes = 'Meisjes',
  Heren = 'Heren',
  Dames = 'Dames',
};

enum AgeCategory {
  Benjamins = 'Benjamins',
  Pupillen = 'Pupillen',
  Miniemen = 'Miniemen',
  Kadetten = 'Kadetten',
  Scholieren = 'Scholieren',
  Juniors = 'Juniors',
  Seniors = 'Seniors',
  Masters = 'Masters',
};

export interface RecordGroup {
  gender: Gender;
  ageCategory: AgeCategory;
  records: MatTableDataSource<ClubRecordsInt>;
}

const outdoorRecords: RecordGroup[] = [
  {
    gender: Gender.Meisjes,
    ageCategory: AgeCategory.Benjamins,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Sieben Yaan',datum:'29-06-2013',plaats:'Tienen',records:'9"87'},
      {discipline:'600m',naam:'Byrne Chinook',datum:'27-06-2009',plaats:'Vilvoorde',records:'2\'06"64'},
      {discipline:'1000m',naam:'Byrne Chinook',datum:'03-08-2008',plaats:'Lebbeke',records:'4\'07"76'},
      {discipline:'Hoogspringen',naam:'Hasani Geraldine',datum:'18-07-2004',plaats:'Dilbeek',records:'1m21'},
      {discipline:'Verspringen',naam:'Hasani Geraldine',datum:'03-07-2004',plaats:'Bosvoorde',records:'3m83'},
      {discipline:'Kogelstoten',naam:'Hasani Geraldine',datum:'26-06-2004',plaats:'Vilvoorde',records:'9m09'},
      {discipline:'Hockeybal',naam:'Hasani Geraldine',datum:'27-09-2003',plaats:'Nijvel',records:'21m99'},
      {discipline:'4x60m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Vierkamp',naam:'Byrne Chinook',datum:'06-06-2009',plaats:'Vilvoorde',records:'1069p'},
    ])
  },
  {
    gender: Gender.Jongens,
    ageCategory: AgeCategory.Benjamins,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Roefmans Lucas',datum:'23-04-2010',plaats:'Lebbeke',records:'9"85'},
      {discipline:'600m',naam:'Flachet Liam',datum:'30-05-2009',plaats:'Machelen',records:'2\'15"54'},
      {discipline:'1000m',naam:'Dari Redouane',datum:'24-05-2001',plaats:'St-Niklaas',records:'3\'53"37'},
      {discipline:'Hoogspringen',naam:'Philips David',datum:'03-06-2012',plaats:'Vilvoorde',records:'1m10'},
      {discipline:'Verspringen',naam:'Roefmans Lucas',datum:'03-05-2009',plaats:'Anderlecht',records:'3m62'},
      {discipline:'Kogelstoten',naam:'Ben Sabih Sohaib',datum:'04-07-1998',plaats:'Molenbeek',records:'8m01'},
      {discipline:'Hockeybal',naam:'Amezyan Imadeddine',datum:'20-06-2009',plaats:'Molenbeek',records:'27m57'},
      {discipline:'4x60m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Vierkamp',naam:'Ndabukiye Radjabu Sham',datum:'07-06-2014',plaats:'Vilvoorde',records:'1136p'},
    ])
  },
  {
    gender: Gender.Meisjes,
    ageCategory: AgeCategory.Pupillen,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Nana-Owusu Philomina',datum:'25-06-2011',plaats:'Huizingen',records:'8"57'},
      {discipline:'1000m',naam:'Byrne Chinook',datum:'10-04-2011',plaats:'Ninove',records:'3\'30"76'},
      {discipline:'Hoogspringen',naam:'Ndabukiye Radjabu Asha',datum:'07-06-2014',plaats:'Vilvoorde',records:'1m27'},
      {discipline:'Verspringen',naam:'Nana-Owusu Philomina',datum:'02-07-2011',plaats:'Machelen',records:'3m86'},
      {discipline:'Kogelstoten',naam:'Hassani Geraldina',datum:'25-06-2005',plaats:'Dilbeek',records:'8m89'},
      {discipline:'Hockeybal',naam:'Byrne Chinook',datum:'02-07-2011',plaats:'Machelen',records:'27m82'},
      {discipline:'Discuswerpen',naam:'Ackerman Aurelie',datum:'02-09-2000',plaats:'Vilvoorde',records:'18m11'},
      {discipline:'4x60m',naam:'Wester Yasmine, Lamsadya Manel,Nicaise Eline,Byrne Chinook',datum:'17-04-2010',plaats:'Dilbeek',records:'42"58'},
      {discipline:'Vierkamp',naam:'Nana-Owusu Philomina',datum:'02-07-2011',plaats:'Machelen',records:'1776p'},
    ])
  },
  {
    gender: Gender.Jongens,
    ageCategory: AgeCategory.Pupillen,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Roefmans Lucas',datum:'23-06-2012',plaats:'Dilbeek',records:'8"87'},
      {discipline:'1000m',naam:'Kamil Yassin',datum:'12-06-2004',plaats:'Vilvoorde',records:'3\'33"21'},
      {discipline:'60Horden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Davies Isaac',datum:'28-06-2003',plaats:'Huizingen',records:'1m20'},
      {discipline:'Verspringen',naam:'Akhedov Manzul',datum:'28-08-2005',plaats:'Anderlecht',records:'3m90'},
      {discipline:'Kogelstoten',naam:'Karsikaya Murat',datum:'06-06-1998',plaats:'Machelen',records:'7m50'},
      {discipline:'Hockeybal',naam:'Melhaoui Anouar',datum:'19-08-2001',plaats:'Dilbeek',records:'33m08'},
      {discipline:'Discuswerpen',naam:'V. Outenboer Karim',datum:'17-04-1999',plaats:'Brussel',records:'13m35'},
      {discipline:'4x60m',naam:'Roefmans Lucas, Jacques Meert Andries, Ayad Hamza, Van Hecke Honor',datum:'22-04-2012',plaats:'Huizingen',records:'40"09'},
      {discipline:'Vierkamp',naam:'Akhmedov Manzul',datum:'28-08-2005',plaats:'Anderlecht',records:'1691p'},
    ])
  },
  {
    gender: Gender.Meisjes,
    ageCategory: AgeCategory.Miniemen,
    records: new MatTableDataSource([
      {discipline:'80m',naam:'Nana-Owusu Philomena',datum:'29-06-2013',plaats:'Tienen',records:'10"75'},
      {discipline:'150m',naam:'Nana-Owusu Philomena',datum:'29-06-2013',plaats:'Tienen',records:'20"02'},
      {discipline:'300m',naam:'Byrne Chinook',datum:'29-06-2013',plaats:'Tienen',records:'46"65'},
      {discipline:'1000m',naam:'Byrne Chinook',datum:'23-06-2012',plaats:'Dilbeek',records:'3\'21"91'},
      {discipline:'60mHorden',naam:'Ackerman Aurélie',datum:'25-08-2002',plaats:'Vorst',records:'10"51'},
      {discipline:'Hoogspringen',naam:'Ackerman Aurélie',datum:'08-06-2002',plaats:'Vilvoorde',records:'1m40'},
      {discipline:'Verspringen',naam:'Nana-Owusu Philomena',datum:'05-05-2012',plaats:'Kortenberg',records:'4m45'},
      {discipline:'Polsstok',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Byrne Cheyenne',datum:'17-04-2010',plaats:'Dilbeek',records:'10m50'},
      {discipline:'Discuswerpen',naam:'Ackerman Aurélie',datum:'22-06-2002',plaats:'Vilvoorde',records:'25m82'},
      {discipline:'Speerwerpen',naam:'Byrne Chinook',datum:'20-04-2013',plaats:'Kessel-Lo',records:'20m78'},
      {discipline:'4x80m',naam:'Geldof T., Catteeuw F., Abba S., Nana-Owusu P',datum:'20-04-2013',plaats:'Kessel-Lo',records:'47"25'},
      {discipline:'Vijfkamp',naam:'Ackerman Aurélie',datum:'20-05-2002',plaats:'Anderlecht',records:'2501p'},
    ])
  },
  {
    gender: Gender.Jongens,
    ageCategory: AgeCategory.Miniemen,
    records: new MatTableDataSource([
      {discipline:'80m',naam:'Ciccarone Tommaso',datum:'27-09-2003',plaats:'Nijvel',records:'10"86'},
      {discipline:'150m',naam:'Roefmans Lucas',datum:'05-05-2014',plaats:'Laken',records:'21"01'},
      {discipline:'300m',naam:'Ciccarone Tommaso',datum:'26-07-2003',plaats:'Vilvoorde',records:'44"28'},
      {discipline:'1000m',naam:'Aabaila Abdelsamad',datum:'24-05-2003',plaats:'Brussel',records:'3\'10"21'},
      {discipline:'80mHorden',naam:'Parfenov Jevgeni',datum:'05-05-2005',plaats:'Schaarbeek',records:'19"86'},
      {discipline:'Hoogspringen',naam:'Roefmans Lucas',datum:'07-06-2014',plaats:'Vilvoorde',records:'1m52'},
      {discipline:'Verspringen',naam:'Roefmans Lucas',datum:'05-05-2014',plaats:'Laken',records:'4m84'},
      {discipline:'Polsstok',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Benrezouq Samir',datum:'05-08-2001',plaats:'Dilbeek',records:'8m94'},
      {discipline:'Discuswerpen',naam:'Seamari Rachid	',datum:'01-09-2001',plaats:'Vilvoorde',records:'21m48'},
      {discipline:'Speerwerpen',naam:'Parfenov Jevegeni',datum:'28-08-2005',plaats:'Anderlecht',records:'38m43'},
      {discipline:'4x80m',naam:'Talhaoui Mohamed, Talhaoui Abdennour, De Troch Wout, Meul Arthur',datum:'18-04-2010',plaats:'Huizingen',records:'47"89'},
      {discipline:'Vijfkamp',naam:'Roefmans Lucas',datum:'07-06-2014',plaats:'Vilvoorde	',records:'2968p'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Kadetten,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Nana-Owusu Philomena',datum:'31-05-2014',plaats:'Vilvoorde',records:'13"31'},
      {discipline:'200m',naam:'Ackerman Aurélie',datum:'21-04-2003',plaats:'Ninove',records:'29"59'},
      {discipline:'300m',naam:'Ackerman Aurélie',datum:'01-05-2003',plaats:'Huizingen',records:'47"76'},
      {discipline:'400m',naam:'Byrne Chinook',datum:'31-05-2014',plaats:'Oordegem',records:'65"38'},
      {discipline:'800m',naam:'Byrne Chinook',datum:'24-05-2014',plaats:'Lokeren',records:'2\'28"89'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'Byrne Chinook',datum:'26-04-2015',plaats:'Kessel-Lo',records:'5\'14"60'},
      {discipline:'80mHorden',naam:'Ackerman Aurélie',datum:'22-05-2004',plaats:'Huizingen',records:'13"63'},
      {discipline:'300mHorden',naam:'Ackerman Aurélie',datum:'22-05-2004',plaats:'Huizingen',records:'51"88'},
      {discipline:'4x100m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Ackerman Aurélie',datum:'01-08-2004',plaats:'Dilbeek',records:'1m44'},
      {discipline:'Verspringen',naam:'Ackerman Aurélie',datum:'01-08-2004',plaats:'Ninove',records:'4m36'},
      {discipline:'Hinkstap',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Polsstok',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Ackerman Aurélie',datum:'01-08-2004',plaats:'Dilbeek',records:'8m17'},
      {discipline:'Discuswerpen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hamerslingeren',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Speerwerpen',naam:'Ackerman Aurélie',datum:'19-07-2003',plaats:'Halle',records:'21m91'},
      {discipline:'Zeskamp',naam:'Ackerman Aurélie',datum:'01-08-2004',plaats:'Dilbeek',records:'2534p'},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Kadetten,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'M\'Rabet Ismael',datum:'28-04-2012',plaats:'Kessel-Lo',records:'12"55'},
      {discipline:'200m',naam:'Ciccarone Tommaso',datum:'02-05-2004',plaats:'Aalst',records:'25"91'},
      {discipline:'300m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400m',naam:'Ciccarone Tommaso',datum:'23-05-2004',plaats:'Huizingen',records:'62"59'},
      {discipline:'800m',naam:'Melhaoui Sidi-Mohamed',datum:'22-05-2004',plaats:'Huizingen',records:'2\'04"65'},
      {discipline:'1000m',naam:'Melhaoui Sidi-Mohamed',datum:'18-07-2004',plaats:'Dilbeek',records:'2\'45"60'},
      {discipline:'1500m',naam:'Melhaoui Sidi-Mohamed',datum:'16-05-2004',plaats:'Lommel',records:'4\'13"34'},
      {discipline:'1500mSteeple',naam:'',datum:'',plaats:'',records:''},
      {discipline:'100mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'300mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x100m',naam:'Fatihi M,Jaques Meert A,Trabelsi Y,Anas Doukali A',datum:'03-05-2015',plaats:'Roeselare',records:''},
      {discipline:'4x800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'M\'Rabet Ismael,Melhaoui Sidi-Mohamed',datum:'04-06-11, 11-05-2003',plaats:'Oordegem,Hamme',records:'1m60'},
      {discipline:'Verspringen',naam:'Roefmans Lukas',datum:'02-08-2015',plaats:'Brasschaat',records:'5m64'},
      {discipline:'Hinkstap',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Polsstok',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Seamari Rachid',datum:'18-05-2003',plaats:'Vilvoorde',records:'9m90'},
      {discipline:'Discuswerpen',naam:'Fallah Ayoub',datum:'28-04-2012',plaats:'Kessel-Lo',records:'33m79'},
      {discipline:'Hamerslingeren',naam:'Ariozsoy Ziya',datum:'27-09-2003',plaats:'Nijvel',records:'20m40'},
      {discipline:'Speerwerpen',naam:'Parfenov Yevgeni',datum:'15-10-2006',plaats:'Anderlecht',records:'41m74'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Scholieren,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Nana-Owusu Philomena',datum:'07-05-2016',plaats:'Lebbekke',records:'14"02'},
      {discipline:'200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'300m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'3000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'100mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400mHorden',naam:'Byrne Chinook',datum:'07-05-2016',plaats:'Lebbeke',records:'83"69'},
      {discipline:'Hoogspringen',naam:'Nana-Owusu Philomena',datum:'07-05-2016',plaats:'Lebbeke',records:'1m35'},
      {discipline:'Verspringen',naam:'Byrne Chinook',datum:'07-05-2016',plaats:'Lebbeke',records:'3m99'},
      {discipline:'Kogelstoten',naam:'Guemmar Mounia',datum:'12-04-2003',plaats:'Vilvoorde',records:'8m68'},
      {discipline:'Discuswerpen',naam:'Guemmar Mounia',datum:'30-08-2003',plaats:'Molenbeek',records:'20m01'},
      {discipline:'Hamerslingeren',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Speerwerpen',naam:'Guemmar Mounia',datum:'12-04-2003',plaats:'Vilvoorde',records:'21m87'},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Scholieren,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Es-sanfaoui Khalid',datum:'16-06-2013',plaats:'Anderlecht',records:'12"09'},
      {discipline:'200m',naam:'Es-sanfaoui Khalid',datum:'22-06-2013',plaats:'Vilvoorde',records:'24"40'},
      {discipline:'300m',naam:'Es-sanfaoui Khalid',datum:'19-05-2013',plaats:'Lokeren',records:'40"04'},
      {discipline:'400m',naam:'Es-sanfaoui Khalid',datum:'26-05-2013',plaats:'Duffel',records:'56"48'},
      {discipline:'800m',naam:'Fatihi Iilas',datum:'21-06-2014',plaats:'Lier',records:'2\'08"88'},
      {discipline:'1000m',naam:'Kouagnia Rocky',datum:'23-04-2005',plaats:'Hamme',records:'2\'57"67'},
      {discipline:'1500m',naam:'Melhaoui Sidi-Mohamed',datum:'15-05-2005',plaats:'Bornem',records:'4\'15"56'},
      {discipline:'3000m',naam:'Melhaoui Sidi-Mohamed',datum:'03-06-2005',plaats:'Oordegem',records:'9\'09"06'},
      {discipline:'100mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x100m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Melhaoui Sidi-Mohamed',datum:'14-05-2006',plaats:'Aalter',records:'1m70'},
      {discipline:'Verspringen',naam:'Takkal Zacharia',datum:'08-05-2011',plaats:'Laken',records:'5m44'},
      {discipline:'Hinkstap',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Ariozsoy Ziya',datum:'30-04-2005',plaats:'Tienen',records:'11m43'},
      {discipline:'Discuswerpen',naam:'Seamari Rachid',datum:'06-07-2005',plaats:'Vilvoorde',records:'35m15'},
      {discipline:'Hamerslingeren',naam:'Ariozsoy Ziya',datum:'17-04-2005',plaats:'Tienen',records:'23m84'},
      {discipline:'Speerwerpen',naam:'Doljenkov Vadim',datum:'30-04-2006',plaats:'Vilvoorde',records:'31m78'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Juniors,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Gharbi Houda',datum:'06-04-2012',plaats:'Woluwe',records:'14"81'},
      {discipline:'200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'300m',naam:'Rabhiou Yousra',datum:'09-06-2014',plaats:'Vilvoorde',records:'49"05'},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'Rabhiou Yousra',datum:'27-04-2014',plaats:'Tienen',records:'2\'40"53'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'3000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'5000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'100mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x100m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Byrne Cheyenne',datum:'09-05-2015',plaats:'Hamme',records:'7m43'},
      {discipline:'Discuswerpen	',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Speerwerpen',naam:'Byrne Cheyenne',datum:'09-05-2015',plaats:'Hamme',records:'11m22'},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Juniors,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Jalloh Bakarr',datum:'12-06-2010',plaats:'Vilvoorde',records:'11"56'},
      {discipline:'200m',naam:'Mokkadem',datum:'30-08-2000',plaats:'Waregem',records:'22"95'},
      {discipline:'300m',naam:'Jalloh Bakarr',datum:'12-06-2010',plaats:'Vilvoorde',records:'36"74'},
      {discipline:'400m',naam:'Mokkadem Hocine',datum:'14-08-2000',plaats:'Izegem',records:'49"77'},
      {discipline:'800m',naam:'Mokkadem Hocine',datum:'26-08-2000',plaats:'Oordegem',records:'1\'55"16'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'Abdi Nuuh Saber',datum:'04-06-2016',plaats:'Oordegem',records:'4\'08"68'},
      {discipline:'3000m',naam:'Abdi Nuuh Saber',datum:'01-05-2016',plaats:'Mol',records:'9\'25"56'},
      {discipline:'5000m',naam:'Kebede Tulu Tedros',datum:'30-04-2006',plaats:'Vilvoorde',records:'16\'50"81'},
      {discipline:'Hoogspringen',naam:'Melhaoui Sidi-Mohamed',datum:'13-05-2007',plaats:'Vilvoorde',records:'1m75'},
      {discipline:'Verspringen',naam:'Kouagnia Rocky',datum:'29-04-2007',plaats:'Kessel-Lo',records:'4m87'},
      {discipline:'Kogelstoten',naam:'Ariozsoy Ziya',datum:'29-04-2006',plaats:'Vilvoorde',records:'11m45'},
      {discipline:'Discuswerpen',naam:'Seamari Rachid',datum:'29-04-2006',plaats:'Vilvoorde',records:'30m10'},
      {discipline:'Speerwerpen',naam:'Fallah Ayoub',datum:'15-05-2016',plaats:'Lier',records:'37m61'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Seniors,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'200m',naam:'Goethals Liesbeth',datum:'25-05-2015',plaats:'Lokeren',records:'30"63'},
      {discipline:'300m',naam:'Challouki Imane',datum:'09-06-2014',plaats:'Vilvoorde',records:'59"68'},
      {discipline:'400m',naam:'Goethals Liesbeth',datum:'09-05-2015',plaats:'Hamme',records:'71"15'},
      {discipline:'800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'Aboulahcen Mounia',datum:'08-06-2002',plaats:'Izegem',records:'4\'52"82'},
      {discipline:'3000m',naam:'Aboulahcen Mounia',datum:'01-07-2004',plaats:'Tessenderlo',records:'9\'19"65'},
      {discipline:'5000m',naam:'Aboulahcen Mounia',datum:'07-07-2002',plaats:'Brussel',records:'15\'52"65'},
      {discipline:'10000m',naam:'Aboulahcen Mounia',datum:'03-07-2002',plaats:'Andenne',records:'33\'39"66'},
      {discipline:'4x100m',naam:'Goethals L,Geldof T,Byrne C,Nana-Owusu P',datum:'09-05-2015',plaats:'Hamme',records:'54"51'},
      {discipline:'4x400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Discuswerpen',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Seniors,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Bah Ouma',datum:'08-08-2010',plaats:'Brussel',records:'11"09'},
      {discipline:'200m',naam:'Lissassi Arnaud',datum:'19-05-2001',plaats:'Diest',records:'22"87'},
      {discipline:'300m',naam:'Elbakhlakhi Youssef',datum:'24-06-2004',plaats:'Wespelaar',records:'35"87'},
      {discipline:'400m',naam:'Mokkadem Hocine',datum:'21-07-2001',plaats:'Oordegem',records:'50"78'},
      {discipline:'800m',naam:'Jallouli Tarik',datum:'23-07-2003',plaats:'Gent',records:'1\'50"02'},
      {discipline:'1000m',naam:'Rizki Monder',datum:'25-08-2000',plaats:'Brussel',records:'2\'21"63'},
      {discipline:'1500m',naam:'Rizki Monder',datum:'31-05-2003',plaats:'Diest',records:'3\'41"51'},
      {discipline:'2000m',naam:'Kebede Tulu Tedros',datum:'13-06-2009',plaats:'Ninove',records:'5\'47"43'},
      {discipline:'3000m',naam:'Rizki Monder',datum:'31-05-2004',plaats:'Rehlingen',records:'7\'42"84'},
      {discipline:'5000m',naam:'Rizki Monder',datum:'20-07-2008',plaats:'Heusden-Zolder',records:'13\'04"06'},
      {discipline:'10000m',naam:'Rizki Monder',datum:'05-06-2006',plaats:'Neerpelt',records:'28\'07"10'},
      {discipline:'Uurloop',naam:'Jallouli Tarik',datum:'16-10-2005',plaats:'Woluwe',records:'17km920m'},
      {discipline:'Marathon',naam:'',datum:'',plaats:'',records:'2h34\'07'},
      {discipline:'3000mSteeple',naam:'',datum:'',plaats:'',records:''},
      {discipline:'100mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400mHorden',naam:'Hama Mamoudou',datum:'09-08-2008',plaats:'Ninove',records:'54"04'},
      {discipline:'4x100m',naam:'Bah O., Ngarambe E., Takkal Z., Amadou B.',datum:'22-08-2010',plaats:'Kessel-Lo',records:'45"66'},
      {discipline:'4x200m',naam:'Jalloh B., Amadou B., Byrne T., Bah O',datum:'22-08-2010',plaats:'Kessel-Lo',records:'1\'32"66'},
      {discipline:'4x400m',naam:'Lissassi A., Lissassi C., Rizki M., Mokkadem H.',datum:'13-05-2001',plaats:'Lanaken',records:'3\'29"50'},
      {discipline:'4x1500m',naam:'Melhaoui S., Bekkali O., Fumiere O., Rizki M.',datum:'17-09-2006',plaats:'Brussel',records:'16\'36"82'},
      {discipline:'Hoogspringen',naam:'El Bakhlakhi Youssef',datum:'15-05-2005',plaats:'Bornem',records:'1m80'},
      {discipline:'Verspringen',naam:'El Bakhlakhi Youssef',datum:'05-08-2005',plaats:'Huizingen',records:'6m29'},
      {discipline:'Hinkstap',naam:'El Bakhlakhi Youssef',datum:'13-05-2007',plaats:'Vilvoorde',records:'12m46'},
      {discipline:'Polsstok',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Hammani Lahcen',datum:'04-07-2004',plaats:'Vilvoorde',records:'12m33'},
      {discipline:'Discuswerpen',naam:'Hammani Lahcen	',datum:'05-06-2004',plaats:'Leuven',records:'47m00'},
      {discipline:'Hamerslingeren	',naam:'Hammani Lahcen',datum:'24-06-2004',plaats:'Wespelaar',records:'43m99'},
      {discipline:'Speerwerpen',naam:'Fallah Ayoub	',datum:'15-05-2016',plaats:'Lier',records:'37m61'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Masters,
    records: new MatTableDataSource([
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Masters,
    records: new MatTableDataSource([
      {discipline:'100m',naam:'Byrne Timothy',datum:'29-04-2006',plaats:'Vilvoorde',records:'12"39'},
      {discipline:'200m',naam:'Byrne Timothy',datum:'29-04-2006',plaats:'Vilvoorde',records:'24"66'},
      {discipline:'300m',naam:'Byrne Timothy',datum:'24-05-2010',plaats:'Lebbeke',records:'38"10'},
      {discipline:'400m',naam:'Byrne Timothy',datum:'06-06-2010',plaats:'Oordegem',records:'52"97'},
      {discipline:'800m',naam:'Byrne Timothy',datum:'26-09-2009',plaats:'Maldegem',records:'2\'03"87'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'Diallo Mohamed',datum:'08-05-2011',plaats:'Laken',records:'4\'24"87'},
      {discipline:'3000m',naam:'Diallo Mohamed',datum:'06-05-2011',plaats:'Vilvoorde',records:'9\'41"62'},
      {discipline:'3000mSteeple',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Marathon',naam:'Hansen Gérald',datum:'29-05-2016',plaats:'Luxemburg',records:'2u55\'34"'},
      {discipline:'400mHorden',naam:'Fumiere Olivier',datum:'13-05-2007',plaats:'Vilvoorde',records:'61"30'},
      {discipline:'4x100m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen	',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Speerwerpen',naam:'',datum:'',plaats:'',records:''},
    ])
  },
];

const indoorRecords: RecordGroup[] = [
  {
    gender: Gender.Meisjes,
    ageCategory: AgeCategory.Benjamins,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Hasani Geraldine',datum:'27-03-2004',plaats:'Gent',records:'10"06'},
      {discipline:'1000m',naam:'Byrne Chinook',datum:'29-12-2007',plaats:'Gent',records:'4\'22"84'},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'Hasani Geraldine',datum:'10-01-2004',plaats:'Woluwe',records:'3m51'},
      {discipline:'Kogelstoten',naam:'Hasani Geraldine',datum:'10-01-2004',plaats:'Woluwe',records:'7m62'},
      {discipline:'Vierkamp',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Jongens,
    ageCategory: AgeCategory.Benjamins,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Davies Denis',datum:'10-01-2004',plaats:'Woluwe',records:'10"20'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Davies Denis',datum:'10-01-2004',plaats:'Woluwe',records:'85cm'},
      {discipline:'Verspringen',naam:'Zerrad Youne',datum:'23-3-2002',plaats:'Gent',records:'2m75'},
      {discipline:'Kogelstoten',naam:'Amezyan Imadedine',datum:'13-12-2008',plaats:'Woluwe',records:'6m25'},
      {discipline:'Vierkamp',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Meisjes,
    ageCategory: AgeCategory.Pupillen,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Byrne Chinook',datum:'26-12-2009',plaats:'Gent',records:'10"16'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'Byrne Chinook',datum:'9-12-2007',plaats:'Gent',records:'2m65'},
      {discipline:'Kogelstoten',naam:'Dari Jamaa',datum:'30-12-2000',plaats:'Gent',records:'2m73'},
      {discipline:'Vierkamp',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Jongens,
    ageCategory: AgeCategory.Pupillen,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Dannou Mohamed',datum:'15-12-2001',plaats:'Woluwe',records:'10"10'},
      {discipline:'1000m',naam:'Yahklef Hamza',datum:'23-02-2002',plaats:'Gent',records:'3\'49"33'},
      {discipline:'60m Horden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Yahklef Hamza',datum:'1-12-2001',plaats:'Woluwe',records:'1m05'},
      {discipline:'Verspringen',naam:'Dahhou Mohamed	',datum:'1-12-2001',plaats:'Woluwe',records:'3m65'},
      {discipline:'Kogelstoten',naam:'Bougdim Amine	',datum:'14-1-2001',plaats:'Gent',records:'5m65'},
      {discipline:'Vierkamp',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Meisjes,
    ageCategory: AgeCategory.Miniemen,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Nana-Owusu Philomena',datum:'17-12-2011',plaats:'Woluwe',records:'8"83'},
      {discipline:'150m',naam:'Ackerman Aurélie',datum:'29-12-2001',plaats:'Gent',records:'22"76'},
      {discipline:'300m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Ackerman Aurélie',datum:'29-12-2001',plaats:'Gent',records:'1m38'},
      {discipline:'Verspringen',naam:'Ackerman Aurélie',datum:'1-12-2001',plaats:'Woluwe',records:'3m91'},
      {discipline:'Kogelstoten',naam:'Zahar Btisam',datum:'1-12-2001',plaats:'Woluwe',records:'9m17'},
    ])
  },
  {
    gender: Gender.Jongens,
    ageCategory: AgeCategory.Miniemen,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Roefmans Lucas',datum:'22-03-2014',plaats:'Gent',records:'8"74'},
      {discipline:'150m',naam:'Mirzoian Artur',datum:'29-12-2001',plaats:'Gent',records:'24"00'},
      {discipline:'300m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1000m',naam:'Aabayla Abdelsamad',datum:'22-3-2003',plaats:'Gent',records:'3\'15"20'},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'Davies Isaac',datum:'20-12-2002',plaats:'Woluwe',records:'1m20'},
      {discipline:'Verspringen',naam:'Roefmans Lucas',datum:'22-03-2014',plaats:'Gent',records:'4m26'},
      {discipline:'Kogelstoten',naam:'Ariozsoy ziya',datum:'23-12-2000',plaats:'Gent',records:'7m03'},
      {discipline:'Vijfkamp',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Kadetten,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Nana-Owusu Pilomena',datum:'02-03-2014',plaats:'Gent',records:'8"32'},
      {discipline:'200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'60mHorden',naam:'Ackerman Aurélie',datum:'23-02-2003',plaats:'Gent',records:'10"61'},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'Ackerman Aurélie',datum:'4-1-2003',plaats:'Gent',records:'4m00'},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Kadetten,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'M\'Rabet Ismael',datum:'27-02-2011',plaats:'Gent',records:'8"15'},
      {discipline:'200m',naam:'Ciccarone Tommaso',datum:'13-03-2004',plaats:'Gent',records:'26"49'},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'Melhaoui Sidi-Mohamed',datum:'27-03-2004',plaats:'Gent',records:'2\'04"30'},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'M\'Rabet Ismael',datum:'08-01-2012',plaats:'Gent',records:'4m87'},
      {discipline:'Kogelstoten',naam:'Fallah Ayoub',datum:'17-12-2011',plaats:'Woluwe',records:'9m53'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Scholieren,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Geldof Mayté',datum:'08-01-2012',plaats:'Gent',records:'8"89'},
      {discipline:'200m',naam:'Geldof Mayté',datum:'08-01-2012',plaats:'Gent',records:'29"56'},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Scholieren,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Kouagnia Rocky',datum:'19-03-2006',plaats:'Gent',records:'7"72'},
      {discipline:'200m',naam:'Kouagnia Rocky',datum:'19-03-2006',plaats:'Gent',records:'25"23'},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1000m',naam:'Temsamani Jawad',datum:'03-03-2001',plaats:'Gent',records:'2\'47"5'},
      {discipline:'1500m',naam:'Temsamani Jawad',datum:'31-03-2001',plaats:'Gent',records:'4\'33"58'},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'Akhmadov Manzul',datum:'27-02-2010',plaats:'Gent',records:'5m04'},
      {discipline:'Kogelstoten',naam:'Jimenez Luis',datum:'20-12-2003',plaats:'Woluwe',records:'10m64'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Juniors,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Barghout Farah',datum:'08-01-2012',plaats:'Gent',records:'9"83'},
      {discipline:'200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Juniors,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Es-sanfaoui Khalid',datum:'22-02-2014',plaats:'Gent',records:'7"66'},
      {discipline:'200m',naam:'Es-sanfaoui Khalid',datum:'05-01-2014',plaats:'Gent',records:'24"22'},
      {discipline:'400m',naam:'Mokkadem Hocine',datum:'5-3-2000',plaats:'Gent',records:'51"57'},
      {discipline:'800m',naam:'Mokkadem Hocine',datum:'23-1-2000',plaats:'Gent',records:'2\'00"57'},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'3000m',naam:'Abid Mourad',datum:'31-03-2001',plaats:'Gent',records:'10\'22"66'},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'Ariozsoy Ziya',datum:'15-01-2006',plaats:'Gent',records:'11m84'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Seniors,
    records: new MatTableDataSource([
      {discipline:'60',naam:'',datum:'',plaats:'',records:''},
      {discipline:'200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'400m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'800m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'1500m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'3000m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Seniors,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Bah Oumar',datum:'26-12-2010',plaats:'Gent',records:'7"22'},
      {discipline:'200m',naam:'Bah Oumar',datum:'26-12-2010',plaats:'Gent',records:'23"25'},
      {discipline:'400m',naam:'Mokkadem Hocine',datum:'18-02-2001',plaats:'Gent',records:'51"05'},
      {discipline:'800m',naam:'Jallouli Tarik',datum:'04-01-2003',plaats:'Gent',records:'1\'55"31'},
      {discipline:'1000m',naam:'Jallouli Tarik',datum:'03-03-2001',plaats:'Gent',records:'2\'35"18'},
      {discipline:'1500m',naam:'Rizki Monder',datum:'22-02-2004',plaats:'Gent',records:'3\'42"83'},
      {discipline:'3000m',naam:'Rizki Monder',datum:'04-02-2006',plaats:'Stuttgart',records:'7\'53"67'},
      {discipline:'60mHorden',naam:'',datum:'',plaats:'',records:''},
      {discipline:'4x200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'El Bakhlaki Youssef',datum:'27-03-2004',plaats:'Gent',records:'6m29'},
      {discipline:'Kogelstoten',naam:'Drieghe Davy',datum:'20-12-2003',plaats:'Woluwe',records:'8m21'},
    ])
  },
  {
    gender: Gender.Dames,
    ageCategory: AgeCategory.Masters,
    records: new MatTableDataSource([
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
      {discipline:'',naam:'',datum:'',plaats:'',records:''},
    ])
  },
  {
    gender: Gender.Heren,
    ageCategory: AgeCategory.Masters,
    records: new MatTableDataSource([
      {discipline:'60m',naam:'Byrne Tim',datum:'19-03-2006',plaats:'Gent',records:'7"87'},
      {discipline:'200m',naam:'Byrne Tim',datum:'19-03-2006',plaats:'Gent',records:'25"02'},
      {discipline:'400m',naam:'Byrne Tim',datum:'27-02-2011',plaats:'Gent',records:'39"12'},
      {discipline:'800m',naam:'Byrne Tim',datum:'26-02-2011',plaats:'Gent',records:'53"55'},
      {discipline:'1000m',naam:'Byrne Tim',datum:'08-03-2008',plaats:'Gent',records:'2\'06"35'},
      {discipline:'60mHorden',naam:'Byrne Tim',datum:'16-03-2008',plaats:'Gent',records:'2\'50"70'},
      {discipline:'4x200m',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Hoogspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Verspringen',naam:'',datum:'',plaats:'',records:''},
      {discipline:'Kogelstoten',naam:'',datum:'',plaats:'',records:''},
    ])
  },
];

@Component({
  selector: 'app-clubrecords',
  templateUrl: './clubrecords.component.html',
  styleUrls: ['./clubrecords.component.css']
})
export class ClubrecordsComponent implements OnInit  {
  outdoorRecords: RecordGroup[];
  indoorRecords: RecordGroup[];

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatPaginator) paginatorIndoor = new QueryList<MatPaginator>();

  displayedColumns: string[] = ['discipline', 'naam','datum', 'plaats','records'];

  panelOpenState = false;

  constructor() {
    this.outdoorRecords = outdoorRecords;
    this.indoorRecords = indoorRecords;
  }

  ngOnInit() { }

  ngAfterViewInit() {
    /* Outdoor*/
    const outdoorLength = this.outdoorRecords.length;
    for (let i = 0; i < outdoorLength; i++) {
      this.outdoorRecords[i].records.paginator = this.paginator.toArray()[i];
    }
    /* Indoor*/
    for (let i = 0; i < this.indoorRecords.length; i++) {
      this.indoorRecords[i].records.paginator = this.paginator.toArray()[i + outdoorLength];
    }
  }
}
