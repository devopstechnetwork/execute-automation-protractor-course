import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';

const routes: Routes = [
  { path: 'course/new', component: CreateCourseComponent },
  { path: 'course', component: CourseListComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: '', redirectTo: 'course', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
