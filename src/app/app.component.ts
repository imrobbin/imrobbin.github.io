import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

export interface Path {
  url: string;
  label: string;
  icon: string;
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

  paths: Path[] = [
    { url: '/', label: 'Home', icon: 'home' },
    { url: 'about', label: 'About', icon: 'person' },
    { url: 'works', label: 'Projects', icon: 'auto_awesome_mosaic' },
    { url: 'contact', label: 'Contact', icon: 'mail' },
    { url: 'messages', label: 'Messages', icon: 'mail' },
  ];

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
