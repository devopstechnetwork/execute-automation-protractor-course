import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  levels = ['Beginner', 'Intermediate', 'Advanced'];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.route.navigate(['/course']);
  }
}
