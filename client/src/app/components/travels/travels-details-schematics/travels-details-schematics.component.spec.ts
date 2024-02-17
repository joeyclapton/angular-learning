import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TravelsDetailsSchematicsComponent } from './travels-details-schematics.component';

describe('TravelsDetailsSchematicsComponent', () => {
  let component: TravelsDetailsSchematicsComponent;
  let fixture: ComponentFixture<TravelsDetailsSchematicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelsDetailsSchematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
