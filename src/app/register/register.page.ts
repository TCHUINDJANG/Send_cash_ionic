import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name: string = '';  // Initialisé
  email: string = '';  // Initialisé
  password: string = '';  // Initialisé

  constructor(private router: Router) { }

  ngOnInit() {
  }



  onRegister() {
    // Remplacez cette logique par votre processus d'inscription
    console.log('Nom:', this.name);
    console.log('Email:', this.email);
    console.log('Mot de passe:', this.password);

    // Redirection vers la page de connexion après une inscription réussie
    this.router.navigate(['/login']);
  }

}
