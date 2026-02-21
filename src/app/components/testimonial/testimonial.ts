import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [],
  templateUrl: './testimonial.html',
  styleUrl: './testimonial.scss',
})
export class Testimonial {
  @Input() adopter: string='';
  @Input() message: string='';
  @Input() imageUrl: string='';
  @Input() petAdopted: string='';
}
