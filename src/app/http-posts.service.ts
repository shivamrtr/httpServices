import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpPostsService {

  private url = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
  }

  createPosts(post){
    return  this.http.post(this.url, JSON.stringify(post))
  }

  updatePosts(post){
    return this.http.put(this.url + '/' + post.id, JSON.stringify(post));
  }

  deletePosts(id){
    return this.http.delete(this.url + '/' + id)
  }
  


}
