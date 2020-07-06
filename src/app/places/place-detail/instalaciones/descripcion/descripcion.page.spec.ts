import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescripcionPage } from './descripcion.page';

describe('DescripcionPage', () => {
  let component: DescripcionPage;
  let fixture: ComponentFixture<DescripcionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescripcionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
