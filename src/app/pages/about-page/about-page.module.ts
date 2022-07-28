import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: AboutPageComponent }]),
  ],
})
export class AboutPageModule {}
