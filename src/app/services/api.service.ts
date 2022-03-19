import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Payload from '../models/Payload';
import { environment } from 'src/environments/environment';

@Injectable()
export class FootballService {
  constructor(private http: HttpClient) {}

  /* Team	List all teams for a particular competition.	/v2/competitions/{id}/teams	season={YEAR} stage={STAGE}

	equipos por competicion https://api.football-data.org/v2/competitions/2000/teams */

  public getAllCompetition() {
    return this.http.get<Payload<any>>(
      `${environment.apiFootballUrl}/competitions`,
      {
        headers: {
          'X-Auth-Token': `${environment.apiKey}`,
        },
        responseType: 'json',
      }
    );
  }

  /* 
  
  Team	List all teams for a particular competition.	filters season={YEAR} stage={STAGE}

  */

  public getAllTeamsByCompetition(id: number) {
    return this.http.get<Payload<any>>(
      `${environment.apiFootballUrl}/competitions/${id}/teams`,
      {
        headers: {
          'X-Auth-Token': `${environment.apiKey}`,
        },
        responseType: 'json',
      }
    );
  }

  /* 

	Team	Show one particular team.
  
  */

  public getByTeam(id: number) {
    return this.http.get<Payload<any>>(
      `${environment.apiFootballUrl}/teams/${id}`,
      {
        headers: {
          'X-Auth-Token': `${environment.apiKey}`,
        },
        responseType: 'json',
      }
    );
  }
}
