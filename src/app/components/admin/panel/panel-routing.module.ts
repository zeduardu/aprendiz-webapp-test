import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationguardService } from 'src/app/services/authenticationguard.service';

const routes: Routes = [
  {
    path: 'admin/panel',
    loadChildren: () =>
      import('../panel/panel.module').then((m) => m.PanelModule),
    canActivate: [AuthenticationguardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
