import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

import { HeaderComponent } from './header/header.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

const MaterialModules = [
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
];

@NgModule({
  imports: [CommonModule, ...MaterialModules],
  declarations: [HeaderComponent, ThemeSwitchComponent],
  exports: [HeaderComponent, ThemeSwitchComponent],
  providers: [],
})
export class sharedModule {}
