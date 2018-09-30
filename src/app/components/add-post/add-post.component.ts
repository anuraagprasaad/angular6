import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = {
    name: '',
    email: '',
    title: '',
    post: '',
    postDate: new Date().getTime()
  };

  @ViewChild('postForm')
  form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private userService: PostService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: Post; valid: boolean }) {
    if (!valid) {
      // Show error
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
    } else {
      // Add new Post
      value.postDate = new Date().getTime();
      this.userService.createPost(value);
      // Show message
      this.flashMessage.show('Post added', {
        cssClass: 'alert-success',
        timeout: 4000
      });
      // Redirect to dash
      this.router.navigate(['/']);
    }
  }
}
