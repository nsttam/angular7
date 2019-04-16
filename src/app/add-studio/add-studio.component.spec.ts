import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudioComponent } from './add-studio.component';

describe('AddStudioComponent', () => {
  let component: AddStudioComponent;
  let fixture: ComponentFixture<AddStudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
