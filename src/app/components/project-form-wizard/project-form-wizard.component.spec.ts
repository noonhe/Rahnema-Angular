import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFormWizardComponent } from './project-form-wizard.component';

describe('ProjectFormWizardComponent', () => {
  let component: ProjectFormWizardComponent;
  let fixture: ComponentFixture<ProjectFormWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFormWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFormWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
