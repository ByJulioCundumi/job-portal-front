import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCardComponent } from './upload-card.component';

describe('UploadCardComponent', () => {
  let component: UploadCardComponent;
  let fixture: ComponentFixture<UploadCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UploadCardComponent]
    });
    fixture = TestBed.createComponent(UploadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
