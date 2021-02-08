import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalLamparaPage } from './modal-lampara.page';

describe('ModalLamparaPage', () => {
  let component: ModalLamparaPage;
  let fixture: ComponentFixture<ModalLamparaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalLamparaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalLamparaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
