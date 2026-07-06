import {
  BreakpointObserver,
  LayoutModule,
} from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { Footer } from '../footer/footer';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterOutlet,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    Sidebar,
    Footer
  ],
  templateUrl: './shell.html',
  styleUrl: './shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Shell {

  private readonly breakpointObserver = inject(BreakpointObserver);

  readonly mobile = signal(false);

  readonly drawerOpened = signal(false);

  readonly sidebarCollapsed = signal(false);

  constructor() {

    this.breakpointObserver
      .observe('(max-width:768px)')
      .subscribe(result => {

        this.mobile.set(result.matches);

        if (result.matches) {

          this.drawerOpened.set(false);

        }

      });

  }

  toggleDesktopSidebar() {

    this.sidebarCollapsed.update(v => !v);

  }

  openDrawer() {

    this.drawerOpened.set(true);

  }

  closeDrawer() {

    this.drawerOpened.set(false);

  }

}