import { DetailsAnimalComponent } from './details-animal/details-animal.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAnimalsComponent } from './list-animals/list-animals.component';

const routes: Routes = [
  {
    path: '',
    component: ListAnimalsComponent,
  },
  {
    path: ':id',
    component: DetailsAnimalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsRoutingModule {}
