import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { NavComponent } from './nav/nav.component';
import { CourseThumbnailComponent } from './courses/course-thumbnail/course-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    NavComponent,
    CourseThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
