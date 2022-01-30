import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../model/course';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  description:string | undefined;
  form: FormGroup;

  constructor(private coursesService: CourseService,private fb: FormBuilder,
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) course:Course ) {
          this.description = course.description;

          this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            longDescription: [course.longDescription,Validators.required]
        });

        }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close(this.form.value);
    this.coursesService.putEmployee(this.form.value);
}

close() {
    this.dialogRef.close();
}

}
