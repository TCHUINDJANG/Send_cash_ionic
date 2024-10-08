import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent  implements OnInit {

  constructor(private router: Router, private menu: MenuController) { }

  ngOnInit() {}


  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
    this.closeMenu();
  }


  closeMenu() {
    this.menu.close();
  }


  logout() {
    // Logique de déconnexion (à implémenter)
    this.router.navigate(['/login']);
    this.closeMenu();
  }

}
