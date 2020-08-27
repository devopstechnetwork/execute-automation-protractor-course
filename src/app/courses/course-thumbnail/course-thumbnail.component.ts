import { Component, Input } from '@angular/core';

import { Course } from '../../shared/course.service';

@Component({
  selector: 'app-course-thumbnail',
  templateUrl: './course-thumbnail.component.html',
  styleUrls: ['./course-thumbnail.component.css']
})
export class CourseThumbnailComponent {

  @Input() course: Course;

  someproperty: any = 'Some value';

  printfoo(): void {
    console.log('Calling printfoo');
  }

  setProperties(): string[] {
    if (this.course && this.course.releaseDate === '9/26/2017') {
      return ['bold color'];
    }

    return [];
  }

  // setNgStyle() {
  //     if (this.course && this.course.location.city === "Chennai")
  //         return { color: "yellow", 'font-weight': "bold" }
  //     return {}
  // }

}
