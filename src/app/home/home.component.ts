import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {

  }

  parallax(){
    let langit = document.getElementById('langit');
    let pohon = document.getElementById('pohon');
    let card = document.getElementById('card');

  window.addEventListener('scroll', function(){
    // let.value = window.scrollY;
    // langit.style.left = value * 0,25 + 'px';
  })
  }




}
