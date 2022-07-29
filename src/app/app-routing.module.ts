import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('src/app/pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('src/app/pages/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'works',
    loadChildren: () =>
      import('src/app/pages/my-work-page/my-work-page.module').then(
        (m) => m.MyWorkPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('src/app/pages/contact-page/contact-page.module').then(
        (m) => m.ContactPageModule
      ),
  },
  {
    path: 'messages',
    loadChildren: () =>
      import('src/app/pages/messages/messages-page.module').then(
        (m) => m.MessagesPageModule
      ),
    ...canActivate(redirectUnauthorizedToHome),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/pages/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
    ...canActivate(redirectLoggedInToHome),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
