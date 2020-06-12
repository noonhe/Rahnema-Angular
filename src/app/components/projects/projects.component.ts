import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/services/project-service/project-service.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService : ProjectServiceService
  ) { }

  ngOnInit() {
    this.projectsService.getProjects().subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
