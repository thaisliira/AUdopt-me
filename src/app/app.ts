import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './master-page/header/header';
import {Carrousel} from './components/carrousel/carrousel';
import {Cards} from './components/cards/cards';
import {Grids} from './components/grids/grids';
import {Footer} from './master-page/footer/footer';
import {WorksFlow} from './components/works-flow/works-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('adopt-me');
}
