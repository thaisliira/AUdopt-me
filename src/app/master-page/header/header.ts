import { Component } from '@angular/core';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MdbCollapseModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
