import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardresultComponent } from './hardresult.component';

describe('HardresultComponent', () => {
  let component: HardresultComponent;
  let fixture: ComponentFixture<HardresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
