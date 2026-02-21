import { Component } from '@angular/core';
import {Carrousel} from '../../components/carrousel/carrousel';
import {Cards} from '../../components/cards/cards';
import {Grids} from '../../components/grids/grids';
import {WorksFlow} from '../../components/works-flow/works-flow';
import {Testimonials} from '../../components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [
    Carrousel,
    Cards,
    Grids,
    WorksFlow,
    Testimonials
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
