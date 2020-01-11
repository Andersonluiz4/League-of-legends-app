import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWeekComponent } from './freeweek.component';

describe('FunctionsComponent', () => {
  let component: FreeWeekComponent;
  let fixture: ComponentFixture<FreeWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
