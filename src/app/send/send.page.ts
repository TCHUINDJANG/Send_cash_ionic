import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-send',
  templateUrl: './send.page.html',
  styleUrls: ['./send.page.scss'],
})
export class SendPage implements OnInit {

amount: number = 0;
currency: string = "";
recipientName: string = "";
accountNumber: string = "";

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }


  onSubmit() {
    // Logique pour l'envoi d'argent
    console.log('Envoi effectué', this.amount, this.currency, this.recipientName, this.accountNumber);
    // Ajoutez ici la logique d'envoi de données vers le backend
  }

}
