import { Component, OnInit } from '@angular/core';
import * as news from './news.json';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  newsEntries = (news as any).default;

  constructor() { }

  ngOnInit() { }

}
