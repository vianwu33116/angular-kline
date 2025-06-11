import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrilldownComponent } from './drilldown.component';

describe('DrilldownComponent', () => {
  let component: DrilldownComponent;
  let fixture: ComponentFixture<DrilldownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DrilldownComponent]
    });
    fixture = TestBed.createComponent(DrilldownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
