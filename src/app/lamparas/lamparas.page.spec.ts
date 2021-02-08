import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LamparasPage } from './lamparas.page';

describe('LamparasPage', () => {
  let component: LamparasPage;
  let fixture: ComponentFixture<LamparasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamparasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LamparasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
