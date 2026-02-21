import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Card} from '../../components/card/card';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule, Card, FormsModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

  selectedType: string = 'all';

  animals = [
    {
      id: 1,
      name: "Tobby",
      type: "dog",
      description: "6 months | Playful & Affectionate. Tobby is a joyful puppy who loves attention, cuddles, and discovering the world around him.",
      imageUrl: "https://th-thumbnailer.cdn-si-edu.com/rKuBTK6rHEz5UrN3TY_Z5g81s2M=/1280x1280/filters:focal(308x171:309x172)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/11/33/11331eea-98b3-47fa-b85d-43449d72f33d/istock_74992047_medium_720.jpg",
    },
    {
      id: 2,
      name: "Bilu",
      type: "cat",
      description: "1 year old | Independent & Observant. Elegant and attentive, Bilu enjoys quiet spaces, sunny windowsills, and forming deep bonds with those he trusts.",
      imageUrl: "https://c4.wallpaperflare.com/wallpaper/222/701/307/cat-spotted-home-view-wallpaper-preview.jpg",
    },
    {
      id: 3,
      name: "Luna",
      type: "dog",
      description: "2 years old | Playful & Loving. Full of energy and affection, Luna loves outdoor adventures and cuddles at the end of the day.",
      imageUrl: "https://pamperedpupllc.com/wp-content/uploads/2023/05/crop-0-0-720-720-0-FB_IMG_1682372406518-edited.jpg",
    },
    {
      id: 4,
      name: "Theo",
      type: "dog",
      description: "4 years old | Loyal & Protective. Calm yet attentive, Theo forms deep bonds and will sempre stay by your side. He is the perfect companion for quiet walks.",
      imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20240416/pngtree-mixed-breed-dog-pet-on-street-dog-with-wool-s-image_15658479.jpg",
    },
    {
      id: 5,
      name: "Bella",
      type: "cat",
      description: "4 months | Affectionate & Gentle. Bella has a tender heart and thrives in a loving, peaceful home.",
      imageUrl: "https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 6,
      name: "Rocky",
      type: "cat",
      description: "2 years old | Energetic & Brave. Always ready for action, Rocky is perfect for an active family who loves the outdoors.",
      imageUrl: "https://cdn.mos.cms.futurecdn.net/X5ZUjaNmLfBWvnNiZrcgtH.jpg",
    },
    {
      id: 7,
      name: "Daisy",
      type: "cat",
      description: "5 years old | Calm & Devoted. Wise beyond her years, Daisy enjoys peaceful walks and quiet companionship.",
      imageUrl: "https://images.unsplash.com/photo-1505229772441-7bc7291cb95e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2xkJTIwY2F0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      name: "Milo",
      type: "dog",
      description: "8 months old | Curious & Cheerful. Still discovering the world, Milo brings joy, laughter, and endless affection.",
      imageUrl: "https://media.gazetadopovo.com.br/2024/05/02105412/Shutterstock_2447332303-720x720.jpg",
    }
  ]

  get filteredAnimals() {
    if (this.selectedType === 'all') {
      return this.animals;
    }
    return this.animals.filter(animal => animal.type === this.selectedType);
  }

  setFilter(type: string) {
    this.selectedType = type;
  }
}
