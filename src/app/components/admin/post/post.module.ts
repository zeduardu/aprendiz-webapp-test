import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostComponent } from './post.component';
import { SharedModule } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    PostRoutingModule,
    CommonModule,
    SharedModule,
    DialogModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
