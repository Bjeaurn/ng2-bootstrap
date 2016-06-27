import { Component } from '@angular/core';
import {MenuComponent} from './menu/menu.component';
import '../../public/css/styles.css';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [MenuComponent]
})

export class AppComponent {
}