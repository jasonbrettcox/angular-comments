import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = [
      {comment: 'first comment!', author: "Bobbi B"},
      {comment: 'nice work!', author: "Jimmy J"},
      {comment: 'I would also like to congratulate you!', author: "Mickey M"},
  ];

  author;
  text;
commentToEdit;

newComment={
    author: "",
    comment: "",
  };

  addComment(){
    this.newComment={
      author: this.author,
      comment: this.text,
    };

    this.comments.push(this.newComment)
  

    
    // console.log(this.author)
    // console.log(this.text)
    // console.log(this.newComment)
    // console.log(this.comments)

  }

  deleteComment(i){
    console.log(i)
    this.comments.splice(i, 1);
    // console.log(this.comments)
    
   
  }

makeCommentEditable(comment){
  console.log(comment)
  this.commentToEdit = comment;
  
}

doneEditing(comment){
  // this.comments.push(this.newComment)
  this.commentToEdit = comment;
}


};
