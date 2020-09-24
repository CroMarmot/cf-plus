import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';

const mm = [
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatIconModule,
  MatToolbarModule,
  MatOptionModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatPaginatorModule,
  MatCardModule,
  MatTableModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mm
  ],
  exports: [
    ...mm
  ]
})
export class AppMaterialModule {
}
