import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent {

  public title1 = "ngIf";
  public title3 = "ngFor";

  userObservable = new Subject<{first: string}>();
  first = ['1', '2', '3', '4'];
  firstIndex = 0;

  nextUser() {
    let first = this.first[this.firstIndex++];
    if (this.firstIndex >= this.first.length) this.firstIndex = 0;
    this.userObservable.next({first});
  }

  array = [{
    car : 'Honda', color : 'merah'
  },
  {
    car : 'Toyota', color : 'hijau'
  },
  {
    car : 'Mitsubishi', color : 'kuning'
  }
];

}
