import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCompetitionsComponent } from 'src/app/components/all-teams/all-competitionscomponent';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '',
    component: AllCompetitionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
