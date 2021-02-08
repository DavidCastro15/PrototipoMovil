import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.page.html',
  styleUrls: ['./lamparas.page.scss'],
})
export class LamparasPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async eliminarAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¡Alerta!',
      message: '¿Estas seguro que quieres ejecutar esta acción?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Si, estoy seguro',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
