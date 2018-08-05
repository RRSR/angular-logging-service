import {Component} from '@angular/core';
import {DataService} from './data.service';
import {LogService} from './log.service';

@Component({
  selector: 'app-root',
  template: '' +
    '<app-comp-a></app-comp-a>' +
    '<app-comp-b></app-comp-b>',
  providers: [DataService, LogService]
})
export class AppComponent {
}
