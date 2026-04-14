import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroModel } from './hero.model';

describe('HeroModel', () => {
  let component: HeroModel;
  let fixture: ComponentFixture<HeroModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroModel],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
