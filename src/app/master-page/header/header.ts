import { Component } from '@angular/core';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';

@Component({
  selector: 'app-header',
  imports: [
    MdbCollapseModule,
    RouterLink,
    RouterLinkActive,
    MdbDropdownModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
