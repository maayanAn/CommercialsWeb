import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComViewComponent } from './single-com-view.component';

describe('SingleComViewComponent', () => {
  let component: SingleComViewComponent;
  let fixture: ComponentFixture<SingleComViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleComViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
