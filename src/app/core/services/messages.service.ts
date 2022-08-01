import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IMessage {
  id?: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: any;
}

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messagesCollection: AngularFirestoreCollection<IMessage>;
  messagesDataSource$: Observable<IMessage[]> | undefined;

  constructor(private readonly firestore: AngularFirestore) {
    this.messagesCollection = this.firestore.collection<IMessage>('messages');
  }

  public getMessages(): Observable<any> {
    if (this.messagesDataSource$ === undefined) {
      console.log('fresh data');
      this.messagesDataSource$ = this.messagesCollection
        .valueChanges()
        .pipe(map((messages) => messages));
      return this.messagesDataSource$;
    }
    console.log('cached data');
    return this.messagesDataSource$;
  }

  public addMessage = (messageData: IMessage): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      const docId = this.firestore.createId();
      const data: IMessage = {
        id: docId,
        ...messageData,
        created_at: new Date(),
      };

      try {
        await this.messagesCollection.doc(docId).set(data);
        return resolve({
          message:
            'Your message has been successfully sent. We will contact you very soon!',
        });
      } catch (error) {
        return reject(error);
      }
    });
  };
}
