import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
// import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-common-side-nav',
  templateUrl: './common-side-nav.html',
  styleUrls: ['./common-side-nav.scss'],
  imports: [CommonModule,],
})
export class CommonSideNavComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  menus = [
    {
      name: 'HOME',
      SIDE_MENU: ['Home', 'Dashboard', 'Profile', 'Logout'],
    },
    {
      name: 'PRODUCTS',
      SIDE_MENU: ['Products', 'Product Detail', 'Product List'],
    },
    {
      name: 'ADMIN',
      SIDE_MENU: ['Admin Dashboard', 'User Management', 'Settings'],
    },
  ];

  SIDE_MENU_DISPLAY = this.menus[0].SIDE_MENU;

  currentURL = '';

  ngOnInit() {
    console.log('Common Side Nav initialized');
    console.log('Current route:', this.route.snapshot);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Route changed to:', event.urlAfterRedirects);
        this.currentURL = event.urlAfterRedirects;
        this.renderSideMenu();
      });
  }

  renderSideMenu() {
    if (this.currentURL.indexOf('products') > -1) {
      const productsMenu = this.menus.find((item) => item.name === 'PRODUCTS');
      if (productsMenu) {
        this.SIDE_MENU_DISPLAY = productsMenu.SIDE_MENU;
      }
    } else if (this.currentURL.indexOf('admin') > -1) {
      const adminMenu = this.menus.find((item) => item.name === 'ADMIN');
      if (adminMenu) {
        this.SIDE_MENU_DISPLAY = adminMenu.SIDE_MENU;
      }
    } else {
      const homeMenu = this.menus.find((item) => item.name === 'HOME');
      if (homeMenu) {
        this.SIDE_MENU_DISPLAY = homeMenu.SIDE_MENU;
      }
    }
  }
}