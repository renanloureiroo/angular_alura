import { HttpClientModule } from '@angular/common/http';
import { MessageModule } from './../../components/message/message.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeRoutingModule } from './home-routing.module';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, NewUserComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    HttpClientModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
