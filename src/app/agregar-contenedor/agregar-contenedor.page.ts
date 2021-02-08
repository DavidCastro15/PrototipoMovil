import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-contenedor',
  templateUrl: './agregar-contenedor.page.html',
  styleUrls: ['./agregar-contenedor.page.scss'],
})
export class AgregarContenedorPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async onClick() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: '¿Está seguro que desea agregar contenedor F?',
      buttons: ['Cancelar','Aceptar']
    });

    await alert.present();
  }

}
