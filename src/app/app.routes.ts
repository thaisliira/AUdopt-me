import { Routes } from '@angular/router';
import {Home} from './homepage/home/home';
import {Gallery} from './pages/gallery/gallery';
import Blog from './pages/blog/blog';
import {Contact} from './pages/contact/contact';

export const routes: Routes = [

  {
    path: '',
    component:Home,
  },
  {
    path: 'gallery',
    component:Gallery,
  },
  {
    path: 'blog',
    component:Blog,
  },
  {
    path: 'contact',
    component:Contact,
  },
];
