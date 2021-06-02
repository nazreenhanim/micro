import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value">{{ value }}</button>
    <button style="background:var(--blue);" nbButton hero *ngIf="value == 'X'">{{ value }}</button>
    <button style="background:tomato;" nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button{border:2px solid #fff; border-radius: 7px; width:100%; height:100%; font-size:4em !important; font-family:Raleway; background:#e5e5e5; color:white;}']
})
export class SquareComponent  {

  @Input() value: 'X' | 'O';

}
