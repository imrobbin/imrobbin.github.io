import { Component, OnInit } from '@angular/core';
import { ColorSchemeService } from 'src/app/core/services/color-scheme.service';

@Component({
  selector: 'app-theme-switch-component',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss'],
})
export class ThemeSwitchComponent implements OnInit {
  isDark = false;

  constructor(private _colorSchemeService: ColorSchemeService) {}

  async ngOnInit(): Promise<void> {
    await this._colorSchemeService.checkDefaultColorScheme();
    this.isDark = this._colorSchemeService.isColorSchemeChecked;
  }

  toggleTheme(): void {
    document.querySelector('.toggle')?.classList.add('animate');

    setTimeout(() => {
      document.querySelector('.toggle')?.classList.toggle('active');
      this.isDark = !this.isDark;
      this._colorSchemeService.toggleColorScheme(this.isDark);
    }, 300);

    setTimeout(
      () => document.querySelector('.toggle')?.classList.remove('animate'),
      600
    );
  }
}
