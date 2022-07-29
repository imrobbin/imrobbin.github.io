import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AuthPageComponent } from './auth-page.component';
import { MessagesPageComponent } from '../messages/messages-page.component';

@NgModule({
  declarations: [AuthPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AuthPageComponent },
      // {
      //   path: 'messages',
      //   loadChildren: () =>
      //     import('src/app/pages/messages/messages-page.module').then(
      //       (m) => m.MessagesPageModule
      //     ),
      // },
    ]),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AuthPageModule {}
