import { Component, OnInit, Type, Injector } from '@angular/core';
import { CardOneComponent } from '../widgets/card-one/card-one.component';

@Component({
  selector: 'app-demo-one',
  templateUrl: './demo-one.component.html',
  styleUrls: ['./demo-one.component.scss']
})
export class DemoOneComponent implements OnInit {

  dynamicComponent: Type<CardOneComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  async loadComponent(): Promise<any> {
    const imported = await import('./../widgets/card-one/card-one.component');
    this.dynamicComponent = imported.CardOneComponent;
  }

}
