import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularquizComponent } from './regularquiz.component';

describe('RegularquizComponent', () => {
  let component: RegularquizComponent;
  let fixture: ComponentFixture<RegularquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
