import { LoginGuard } from './modules/authenticate/login.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticateGuard } from './modules/authenticate/authenticate.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((module) => module.HomeModule),
    canLoad: [LoginGuard],
  },

  {
    path: 'animals',
    loadChildren: () =>
      import('./modules/animals/animals.module').then(
        (module) => module.AnimalsModule
      ),
    canLoad: [AuthenticateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
