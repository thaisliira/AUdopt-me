import { Component } from '@angular/core';
import {Carrousel} from '../../components/carrousel/carrousel';
import {Cards} from '../../components/cards/cards';
import {Grids} from '../../components/grids/grids';

@Component({
  selector: 'app-home',
  imports: [
    Carrousel,
    Cards,
    Grids
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
