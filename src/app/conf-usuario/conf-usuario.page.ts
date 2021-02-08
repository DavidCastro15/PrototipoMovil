import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conf-usuario',
  templateUrl: './conf-usuario.page.html',
  styleUrls: ['./conf-usuario.page.scss'],
})
export class ConfUsuarioPage implements OnInit {

  tipo: string;

  user = 'cuidadano';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.obtenerUsuario();
  }

  async obtenerUsuario() {
    this.tipo = this.loginService.tipos;
    if (!this.tipo) {
      this.tipo = await this.loginService.retornarTipo();
    }
  }


  remover() {

    this.loginService.removerTipo();
    this.router.navigate(["/login"]);

  }
}
