import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public title="styleBinding";
  public hasError = false;
  public isSpecial = true;
  public highlighted = "purple";

  public titleStyle = {
    color: "blue",
    fontstyle: "italic",
    fontweight: "bold"
  }

  ngOnInit(){
      
  }
}
