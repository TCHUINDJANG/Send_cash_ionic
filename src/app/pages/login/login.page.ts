import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  email: string = '';;
  password: string = '';;

  constructor(private router: Router) { }

  ngOnInit() {


  }



  onLogin() {
    // Remplacez cette logique par votre authentification
    if (this.email === 'test@example.com' && this.password === 'password') {
      // Redirection vers la page d'accueil après une connexion réussie
      this.router.navigate(['/home']);
    } else {
      // Afficher un message d'erreur
      alert('Email ou mot de passe incorrect');
    }
  }
}


