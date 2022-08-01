import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from './pages/auth-page/_services/auth.service';

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
  ];

  isLoggedInSub: Subscription = new Subscription();

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher,
    private authService: AuthService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.isLoggedInSub.add(
      this.authService.isLoggedIn$.subscribe({
        next: (authState) => {
          console.log(authState);
          if (authState === true && this.paths.length === 4) {
            this.paths.push({
              url: 'messages',
              label: 'Messages',
              icon: 'chat',
            });
          } else if (authState === false && this.paths.length === 5) {
            this.paths.pop();
          }
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          console.log('authState Sub complete');
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.isLoggedInSub.unsubscribe();
  }
}
