import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './master-page/header/header';
import {Carrousel} from './components/carrousel/carrousel';
import {Cards} from './components/cards/cards';
import {Grids} from './components/grids/grids';
import {Footer} from './master-page/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Carrousel, Cards, Grids, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('adopt-me');
}
