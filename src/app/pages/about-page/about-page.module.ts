import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutPageComponent }]),
  ],
})
export class AboutPageModule {}
