import { NgModule } from '@angular/core';
import {MatButtonModule}from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule}from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';



const MaterialComponents=[
  MatButtonModule,
  MatIconModule,
  HttpClientModule,
  MatToolbarModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatTableModule,
  MatExpansionModule,
  MatInputModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSelectModule,
  MatListModule,
  MatStepperModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule

]
@NgModule({

  /* imports: [MatButtonModule,MatIconModule,HttpClientModule],
  exports:[MatButtonModule,MatIconModule,HttpClientModule] */
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule {

 }
