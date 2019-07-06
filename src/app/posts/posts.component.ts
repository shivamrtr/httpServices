import { Component, OnInit } from '@angular/core';
import { HttpPostsService } from 'src/app/http-posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];

  constructor(private service: HttpPostsService) { }

  ngOnInit() { 
    this.service.getPosts().subscribe(response =>{
      this.posts = response;
      });
  }
  
  createPost(input:HTMLInputElement){
    let post: any = {title: input.value};
    input.value = '';    //to clear the input field after each post creation

   this.service.createPosts(post)
        .subscribe(response => {
          post.id = response;
          this.posts.splice(0, 0, post);
        });
  }

  updatePost(post){
    this.service.updatePosts(post).subscribe(response=> {
      console.log(response);
      
    });
  }

  deletePost(post){
    this.service.deletePosts(post.id).subscribe(response =>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

}
