import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/inbox', icon: 'mail' },
    { title: 'Transfert', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Retrait', url: '/folder/favorites', icon: 'heart' },
    { title: 'Produits', url: '/folder/archived', icon: 'archive' },
    { title: 'Parametres', url: '/folder/trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
