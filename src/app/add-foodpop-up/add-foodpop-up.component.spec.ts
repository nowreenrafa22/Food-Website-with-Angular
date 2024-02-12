import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodpopUpComponent } from './add-foodpop-up.component';

describe('AddFoodpopUpComponent', () => {
  let component: AddFoodpopUpComponent;
  let fixture: ComponentFixture<AddFoodpopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFoodpopUpComponent]
    });
    fixture = TestBed.createComponent(AddFoodpopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
