import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { RoleGuard } from './helpers/role.guard';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  {
    path: 'login',
    title: 'Авторизация',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'view',
    title: 'Просмотр организаций',
    loadChildren: () => import('./view/view.module').then((m) => m.ViewModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    title: 'Редактирование организации',
    loadChildren: () => import('./edit/edit.module').then((m) => m.EditModule),
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: 'ROLE_ADMIN',
    },
  },
  {
    path: 'create',
    title: 'Создание организации',
    loadChildren: () => import('./create/create.module').then((m) => m.CreateModule),
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
