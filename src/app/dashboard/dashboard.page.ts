import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {


  transactions = [
    { title: 'Transfert reçu', date: '12 Oct 2024', amount: 100.00 },
    { title: 'Transfert envoyé', date: '10 Oct 2024', amount: 50.00 },
    { title: 'Transfert reçu', date: '5 Oct 2024', amount: 200.00 },
  ];

  constructor(private router: Router , private navCtrl: NavController) { }

  ngOnInit() {
  }

  user = {
    name: 'Alex',  // Remplacez cela par le nom de l'utilisateur
    photoUrl: 'https://via.placeholder.com/50'  // Remplacez par l'URL de la photo de profil
  };


  initiateTransfer() {
    this.router.navigate(['/transfer']); // Redirigez vers la page de transfert
  }

  logout() {
    // Logique de déconnexion (à implémenter)
    this.router.navigate(['/login']);
  }


  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  goToDepot() {
    this.navCtrl.navigateForward('/deposit');
  }

  goToSend() {
    this.navCtrl.navigateForward('/send');
  }


  goToTransfert() {
    this.navCtrl.navigateForward('/transfer');
  }

}
