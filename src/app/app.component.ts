import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';

  @ViewChild(ChildComponent, {static:false}) child:ChildComponent = new ChildComponent();

  increment() {
    this.child.increment();
  }

  decrement() {
    this.child.decrement();
  }
}
