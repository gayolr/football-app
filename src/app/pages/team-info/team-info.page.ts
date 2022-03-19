import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/api.service';
import { TeamInterface } from './team.interface';

@Component({
  selector: 'app-team-info',
  templateUrl: 'team-info.page.html',
  styleUrls: ['team-info.page.scss'],
  providers: [FootballService],
})
export class TeamInfoPage implements OnInit {
  constructor(protected footballService: FootballService) {}

  team: TeamInterface;

  filterByTeam(id: number) {
    this.footballService.getByTeam(id).subscribe((data: any) => {
      localStorage.setItem('teamData', JSON.stringify(data));
    });
  }

  ngOnInit() {
    this.team = JSON.parse(localStorage.getItem('teamData'));
  }
}
