import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksFlow } from './works-flow';

describe('WorksFlow', () => {
  let component: WorksFlow;
  let fixture: ComponentFixture<WorksFlow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksFlow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksFlow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
