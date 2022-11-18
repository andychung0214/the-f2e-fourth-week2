import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTextComponent } from './contract-text.component';

describe('ContractTextComponent', () => {
  let component: ContractTextComponent;
  let fixture: ComponentFixture<ContractTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
