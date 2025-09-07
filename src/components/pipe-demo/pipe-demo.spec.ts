import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDemo } from './pipe-demo';

describe('PipeDemo', () => {
  let component: PipeDemo;
  let fixture: ComponentFixture<PipeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PipeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
