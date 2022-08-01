import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

export interface IRepos {
  label: string;
  projects: any[];
}

@Injectable({
  providedIn: 'root',
})
export class WorkService {
  constructor(private httpService: HttpService) {}

  public getRepositories(): Observable<any> {
    return this.httpService.get(environment.apiUrl).pipe(
      map((response) => {
        console.log('response ', response);
        const react = response.items.filter((res: any, i: number) => {
          if (res.topics.includes('react')) {
            res.image_url = 'https://unsplash.it/800/600?image=5' + i;
            return res;
          }
        });
        const reactNative = response.items.filter((res: any, i: number) => {
          if (res.topics.includes('react-native')) {
            res.image_url = 'https://unsplash.it/800/600?image=6' + i;
            return res;
          }
        });
        const angular = response.items.filter((res: any, i: number) => {
          if (res.topics.includes('angular')) {
            res.image_url = 'https://unsplash.it/800/600?image=4' + i;
            return res;
          }
        });
        const ionic = response.items.filter((res: any, i: number) => {
          if (res.topics.includes('ionic-framework')) {
            res.image_url = 'https://unsplash.it/800/600?image=9' + i;
            return res;
          }
        });

        const repos: IRepos[] = [];

        repos.push(
          { label: 'React', projects: react },
          { label: 'React Native', projects: reactNative },
          { label: 'Angular', projects: angular },
          { label: 'Ionic', projects: ionic }
        );

        return repos;
      })
    );
  }
}
