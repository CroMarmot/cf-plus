import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacySliderModule as MatSliderModule} from '@angular/material/legacy-slider';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyOptionModule as MatOptionModule} from '@angular/material/legacy-core';
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';

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
