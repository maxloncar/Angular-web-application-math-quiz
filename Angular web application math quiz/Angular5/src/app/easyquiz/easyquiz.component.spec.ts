import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyquizComponent } from './easyquiz.component';

describe('EasyquizComponent', () => {
  let component: EasyquizComponent;
  let fixture: ComponentFixture<EasyquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
