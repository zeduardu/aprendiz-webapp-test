import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutorRoutingModule } from './autor-routing.module';
import { AutorComponent } from './autor.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AutorComponent
  ],
  imports: [
    CommonModule,
    AutorRoutingModule,
    NgSelectModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class AutorModule { }
