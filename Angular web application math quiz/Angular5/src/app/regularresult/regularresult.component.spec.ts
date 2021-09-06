import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularresultComponent } from './regularresult.component';

describe('RegularresultComponent', () => {
  let component: RegularresultComponent;
  let fixture: ComponentFixture<RegularresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
