import { Component, OnInit, ViewEncapsulation, NgZone } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'lottie-web';
@Component({
  selector: 'app-on-click',
  templateUrl: './on-click.component.html',
  styleUrls: ['./on-click.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OnClickComponent implements OnInit {

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: './assets/json/wobble.json', 
  };

  private animationItem: AnimationItem;

  constructor(private ngZone: NgZone) {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  pause(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.pause();
    });
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => {
      this.animationItem.play();
    });
  }
}
