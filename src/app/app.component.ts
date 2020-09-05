import { Component, Injector } from '@angular/core';
import { Observable, from, of, forkJoin } from 'rxjs';
import { map, switchMap, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Dynamic Components';

}
