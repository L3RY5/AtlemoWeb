import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Atlemo';
  constructor(private matIconRegistry: MatIconRegistry,
              private matIconRegistry2: MatIconRegistry,
              private matIconRegistry3: MatIconRegistry,
              private domSanitizer: DomSanitizer,
              private domSanitizer2: DomSanitizer,
              private domSanitizer3: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      `Foto-album`,
    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/photo-library.svg")
    );
    this.matIconRegistry2.addSvgIcon(
      `Instagram`,
      this.domSanitizer2.bypassSecurityTrustResourceUrl("../assets/instLogo.svg")
      
    );
    this.matIconRegistry3.addSvgIcon(
      `Facebook`,
      this.domSanitizer3.bypassSecurityTrustResourceUrl("../assets/fbLogoB.svg")
      
    );
  }
}
