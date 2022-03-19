import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AllCompetitionsComponent } from './all-competitionscomponent';
import { AllTeamsModule } from 'src/app/pages/all-teams/all-teams.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllTeamsModule
  ],
  declarations: [AllCompetitionsComponent],
  exports: [AllCompetitionsComponent]
})
export class AllCompetitionsModule {}
