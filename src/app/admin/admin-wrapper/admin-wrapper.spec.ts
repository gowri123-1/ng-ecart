import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWrapper } from './admin-wrapper';

describe('AdminWrapper', () => {
  let component: AdminWrapper;
  let fixture: ComponentFixture<AdminWrapper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminWrapper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminWrapper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
