import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkPageComponent } from './my-work-page.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MyWorkPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MyWorkPageComponent }]),
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
  ],
})
export class MyWorkPageModule {}
