import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
