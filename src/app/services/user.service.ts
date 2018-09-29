import { Injectable } from '@angular/core';
import { User } from '../components/models/User';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection('users', ref => ref.orderBy('lastName', 'asc'));
  }

  getUsers(): Observable<User[]> {
    // Get users with the id
    this.users = this.userCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const user = action.payload.doc.data() as User;
        user.id = action.payload.doc.id;
        return user;
      });
    });

    return this.users;
  }

  createUser(user: User) {
    this.userCollection.add(user);
  }

  getUser(id: string): Observable<User> {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    this.user = this.userDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as User;
        data.id = action.payload.id;
        return data;
      }
    });

    return this.user;
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);
  }

  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

}
