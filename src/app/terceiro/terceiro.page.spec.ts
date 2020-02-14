import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerceiroPage } from './terceiro.page';

describe('TerceiroPage', () => {
  let component: TerceiroPage;
  let fixture: ComponentFixture<TerceiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerceiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
