import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { MessageDetailComponent } from 'src/app/components/message-detail/message-detail.component';
import { AuthService } from '../auth-page/_services/auth.service';
import {
  MessagesService,
  IMessage,
} from 'src/app/core/services/messages.service';
const RECORDSLENGTH = 3;

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss'],
})
export class MessagesPageComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['name', 'email', 'subject', 'created_at'];
  messagesSource: MatTableDataSource<IMessage> = new MatTableDataSource();
  messagesDataSource: IMessage[] = [];

  messagesLength = 0;
  isLoadingResults = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private messagesService: MessagesService,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.messagesService
            .getMessages()
            .pipe(catchError(() => observableOf(null)));
        }),
        map((messages: IMessage[]) => {
          this.isLoadingResults = false;

          if (messages.length === 0) {
            return [];
          }

          this.messagesLength = messages.length;
          this.messagesDataSource = messages;
          const start = RECORDSLENGTH * this.paginator.pageIndex;
          const end = RECORDSLENGTH * (this.paginator.pageIndex + 1);
          return messages.slice(start, end);
          // return messages;
        })
      )
      .subscribe((messages) => {
        this.messagesSource = new MatTableDataSource(messages);
        this.messagesSource.sort = this.sort;
      });
  }

  doSearching(event: Event) {
    const term = (event.target as HTMLInputElement).value.trim().toLowerCase();

    const searchResults = this.messagesDataSource.filter(
      (msg) =>
        msg.email.toLowerCase().includes(term) ||
        msg.name.toLowerCase().includes(term) ||
        msg.subject.toLowerCase().includes(term) ||
        msg.message.toLowerCase().includes(term) ||
        term === null ||
        term === ''
    );

    this.messagesSource = new MatTableDataSource(
      searchResults.slice(0, RECORDSLENGTH)
    );
  }

  async signOut() {
    await this.authService.signOut();
    await this.router.navigate(['/']);
  }

  openMessageDialog(message: IMessage) {
    const dialogRef = this.dialog.open(MessageDetailComponent, {
      data: message,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog Closed.');
    });
  }
}
