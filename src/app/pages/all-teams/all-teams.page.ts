import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FootballService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-teams',
  templateUrl: 'all-teams.page.html',
  styleUrls: ['all-teams.page.scss'],
  providers: [FootballService],
})
export class AllTeamsPage implements OnInit {
  constructor(
    protected footballService: FootballService,
    private router: Router
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  teams: { competition: any; season: any; teams: any };

  filterByTeam(id: number) {
    this.footballService.getByTeam(id).subscribe((data: any) => {
      localStorage.setItem('teamData', JSON.stringify(data));
      this.router.navigateByUrl('/team-info');
    });
  }

  ngOnInit() {
    this.teams = JSON.parse(localStorage.getItem('allTeamsData'));
  }
}
