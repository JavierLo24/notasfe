import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterLink,
    NgClass
  ],
  template: `
      <div class="layout-topbar">
    <a class="layout-topbar-logo" routerLink="">
      <img src="assets/layout/images/logo.png" alt="logo">
      <p>INSTENALCO</p>
    </a>

    <button #menubutton class="p-link layout-menu-button layout-topbar-button" (click)="layoutService.onMenuToggle()">
      <i class="pi pi-bars"></i>
    </button>

    <button #topbarmenubutton class="p-link layout-topbar-menu-button layout-topbar-button" (click)="layoutService.showProfileSidebar()">
      <i class="pi pi-ellipsis-v"></i>
    </button>

    <div #topbarmenu class="layout-topbar-menu" [ngClass]="{'layout-topbar-menu-mobile-active': layoutService.state.profileSidebarVisible}">

      <!-- <app-user-profile /> -->

    </div>
  </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopbarComponent {
  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) { }
}
