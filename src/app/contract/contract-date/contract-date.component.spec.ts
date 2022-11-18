import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDateComponent } from './contract-date.component';

describe('ContractDateComponent', () => {
  let component: ContractDateComponent;
  let fixture: ComponentFixture<ContractDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
