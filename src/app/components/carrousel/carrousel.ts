import { Component } from '@angular/core';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-carrousel',
  imports: [
    MdbCarouselModule
  ],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.scss',
})
export class Carrousel {

  slides = [
    {
      id: 1,
      imageUrl: 'https://www.fitzpatrickreferrals.co.uk/app/uploads/2025/06/Stem-cell-therapy-dog-1920x1080-web.jpg',
      title: "My breed is 'Love'. Is that enough for you?",
      description: "I don't have a pedigree, but I have a loyalty that money can't buy."
    },
    {
      id: 2,
      imageUrl: 'https://www.ctvnews.ca/resizer/v2/DU4UASGBSJHLPN5NH5LBJ3G6VY.jpeg?smart=true&auth=07c05ca3a2dbb34b65e3d707455b15eab7c80225f81c825d300418fa5939fb8f&width=1600&height=900',
      title: "They just need a new beginning.",
      description: "The past was hard, but my future depends entirely on your 'yes'."
    },
    {
      id: 3,
      imageUrl: 'https://i.redd.it/mllhmwhorrma1.jpg',
      title: "Am I less important because I don't have a 'breed'?",
      description: "The color of my fur doesn't define the depth of the love I can give you."
    }
  ];
}
