import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trial3 } from './trial-3';

describe('Trial3', () => {
  let component: Trial3;
  let fixture: ComponentFixture<Trial3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trial3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trial3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
