import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [
    DatePipe
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
class Blog {

  mainPost = {
    title: 'Tales of Resilience: Why Adoption Matters',
    description: 'Every pet at AUdopt-me has a unique journey. Discover how these brave souls overcame the streets to find their forever homes.'
  }

  posts = [
    {
      id: 1,
      title: 'The Magic of the "Caramelo" Dog',
      date: 'February 19, 2026',
      author: 'Thais',
      content: 'Mixed-breed dogs, especially the famous "Caramelos", are known for their extreme loyalty and intelligence. After years on the streets, their gratitude when adopted is immeasurable.'
    },
    {
      id: 1,
      title: 'The Magic of the "Caramelo" Dog',
      date: 'February 19, 2026',
      author: 'Thais',
      content: 'Mixed-breed dogs, especially the famous "Caramelos", are known for their extreme loyalty and intelligence. After years on the streets, their gratitude when adopted is immeasurable.'
    }
  ];


}

export default Blog
