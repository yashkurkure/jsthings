import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerViewComponent } from './controller-view.component';

describe('ControllerViewComponent', () => {
  let component: ControllerViewComponent;
  let fixture: ComponentFixture<ControllerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
