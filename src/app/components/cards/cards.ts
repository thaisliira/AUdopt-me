import { Component } from '@angular/core';
import {CardModel} from '../../models/card.model';
import {Card} from '../card/card';

@Component({
  selector: 'app-cards',
  imports: [
    Card
  ],
  templateUrl: './cards.html',
  styleUrl: './cards.scss',
})
export class Cards {

  cards: CardModel[] = [
    {
      id: 1,
      imageUrl: "https://jcpportraits.com/wp-content/uploads/2024/04/Organic-Social_Instagram_Standard-2_1080x1080.jpg",
      name: "Totó",
      description: "2 years old | Energetic & Playful. Pure energy with a gaze that begs for affection. He loves adventures and is the perfect partner for active families."
    },
    {
      id: 2,
      imageUrl: "https://avatarfiles.alphacoders.com/315/315251.jpg",
      name: "Malu",
      description: "3 months | Bold & Independent. Small in size but giant in heart, Malu has a strong personality and is ready to be the princess of your home."
    },
    {
      id: 3,
      imageUrl: "https://w0.peakpx.com/wallpaper/26/426/HD-wallpaper-cat-black-cat-fluffy-sight-angry.jpg",
      name: "Johnny",
      description: "1 year old | Bold & Independent. Small in size but giant in heart. Johnny has a strong personality and is ready to be the king of your home."
    }
  ]
}
