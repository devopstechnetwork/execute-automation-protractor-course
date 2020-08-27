import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  name: string;
  releaseDate: string;
  imageUrl: string;
  duration: string;
  level: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Course[] {
    return COURSES;
  }

  getSpecificCourse(id: number): Course {
    return COURSES.find(x => x.id === id);
  }
}

const COURSES: Course[] = [
  {
    id: 1,
    name: 'Selenium Framework development',
    releaseDate: '9/26/2017',
    imageUrl: 'assets/images/selenium.png',
    duration: '3 Hours',
    level: 'Beginners'
  },
  {
    id: 2,
    name: 'Coded UI Framework development',
    releaseDate: '10/30/2016',
    imageUrl: 'assets/images/visualstudio.png',
    duration: '6 Hours',
    level: 'Intermediate'
  },
  {
    id: 3,
    name: 'Docker on Windows',
    releaseDate: '8/26/2017',
    imageUrl: 'assets/images/docker.png',
    duration: '4 Hours',
    level: 'Advanced'
  },
  {
    id: 4,
    name: 'Android Automation',
    releaseDate: '6/26/2017',
    imageUrl: 'assets/images/Appium.png',
    duration: '7 Hours',
    level: 'Beginners'
  }
];
