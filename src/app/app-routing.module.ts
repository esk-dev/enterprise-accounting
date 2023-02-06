import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
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
    canActivate: [AuthGuard],
  },
  {
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
