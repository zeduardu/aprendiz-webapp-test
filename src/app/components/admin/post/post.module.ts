import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PostRoutingModule,
    NgSelectModule
  ]
})
export class PostModule { }
