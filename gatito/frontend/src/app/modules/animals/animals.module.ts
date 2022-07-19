import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from './../../components/card/card.module';
import { AnimalComponent } from './animal/animal.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { PhotosGridAnimalsComponent } from './photos-grid-animals/photos-grid-animals.component';
import { DetailsAnimalComponent } from './details-animal/details-animal.component';

@NgModule({
  declarations: [
    ListAnimalsComponent,
    AnimalComponent,
    PhotosGridAnimalsComponent,
    DetailsAnimalComponent,
  ],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
