import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-on-click',
  templateUrl: './on-click.component.html',
  styleUrls: ['./on-click.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OnClickComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: './assets/json/wobble.json', 
  };
}
