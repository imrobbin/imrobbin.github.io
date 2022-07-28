import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';

export interface IRepos {
  label: string;
  projects: any[];
}
@Component({
  selector: 'app-my-work-page',
  templateUrl: './my-work-page.component.html',
  styleUrls: ['./my-work-page.component.scss'],
})
export class MyWorkPageComponent implements OnInit, OnDestroy {
  constructor(private httpService: HttpService) {}

  showSpinner = false;
  repos: IRepos[] = [];

  reposSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.getAllRepos();
    // .pipe()
    // .subscribe({
    //   next: async (response) => {
    //     console.log(response);
    //   },
    //   error: async (error) => {
    //     console.log(error);
    //   },
    // });
  }

  private getAllRepos() {
    this.showSpinner = true;
    this.reposSubscription = this.httpService
      .get()
      .pipe(
        map((response) => {
          console.log('response ', response);
          return response;
        }),
        finalize(() => {
          this.showSpinner = false;
          console.log('final response');
        })
      )
      .subscribe({
        next: async (response) => {
          const react = response.filter((res: any, i: number) => {
            if (res.topics.includes('react')) {
              res.image_url = 'https://unsplash.it/800/600?image=5' + i;
              return res;
            }
          });
          const reactNative = response.filter((res: any, i: number) => {
            if (res.topics.includes('react-native')) {
              res.image_url = 'https://unsplash.it/800/600?image=6' + i;
              return res;
            }
          });
          const angular = response.filter((res: any, i: number) => {
            if (res.topics.includes('angular')) {
              res.image_url = 'https://unsplash.it/800/600?image=4' + i;
              return res;
            }
          });
          const ionic = response.filter((res: any, i: number) => {
            if (res.topics.includes('ionic-framework')) {
              res.image_url = 'https://unsplash.it/800/600?image=9' + i;
              return res;
            }
          });

          this.repos.push(
            { label: 'React', projects: react },
            { label: 'React Native', projects: reactNative },
            { label: 'Angular', projects: angular },
            { label: 'Ionic', projects: ionic }
          );

          console.log(this.repos);
        },
        error: async (error) => {
          console.log(error);
        },
      });

    return this.reposSubscription;
  }

  ngOnDestroy(): void {
    this.reposSubscription.unsubscribe();
  }
}
