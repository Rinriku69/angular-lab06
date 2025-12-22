import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSec2 } from './dynamic-sec2';

describe('DynamicSec2', () => {
  let component: DynamicSec2;
  let fixture: ComponentFixture<DynamicSec2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicSec2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicSec2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
