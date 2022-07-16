import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

const materialModules = [
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
];

const sharedComponents = [
  HeaderComponent,
  ThemeSwitchComponent,
  SpinnerComponent,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
  providers: [],
})
export class sharedModule {}
