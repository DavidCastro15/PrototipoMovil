import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'detalle-contenedor',
    loadChildren: () => import('./detalle-contenedor/detalle-contenedor.module').then( m => m.DetalleContenedorPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'agregar-contenedor',
    loadChildren: () => import('./agregar-contenedor/agregar-contenedor.module').then( m => m.AgregarContenedorPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'info-usuario',
    loadChildren: () => import('./info-usuario/info-usuario.module').then( m => m.InfoUsuarioPageModule)
  },
  {
    path: 'conf-usuario',
    loadChildren: () => import('./conf-usuario/conf-usuario.module').then( m => m.ConfUsuarioPageModule)
  },
  {
    path: 'agregar-lampara',
    loadChildren: () => import('./agregar-lampara/agregar-lampara.module').then( m => m.AgregarLamparaPageModule)
  },
  {
    path: 'modal-lampara',
    loadChildren: () => import('./modal-lampara/modal-lampara.module').then( m => m.ModalLamparaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
