import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { getItem, setItem, StorageConst } from 'src/app/core/utils';

export interface ICheckedColorScheme {
  isAddedByUser: boolean;
  prefersColorScheme: string;
  prefersColorSchemeValue: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  isColorSchemeChecked: boolean = false;
  constructor(private overlayContainer: OverlayContainer) {}

  /**
   * checkDefaultColorScheme
   */
  public async checkDefaultColorScheme() {
    const checkedColorScheme: ICheckedColorScheme = getItem(
      StorageConst.IMROBBIN_COLOR_SCHEME
    );

    const defaultScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (checkedColorScheme === null) {
      // default value depends on the system color-scheme-mode
      // patch the preferred value to toggle theme button
      this.isColorSchemeChecked = defaultScheme.matches;
    } else {
      // changed value .. by user on toggle change
      this.isColorSchemeChecked = checkedColorScheme.prefersColorSchemeValue;
    }

    // change the theme according to the preferred value
    this.changeColorScheme(this.isColorSchemeChecked);
  }

  // toggle button click event -- added in sidebar
  public toggleColorScheme(colorScheme: boolean) {
    this.changeColorScheme(colorScheme);
    const checkedColorScheme: ICheckedColorScheme = {
      isAddedByUser: true, // only when set by user
      prefersColorScheme: colorScheme ? 'dark' : 'light',
      prefersColorSchemeValue: colorScheme, // true for dark, false for light
    };
    setItem(StorageConst.IMROBBIN_COLOR_SCHEME, checkedColorScheme);
  }

  // add or remove the dark-theme class in body tag
  private changeColorScheme(colorScheme: boolean) {
    // in whole app
    document.body.classList.toggle('dark-theme', colorScheme);

    // in angular material components like: overlay
    this.overlayContainer
      .getContainerElement()
      .classList.toggle('dark-theme', colorScheme);
  }
}
