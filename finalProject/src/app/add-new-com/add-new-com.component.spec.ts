import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewComComponent } from './add-new-com.component';

describe('AddNewComComponent', () => {
  let component: AddNewComComponent;
  let fixture: ComponentFixture<AddNewComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
