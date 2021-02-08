import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-modal-lampara',
  templateUrl: './modal-lampara.page.html',
  styleUrls: ['./modal-lampara.page.scss'],
})
export class ModalLamparaPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  salirSin(){

    this.modalCtrl.dismiss();
  }

  salirCon(){

  }
}

