import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { AllTeamsPage } from './all-teams.page';

describe('AllTeamsPage', () => {
  let component: AllTeamsPage;
  let fixture: ComponentFixture<AllTeamsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTeamsPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AllTeamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create all-teams page', () => {
    expect(component).toBeTruthy();
  });
});
