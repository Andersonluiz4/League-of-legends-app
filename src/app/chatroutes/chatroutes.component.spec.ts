import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroutesComponent } from './chatroutes.component';

describe('ChatroutesComponent', () => {
  let component: ChatroutesComponent;
  let fixture: ComponentFixture<ChatroutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
