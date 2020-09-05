import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent implements OnInit {

  @Input() title = '';

  @Output() cardLiked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [MatCardModule, MatButtonModule],
  declarations: [CardTwoComponent]
})
class CardTwoModule {
}



