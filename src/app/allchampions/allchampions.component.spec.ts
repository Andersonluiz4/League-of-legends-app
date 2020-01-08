import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchampionsComponent } from './allchampions.component';

describe('AllchampionsComponent', () => {
  let component: AllchampionsComponent;
  let fixture: ComponentFixture<AllchampionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllchampionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllchampionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
