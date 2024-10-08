import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

amount: number = 0;
currency: string = "";
recipientName: string = "";
accountNumber: string = "";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

    
  }

  onSubmit() {
    // Logique pour le dépôt d'argent
    console.log('Dépôt effectué', this.amount, this.currency, this.recipientName, this.accountNumber);
    // Ajoutez ici la logique d'envoi de données vers le backend
  }

}
