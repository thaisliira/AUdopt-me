import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
})
export class Grid {
  @Input() text:string='';
  @Input() imageUrl: string='';
  @Input() inverterOrdem: boolean = true;
}
