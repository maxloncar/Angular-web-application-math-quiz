import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyresultComponent } from './easyresult.component';

describe('EasyresultComponent', () => {
  let component: EasyresultComponent;
  let fixture: ComponentFixture<EasyresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
