import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
})
export class InfoUsuarioPage implements OnInit {
  tipo: string;

  user = 'cuidadano';
  constructor(private loginService: LoginService, private router : Router) { }

  ngOnInit(){
    this.obtenerUsuario();
  }

  async obtenerUsuario(){
    this.tipo = this.loginService.tipos;
    if(!this.tipo){
      this.tipo = await this.loginService.retornarTipo();
    }
  }


  remover(){

    this.loginService.removerTipo();
    this.router.navigate(["/login"]);

  }
}
