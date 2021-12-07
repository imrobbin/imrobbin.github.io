import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: HomePageComponent }]),
  ],
})
export class HomePageModule {}
