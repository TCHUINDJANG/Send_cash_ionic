import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {


  user = {
    name: 'David Tankeu',  // Remplacez par les données réelles de l'utilisateur
    email: 'david.tankeu@example.com',
    password: '',
    twoFactorAuth: false,
    notificationsEnabled: true,
    language: 'en'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  saveSettings() {
    // Logique pour sauvegarder les paramètres (à implémenter)
    alert('Paramètres sauvegardés avec succès!');
  }


  logout() {
    // Logique de déconnexion (à implémenter)
    this.router.navigate(['/login']);
  }

}
