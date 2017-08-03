import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySearchPageComponent } from './my-search-page.component';

describe('MySearchPageComponent', () => {
  let component: MySearchPageComponent;
  let fixture: ComponentFixture<MySearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
