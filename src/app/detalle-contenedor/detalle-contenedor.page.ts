import { Component, OnInit } from '@angular/core';
import {AlertController, ModalController} from '@ionic/angular';
import { LoginService } from '../services/login.service';
import {ModalsPluginWeb} from '@capacitor/core';
import {ModalLamparaPage} from '../modal-lampara/modal-lampara.page';


@Component({
  selector: 'app-detalle-contenedor',
  templateUrl: './detalle-contenedor.page.html',
  styleUrls: ['./detalle-contenedor.page.scss'],
})
export class DetalleContenedorPage implements OnInit {

  tipo: any;

  constructor(public alertController: AlertController,
              private loginService: LoginService,
              private modalCtr:ModalController) { }

  ngOnInit() {
    this.getTipo();
  }

  async onClick() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      message: '¿Está seguro que desea agregar una nueva lámpara?',
      buttons: ['Cancelar','Aceptar']
    });

    await alert.present();
  }

  async getTipo(){
    this.tipo = await this.loginService.retornarTipo();
  }

  async abrirModal(){
    const modal = await this.modalCtr.create({
      component:ModalLamparaPage,
      componentProps:{
        nombre:'David Castro',
        pais:'Mexico'
      }
    });
    await modal.present();
  }

}
