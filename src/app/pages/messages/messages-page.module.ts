import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesPageComponent } from './messages-page.component';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [MessagesPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MessagesPageComponent }]),
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class MessagesPageModule {}
