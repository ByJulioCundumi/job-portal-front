import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUploadedComponent } from './edit-uploaded.component';

describe('EditUploadedComponent', () => {
  let component: EditUploadedComponent;
  let fixture: ComponentFixture<EditUploadedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditUploadedComponent]
    });
    fixture = TestBed.createComponent(EditUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
