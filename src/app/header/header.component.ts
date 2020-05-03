import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  sizes = [
    '300px',
    '400px',
    '500px',
    '600px',
    '700px',
    '800px',
    '1000px',
    '1200px'
  ];
  images = [
    this.sizes.map((size) => `../../assets/img/header-covers/brussel-ekiden-2018.${size}.jpg`),
    this.sizes.map((size) => `../../assets/img/header-covers/groepsfoto-2018.${size}.jpg`),
    this.sizes.map((size) => `../../assets/img/header-covers/memorial-van-damme.${size}.jpg`),
  ];

  constructor() { }

  ngOnInit() { }
}
