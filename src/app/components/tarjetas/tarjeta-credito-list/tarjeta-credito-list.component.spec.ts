import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaCreditoListComponent } from './tarjeta-credito-list.component';

describe('TarjetaCreditoListComponent', () => {
  let component: TarjetaCreditoListComponent;
  let fixture: ComponentFixture<TarjetaCreditoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaCreditoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaCreditoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
