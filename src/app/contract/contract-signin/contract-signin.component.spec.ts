import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSigninComponent } from './contract-signin.component';

describe('ContractSigninComponent', () => {
  let component: ContractSigninComponent;
  let fixture: ComponentFixture<ContractSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
