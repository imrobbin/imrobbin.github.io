import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    RouterModule.forChild([{ path: '', component: ContactPageComponent }]),
  ],
})
export class ContactPageModule {}
