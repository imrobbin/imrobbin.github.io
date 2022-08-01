import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatSidenavModule } from '@angular/material/sidenav';

import { MessageDetailComponent } from './message-detail/message-detail.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

const materialModules = [
  // MatSidenavModule,
  // MatListModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  FlexLayoutModule,
  MatDividerModule,
];

const sharedComponents = [
  MessageDetailComponent,
  ThemeSwitchComponent,
  SpinnerComponent,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  providers: [],
})
export class SharedModule {}
