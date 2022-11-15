import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingMbComponent } from './loading-mb.component';

describe('LoadingMbComponent', () => {
  let component: LoadingMbComponent;
  let fixture: ComponentFixture<LoadingMbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingMbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
