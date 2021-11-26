import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  FormsModule,
  ReactiveFormsModule,
  MatTableModule

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports : [material]
})
export class MaterialModule { }
