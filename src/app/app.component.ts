import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { ColorSchemeService } from './core/services/color-scheme.service';

export interface Path {
  path: string;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private _mobileQueryListener: () => void;
  title = 'Ravindra Patle';
  mobileQuery: MediaQueryList;
  isDark = false;

  paths: Path[] = [
    // { path: 'about', label: 'About' },
    // { path: 'my-skills', label: 'My Skills' },
    { path: 'works', label: 'Projects' },
    { path: 'contact', label: 'Contact' },
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private _colorSchemeService: ColorSchemeService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
