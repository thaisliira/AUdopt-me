import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {

  animals = [
    {
      id: 1,
      imageUrl: 'https://th-thumbnailer.cdn-si-edu.com/rKuBTK6rHEz5UrN3TY_Z5g81s2M=/1280x1280/filters:focal(308x171:309x172)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/11/33/11331eea-98b3-47fa-b85d-43449d72f33d/istock_74992047_medium_720.jpg',
    },
    {
      id: 2,
      imageUrl: 'https://cdn11.bigcommerce.com/s-t04x4i8lh4/images/stencil/1280w/products/705/24315/nikohobielake-sm-2-1000x1000__82875.1762975662.jpg?c=2',
    },
    {
      id: 3,
      imageUrl: 'https://pamperedpupllc.com/wp-content/uploads/2023/05/crop-0-0-720-720-0-FB_IMG_1682372406518-edited.jpg',
    },
    {
      id: 4,
      imageUrl: 'https://imagedelivery.net/olI9wp0b6luWFB9nPfnqjQ/migrated-b70df3ea-960b-4a0a-a00d-630d9437fb00/w=720',
    },
    {
      id: 5,
      imageUrl: 'https://media.4-paws.org/1/c/b/b/1cbbbb842e8b6a61a94c63fbe3ed950f6b98a507/VIER%20PFOTEN_2017-07-11_023_Speranta-1824x1823-720x720.jpg',
    },
    {
      id: 6,
      imageUrl: 'https://shopcuddl.com/cdn/shop/files/Aurora_Bandana_720x720.jpg?v=1720984765',
    },
    {
      id: 7,
      imageUrl: 'https://media.gazetadopovo.com.br/2021/12/06183330/shutterstock_1688045716-720x720.jpg',
    },
    {
      id: 8,
      imageUrl: 'https://media.gazetadopovo.com.br/2024/05/02105412/Shutterstock_2447332303-720x720.jpg',
    }
  ]
}
