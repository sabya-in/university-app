import { Component, OnInit } from '@angular/core';
import {Course} from "../model/course";
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private courses : CourseService){}
  bachelorCourses: Course[] = [];

  masterCourses: Course[] = [];

  ngOnInit(): void {
    this.courses.getCourses().subscribe(data => {
      let res = JSON.parse(JSON.stringify(data));;
         const courses = res['courses'];

         this.bachelorCourses = res.filter((course: { category: string; }) => course.category === 'BACHELOR');
         this.masterCourses = res.filter((course: { category: string; }) => course.category === 'MASTER');
    });

  }

}
