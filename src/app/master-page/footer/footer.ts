import { Component } from '@angular/core';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';

@Component({
  selector: 'app-footer',
  imports: [
    MdbFormsModule,
    MdbRippleModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
