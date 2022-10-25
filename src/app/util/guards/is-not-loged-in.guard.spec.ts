import { TestBed } from '@angular/core/testing';

import { IsNotLogedInGuard } from './is-not-loged-in.guard';

describe('IsNotLogedInGuard', () => {
  let guard: IsNotLogedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotLogedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
