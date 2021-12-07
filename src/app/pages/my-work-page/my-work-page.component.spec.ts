import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkPageComponent } from './my-work-page.component';

describe('MyWorkPageComponent', () => {
  let component: MyWorkPageComponent;
  let fixture: ComponentFixture<MyWorkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyWorkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
