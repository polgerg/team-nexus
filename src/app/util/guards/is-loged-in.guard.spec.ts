import { TestBed } from '@angular/core/testing';

import { IsLogedInGuard } from './is-loged-in.guard';

describe('IsLogedInGuard', () => {
  let guard: IsLogedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsLogedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
