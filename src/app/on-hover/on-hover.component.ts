import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-on-hover',
  templateUrl: './on-hover.component.html',
  styleUrls: ['./on-hover.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OnHoverComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: './assets/json/grumpy-cat.json', 
  };
}