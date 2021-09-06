import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardquizComponent } from './hardquiz.component';

describe('HardquizComponent', () => {
  let component: HardquizComponent;
  let fixture: ComponentFixture<HardquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
