import { Component, Input, OnInit } from '@angular/core';
import {Course} from "../model/course";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { CourseService } from '../services/courses.service';
import { validateBasis } from '@angular/flex-layout';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css']
})
export class CoursesCardListComponent implements OnInit {

  @Input()
  courses: Course[] = [];
  constructor(private coursesService: CourseService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }


editCourse(course : Course) {

  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = course;

  const dialogRef = this.dialog.open(CourseDialogComponent,
      dialogConfig);

  dialogRef.afterClosed().subscribe(
     val => console.log("Dialog output:", val)
  );






}


}
