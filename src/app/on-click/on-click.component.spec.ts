import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnClickComponent } from './on-click.component';

describe('OnClickComponent', () => {
  let component: OnClickComponent;
  let fixture: ComponentFixture<OnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
