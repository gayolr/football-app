import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { FootballService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-competitions',
  templateUrl: 'all-competitions.component.html',
  styleUrls: ['all-competitions.component.scss'],
  providers: [FootballService],
})
export class AllCompetitionsComponent {
  constructor(
    protected footballService: FootballService,
    public toastController: ToastController,
    private router: Router
  ) {}

  @Input() competitions: any[];

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'Not available for this version.',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }

  filterAllTeams(id: number) {
    this.footballService.getAllTeamsByCompetition(id).subscribe(
      (data: any) => {
        localStorage.setItem('allTeamsData', JSON.stringify(data));
        this.router.navigateByUrl('/all-teams');
      },
      (error) => {
        this.errorToast();
      }
    );
  }
}
