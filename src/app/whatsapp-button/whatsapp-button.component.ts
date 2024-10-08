import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss'],
})
export class WhatsappButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}


  openWhatsApp() {
    const phoneNumber = 'YOUR_PHONE_NUMBER'; // Remplacez par votre numéro WhatsApp
    const message = 'Bonjour, j\'ai besoin d\'aide'; // Message par défaut
    const url = 'https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}';
    
    window.open(url, '_blank'); // Ouvre WhatsApp dans un nouvel onglet
  }

}
