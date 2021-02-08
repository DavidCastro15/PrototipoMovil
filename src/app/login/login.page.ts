import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  tipo: any;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    
  }

  async tipoUsuario(usuario){
    await this.loginService.guardarTipo(usuario);
    
  }

}
