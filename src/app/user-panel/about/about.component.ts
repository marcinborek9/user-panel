import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

import { Post } from './post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent {

  public textareaLength = 300;
  public inputLength = 60;
  public showPost = false;
  public newPost = new Post('', '');
  postArray = [];

  addPost() {
    const postObj = {header: this.newPost.header, content: this.newPost.content};
    this.postArray.push(postObj);
    this.showPost = true;
  }

  deletePost(post: string) {
    const index: number = this.postArray.indexOf(post);
    if (index !== -1) {
    this.postArray.splice(index, 1);
    }

    if (this.postArray.length === 0) {
      this.showPost = false;
    }
  }
}
