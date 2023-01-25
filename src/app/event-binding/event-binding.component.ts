import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  public title= "Event Binding";
  public clicked ="";

  onClick(event: any){
    console.log(event);
      this.clicked = event.type;
  }  
}
