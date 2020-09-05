import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-demo-two',
  templateUrl: './demo-two.component.html',
  styleUrls: ['./demo-two.component.scss']
})
export class DemoTwoComponent implements OnInit {

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async loadComponent(): Promise<any> {
    const { CardTwoComponent } = await import(`./../widgets/card-two/card-two.component`);
    const factory = this.resolver.resolveComponentFactory(CardTwoComponent);
    const compRef = this.vcr.createComponent(factory);
    compRef.instance.title = 'with ComponentFactoryResolver';
    compRef.instance.cardLiked.subscribe(() => {
      this.snackbar.open('Card was liked!', 'CLOSE');
    });

    // Always unsubscribe
  }

}
