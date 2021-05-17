import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { AuthenticationguardService } from './services/authenticationguard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin/panel',
    loadChildren: () =>
      import('./components/admin/panel/panel.module').then(
        (m) => m.PanelModule
      ),
    canActivate: [AuthenticationguardService],
  },
  {
    path: 'admin/categoria',
    loadChildren: () =>
      import('./components/admin/categoria/categoria.module').then(
        (m) => m.CategoriaModule
      ),
    canActivate: [AuthenticationguardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
