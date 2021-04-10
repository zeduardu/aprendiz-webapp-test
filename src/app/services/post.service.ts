import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceFirebase } from '../core/servicefirebase.service';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends ServiceFirebase<Post> {

  constructor(firebase: AngularFirestore) {
    super(Post, firebase, 'posts');
  }
}
