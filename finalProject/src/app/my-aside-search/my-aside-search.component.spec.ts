import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAsideSearchComponent } from './my-aside-search.component';

describe('MyAsideSearchComponent', () => {
  let component: MyAsideSearchComponent;
  let fixture: ComponentFixture<MyAsideSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAsideSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAsideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
