import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AllCompetitionsComponent } from './all-teams/all-competitions.component';
import { FootballService } from '../services/api.service';
import * as mockFilterCompetition from '../mocks/competitions.json';
import { environment } from 'src/environments/environment';

describe('TeamInfoPage', () => {
  let component: AllCompetitionsComponent;
  let fixture: ComponentFixture<AllCompetitionsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AllCompetitionsComponent],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterTestingModule,
        ],
        providers: [FootballService],
      }).compileComponents();

      fixture = TestBed.createComponent(AllCompetitionsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create all-competitions component', () => {
    expect(component).toBeTruthy();
  });

  it('jobs should be undefined', () => {
    expect(component.competitions).toBe(undefined);
  });

  /* describe('FootballService', () => {
    let injector: TestBed;
    let service: FootballService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [FootballService],
      });

      injector = TestBed.get(HttpClientTestingModule);
      service = injector.get(FootballService);
      httpMock = injector.get(HttpTestingController);
    });

    afterEach(() => {
      httpMock.verify();
    });
    it('getAllTeamsByCompetition() should return data', () => {
      service.getAllTeamsByCompetition(2021).subscribe((res: any) => {
        expect((res)).toEqual(mockFilterCompetition);
      });

      const req = httpMock.expectOne(`${environment.apiFootballUrl}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockFilterCompetition);
    });
  }); */
});
