import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
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
