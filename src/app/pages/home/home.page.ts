import { Component, OnInit } from '@angular/core';
import { FootballService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [FootballService],
})
export class HomePage implements OnInit {
  allCompetitionsData: any[];
  filterCompetitionsBySeason: any[];
  isInputValid: boolean;
  isFilter: boolean;

  constructor(protected footballService: FootballService) {}

  searchValid(event) {
    const numbers = /[0-9]|\./;
    if (
      event.target.value &&
      event.target.value.length === 4 &&
      event.target.value.match(numbers)
    ) {
      this.isInputValid = true;
    } else {
      this.isInputValid = false;
    }
  }

  getAllCompetition() {
    this.footballService.getAllCompetition().subscribe((data: any) => {
      localStorage.setItem('allSeasonData', JSON.stringify(data.competitions));
    });
  }

  filterCompetitionBySeason(event: any) {
    this.isFilter = true;
    if (!this.isInputValid) {
      return;
    }
    this.allCompetitionsData = JSON.parse(
      localStorage.getItem('allSeasonData')
    );
    this.filterCompetitionsBySeason = Object.values(
      this.allCompetitionsData
    ).filter(function (item) {
      if (
        item?.currentSeason?.startDate !== null &&
        item?.currentSeason?.startDate !== undefined
      ) {
        const yearCompetition = new Date(
          item.currentSeason.startDate
        ).getFullYear();
        return yearCompetition == event.target.value;
      }
    });

    /*

      Filter to free API Leagues?

      .filter(function (item) {
        let teamsValid: string[] = [
          'FIFA World Cup',
          'UEFA Champions League',
          'Bundesliga',
          'Eredivisie',
          'Campeonato Brasileiro Série A',
          'Primera Division',
          'Ligue 1',
          'Championship',
          'Primeira Liga',
          'European Championship',
          'Serie A',
          'Premier League',
          'Copa Libertadores',
        ];
        return teamsValid.some((team) => team.includes(item.name));
      }); */
  }

  ngOnInit() {
    this.getAllCompetition();
  }
}
