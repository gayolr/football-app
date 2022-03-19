import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamInfoPage } from './team-info.page';

describe('TeamInfoPage', () => {
  let component: TeamInfoPage;
  let fixture: ComponentFixture<TeamInfoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamInfoPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create team-info page', () => {
    expect(component).toBeTruthy();
  });
});
