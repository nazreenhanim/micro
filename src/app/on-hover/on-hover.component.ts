import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
@Component({
  selector: 'app-on-hover',
  templateUrl: './on-hover.component.html',
  styleUrls: ['./on-hover.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OnHoverComponent implements OnInit {

  constructor(private elementRef:ElementRef) {};

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/on-hover.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnInit(): void {
  }
}
