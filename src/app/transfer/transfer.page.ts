import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

amount: number = 0;
currency: string = "";
recipientName: string = "";
accountNumber: string = "";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  onSubmit() {
    // Logique pour le retrait d'argent
    console.log('Retrait effectué', this.amount, this.currency, this.recipientName, this.accountNumber);
    // Ajoutez ici la logique d'envoi de données vers le backend
  }

}
