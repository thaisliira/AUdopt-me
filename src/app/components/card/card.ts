import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() name: string='';
  @Input() description: string='';
  @Input() imageUrl: string='';
  @Input() type: string='';
}
