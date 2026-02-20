import { Component } from '@angular/core';
import {Grid} from '../grid/grid';

@Component({
  selector: 'app-grids',
  imports: [
    Grid
  ],
  templateUrl: './grids.html',
  styleUrl: './grids.scss',
})
export class Grids {

  content = [
    {
      id: 1,
      imageUrl: 'https://4kwallpapers.com/images/wallpapers/cute-cat-cozy-warm-2560x1080-13251.jpg',
      text: "From a cold alley to a warm blanket. Oliver was found shivering and alone; today, his purrs are the soundtrack of a loving home. He didn't just find a house; he found a family that understands that love has no breed, only soul.",
    },
    {
      id: 2,
      imageUrl: 'https://wallpaperswide.com/download/adorable_happy_dog-wallpaper-2560x1080.jpg',
      text: "Max used to wait behind bars, watching people pass by. Now, his only job is to greet his humans with a wagging tail and unconditional joy. Adopting Max didn't just save his life—it filled his owners' lives with a purpose they never knew they were missing.",
    }
  ]
}
