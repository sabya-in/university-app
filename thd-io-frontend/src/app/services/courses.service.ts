import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Course} from "../model/course";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse: Course | undefined;
  readonly baseURL = 'http://localhost:3000/courses';


  constructor(private http: HttpClient) {

   }

  getCourses(){
    return this.http.get("http://localhost:3000/courses/getCourses");
  }

  putEmployee(course: Course) {
    console.log('inside put method course is ', +course)
    return this.http.patch(this.baseURL + `/${course.id}`, course);
  }


}
