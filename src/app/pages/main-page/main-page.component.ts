import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.less'],
})
export class MainPageComponent {
  constructor() {
    window['consoleCheck'] = environment.consoleCheck;
  }
}
