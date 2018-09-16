import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule, matFormFieldAnimations } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

const MODULES = [
  FlexLayoutModule, 
  MatToolbarModule, MatInputModule, MatFormFieldModule,
  MatButtonModule, MatIconModule, MatListModule,
  MatSnackBarModule, MatCardModule
]

@NgModule({
  imports: [ ...MODULES ],
  exports: MODULES
})
export class MaterialModule { }
