import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSideNav } from './common-side-nav';

describe('CommonSideNav', () => {
  let component: CommonSideNav;
  let fixture: ComponentFixture<CommonSideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonSideNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonSideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
