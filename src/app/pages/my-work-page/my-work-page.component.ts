import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { WorkService, IRepos } from './_services/work.service';

@Component({
  selector: 'app-my-work-page',
  templateUrl: './my-work-page.component.html',
  styleUrls: ['./my-work-page.component.scss'],
})
export class MyWorkPageComponent implements OnInit, OnDestroy {
  showSpinner = false;
  repos: IRepos[] = [];
  reposSubscription: Subscription = new Subscription();

  constructor(private workService: WorkService) {}

  ngOnInit(): void {
    this.fetchRepos();
  }

  private fetchRepos() {
    this.showSpinner = true;
    this.reposSubscription = this.workService
      .getRepositories()
      .pipe(finalize(() => (this.showSpinner = false)))
      .subscribe({
        next: async (response) => {
          this.repos = response;
          console.log('final response ', this.repos);
        },
        error: async (error) => {
          console.log(error);
        },
      });
  }

  ngOnDestroy(): void {
    this.reposSubscription.unsubscribe();
  }
}
