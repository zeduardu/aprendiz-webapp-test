import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationguardService } from 'src/app/services/authenticationguard.service';

const routes: Routes = [
  { path: 'admin/painel', loadChildren: () => import('../painel/painel.module').then(m => m.PainelModule), canActivate: [AuthenticationguardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PainelRoutingModule { }
