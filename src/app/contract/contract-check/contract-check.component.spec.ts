import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractCheckComponent } from './contract-check.component';

describe('ContractCheckComponent', () => {
  let component: ContractCheckComponent;
  let fixture: ComponentFixture<ContractCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
