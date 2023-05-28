import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridFieldComponent } from './grid-field.component';

describe('GridFieldComponent', () => {
  let component: GridFieldComponent;
  let fixture: ComponentFixture<GridFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
