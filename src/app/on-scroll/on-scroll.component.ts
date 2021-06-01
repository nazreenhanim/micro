import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-on-scroll',
  templateUrl: './on-scroll.component.html',
  styleUrls: ['./on-scroll.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OnScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: './assets/json/rocket.json', 
  };
}
