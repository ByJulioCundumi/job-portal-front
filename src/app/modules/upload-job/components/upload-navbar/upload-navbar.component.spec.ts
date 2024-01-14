import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadNavbarComponent } from './upload-navbar.component';

describe('UploadNavbarComponent', () => {
  let component: UploadNavbarComponent;
  let fixture: ComponentFixture<UploadNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadNavbarComponent]
    });
    fixture = TestBed.createComponent(UploadNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
