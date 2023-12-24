import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericanFoodpageComponent } from './american-foodpage.component';

describe('AmericanFoodpageComponent', () => {
  let component: AmericanFoodpageComponent;
  let fixture: ComponentFixture<AmericanFoodpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmericanFoodpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmericanFoodpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
