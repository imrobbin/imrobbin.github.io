import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkPageComponent } from './my-work-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyWorkPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MyWorkPageComponent }]),
  ],
})
export class MyWorkPageModule {}
