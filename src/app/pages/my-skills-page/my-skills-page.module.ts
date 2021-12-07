import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySkillsPageComponent } from './my-skills-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MySkillsPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MySkillsPageComponent }]),
  ],
})
export class MySkillsPageModule {}
