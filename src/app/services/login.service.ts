import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tipos: any;

  constructor(private storage: Storage) { }

  guardarTipo( tipo: any ){
    this.tipos = tipo;
    this.storage.set('tipo', tipo);
  }

  async retornarTipo(){
    const tipo = await this.storage.get('tipo');
    return tipo;
  }

  removerTipo(){
    this.storage.clear();
  }
}
