import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { RoleGuard } from './role.guard';
const routes: Routes = [
  {
    path: 'login',
    title: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'view',
    title: 'view',
    loadChildren: () => import('./view/view.module').then((m) => m.ViewModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'ROLE_ADMIN',
    },
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
