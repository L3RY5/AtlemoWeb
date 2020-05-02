import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  sizes = [
    '',
    'px300',
    'px400',
    'px500',
    'px600',
    'px700',
    'px800',
    'px1000',
    'px1200'
  ];
  images = [
    this.sizes.map((size) => `../../assets/img/header-covers/header1${size}.jpg`),
    this.sizes.map((size) => `../../assets/img/header-covers/header2${size}.jpg`),
    this.sizes.map((size) => `../../assets/img/header-covers/headerMemoriaal${size}.jpg`),
  ];

  constructor() { }

  ngOnInit() { }
}
