import { TestBed } from '@angular/core/testing';

import { XDialogService } from './x-dialog.service';

describe('XDialogService', () => {
  let service: XDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
