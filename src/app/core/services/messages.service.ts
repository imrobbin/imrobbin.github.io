import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IMessage {
  id?: String;
  name: String;
  email: String;
  subject: String;
  message: String;
  created_at: Date;
}

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messagesCollection: AngularFirestoreCollection<IMessage>;
  // messages: Observable<IMessage[]> | undefined;

  constructor(private readonly firestore: AngularFirestore) {
    this.messagesCollection = this.firestore.collection<IMessage>('messages');
  }

  public getMessages(
    sort: string,
    order: SortDirection,
    page: number
  ): Observable<any> {
    return this.messagesCollection
      .valueChanges()
      .pipe(map((messages) => messages));
  }

  // public addMessage = (messageData: IMessage) => {
  //   console.log(messageData);
  //   const docId = this.firestore.createId();
  //   const message: IMessage = { id: docId, ...messageData };
  //   this.messagesCollection.doc(docId).set(message);
  // };

  public addMessage = (messageData: IMessage): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      const docId = this.firestore.createId();
      const createdAt = new Date();
      const data: IMessage = {
        id: docId,
        ...messageData,
        created_at: createdAt,
      };

      try {
        await this.messagesCollection.doc(docId).set(data);
        console.log('Contact form data ', data);
        return resolve({
          message:
            'Your message has been successfully sent. We will contact you very soon!',
        });
      } catch (error) {
        console.log(error);
        return reject(error);
      }
    });
  };
}
