import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProjectsData } from './services/projects.data';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { AgProjectsGridComponent } from './components/ag-projects-grid/ag-projects-grid.component';
import { ProjectFormWizardComponent } from './components/project-form-wizard/project-form-wizard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AgProjectsGridComponent,
    ProjectFormWizardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(ProjectsData),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
