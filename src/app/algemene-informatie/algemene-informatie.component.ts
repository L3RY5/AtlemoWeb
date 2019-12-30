import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algemene-informatie',
  templateUrl: './algemene-informatie.component.html',
  styleUrls: ['./algemene-informatie.component.css']
})
export class AlgemeneInformatieComponent implements OnInit {
isCollapsed : boolean=true;
isCollapsed1 : boolean=true;
isCollapsed2 : boolean=true;
  constructor() { }

  meerMinderToggle(){this.isCollapsed = !this.isCollapsed;}
  meerMinderToggle1(){this.isCollapsed1 = !this.isCollapsed1;}
  meerMinderToggle2(){this.isCollapsed2 = !this.isCollapsed2;}
  ngOnInit() {
  }

}
