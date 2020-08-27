import { Component, OnInit } from '@angular/core';

import { CourseService, Course } from '../../shared/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[];

  constructor(
    private courseService: CourseService,
    // private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  showToastrMessage(message: string): void {
    console.log(message);
    // this.toastr.Success(message);
  }
}
