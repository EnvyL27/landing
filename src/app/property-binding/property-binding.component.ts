import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  public title = "property binding";
  public myId = "testId";
  public isDisabled = false;
  

  onClick(){
    this.isDisabled = true;
  }

  ngOnInit(){
      
  }
}
