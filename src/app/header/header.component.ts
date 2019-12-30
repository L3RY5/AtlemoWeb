import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {
  //images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  //images = [1, 2, 3].map(() => '../../assets/img/header?random&t=${Math.random()}');
  images = ["../../assets/img/header1.jpg","../../assets/img/header1px300.jpg","../../assets/img/header1px400.jpg","../../assets/img/header1px500.jpg","../../assets/img/header1px600.jpg","../../assets/img/header1px700.jpg","../../assets/img/header1px800.jpg","../../assets/img/header1px1000.jpg","../../assets/img/header1px1200.jpg",
  "../../assets/img/header2.jpg","../../assets/img/header2px300.jpg","../../assets/img/header2px400.jpg","../../assets/img/header2px500.jpg","../../assets/img/header2px600.jpg","../../assets/img/header2px700.jpg","../../assets/img/header2px800.jpg","../../assets/img/header2px1000.jpg","../../assets/img/header2px1200.jpg",
  "../../assets/img/headerMemoriaal.jpg","../../assets/img/headerMemoriaalpx300.jpg","../../assets/img/headerMemoriaalpx400.jpg","../../assets/img/headerMemoriaalpx500.jpg","../../assets/img/headerMemoriaalpx600.jpg","../../assets/img/headerMemoriaalpx700.jpg","../../assets/img/headerMemoriaalpx800.jpg","../../assets/img/headerMemoriaalpx900.jpg","../../assets/img/headerMemoriaalpx1000.jpg","../../assets/img/headerMemoriaalpx1500.jpg"]
  
  constructor() { }

  ngOnInit() {
  }

}
