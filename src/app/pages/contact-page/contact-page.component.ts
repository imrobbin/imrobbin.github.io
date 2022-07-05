import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  clickContactMe(e: any): void {
    e.preventDefault();
  }
}
