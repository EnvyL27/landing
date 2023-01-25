import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {
  
  public title = "classBinding";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial =true;
  public messageClass = {
    "text-success": !this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }

  ngOnInit(){
      
  }
}
