import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnHoverComponent } from './on-hover.component';

describe('OnHoverComponent', () => {
  let component: OnHoverComponent;
  let fixture: ComponentFixture<OnHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnHoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
