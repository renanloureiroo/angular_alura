import { CardModule } from './../../components/card/card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalsRoutingModule } from './animals-routing.module';
import { ListAnimalsComponent } from './list-animals/list-animals.component';
import { AnimalComponent } from './animal/animal.component';
import { PhotosGridAnimalsComponent } from './photos-grid-animals/photos-grid-animals.component';

@NgModule({
  declarations: [ListAnimalsComponent, AnimalComponent, PhotosGridAnimalsComponent],
  imports: [CommonModule, AnimalsRoutingModule, CardModule],
})
export class AnimalsModule {}
