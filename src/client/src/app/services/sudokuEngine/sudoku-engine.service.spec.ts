import { TestBed } from '@angular/core/testing';

import { SudokuEngineService } from './sudoku-engine.service';

describe('SudokuEngineService', () => {
  let service: SudokuEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SudokuEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
