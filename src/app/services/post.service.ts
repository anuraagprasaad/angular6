import { Injectable } from '@angular/core';
import { Post } from '../components/models/Post';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  posts: Observable<Post[]>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {
    this.postCollection = this.afs.collection('posts', ref =>
      ref.orderBy('postDate', 'desc')
    );
  }

  getPosts(): Observable<Post[]> {
    // Get posts with the id
    this.posts = this.postCollection.snapshotChanges().map(changes => {
      return changes.map(action => {
        const post = action.payload.doc.data() as Post;
        post.id = action.payload.doc.id;
        return post;
      });
    });
    return this.posts;
  }

  createPost(post: Post) {
    this.postCollection.add(post);
  }

  getPost(id: string): Observable<Post> {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    this.post = this.postDoc.snapshotChanges().map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Post;
        data.id = action.payload.id;
        return data;
      }
    });

    return this.post;
  }
}
