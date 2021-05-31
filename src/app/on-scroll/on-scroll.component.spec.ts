import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnScrollComponent } from './on-scroll.component';

describe('OnScrollComponent', () => {
  let component: OnScrollComponent;
  let fixture: ComponentFixture<OnScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
