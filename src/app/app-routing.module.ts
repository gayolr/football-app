import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'all-teams',
    loadChildren: () =>
      import('./pages/all-teams/all-teams.module').then((m) => m.AllTeamsModule),
  },
  {
    path: 'team-info',
    loadChildren: () =>
      import('./pages/team-info/team-info.module').then((m) => m.TeamInfoModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
