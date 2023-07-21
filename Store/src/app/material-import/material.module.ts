import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
})
export class MaterialModule {}
