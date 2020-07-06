import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstalacionesPage } from './instalaciones.page';

describe('InstalacionesPage', () => {
  let component: InstalacionesPage;
  let fixture: ComponentFixture<InstalacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstalacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
