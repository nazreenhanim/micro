import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
@Component({
  selector: 'app-on-scroll',
  templateUrl: './on-scroll.component.html',
  styleUrls: ['./on-scroll.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OnScrollComponent implements OnInit {

  constructor(private elementRef:ElementRef) {};

  ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/on-scroll.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnInit(): void {
  }
}
