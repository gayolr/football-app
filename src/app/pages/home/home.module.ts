import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { AllCompetitionsModule } from 'src/app/components/all-teams/all-competitions.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    HomePageRoutingModule,
    AllCompetitionsModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
