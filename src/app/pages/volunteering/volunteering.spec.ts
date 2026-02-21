import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Volunteering } from './volunteering';

describe('Volunteering', () => {
  let component: Volunteering;
  let fixture: ComponentFixture<Volunteering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Volunteering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Volunteering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
