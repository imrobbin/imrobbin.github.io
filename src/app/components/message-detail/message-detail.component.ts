import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMessage } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss'],
})
export class MessageDetailComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public messageData: IMessage) {}
}
