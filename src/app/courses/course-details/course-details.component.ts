import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

import { Course, CourseService } from '../../shared/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  course: Course;

  constructor(
    private courseService: CourseService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routes.params
      .subscribe(params => this.course = this.courseService.getSpecificCourse(+params.id));
  }

}
