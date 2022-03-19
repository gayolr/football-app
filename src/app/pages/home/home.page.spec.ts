import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        imports: [IonicModule.forRoot(), HttpClientTestingModule],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create home page', () => {
    expect(component).toBeTruthy();
  });

  it('should enter a value', () => {
    const ionInput =
      fixture.nativeElement.getElementsByTagName('ion-searchbar');
    ionInput[0].value = 2021;
    expect(ionInput[0].value).toEqual('2021');
  });
});
