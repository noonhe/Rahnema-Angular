import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgProjectsGridComponent } from './ag-projects-grid.component';

describe('AgProjectsGridComponent', () => {
  let component: AgProjectsGridComponent;
  let fixture: ComponentFixture<AgProjectsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgProjectsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgProjectsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
