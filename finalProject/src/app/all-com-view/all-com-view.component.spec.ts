import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllComViewComponent } from './all-com-view.component';

describe('AllComViewComponent', () => {
  let component: AllComViewComponent;
  let fixture: ComponentFixture<AllComViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllComViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllComViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
