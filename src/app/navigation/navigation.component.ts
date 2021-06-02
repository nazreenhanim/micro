import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavigationComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: './assets/json/floral.json', 
  };
}
