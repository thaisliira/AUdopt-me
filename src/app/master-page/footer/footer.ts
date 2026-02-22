import { Component } from '@angular/core';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    MdbFormsModule,
    MdbRippleModule,
    RouterLink
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
