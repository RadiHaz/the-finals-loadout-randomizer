import { TestBed } from '@angular/core/testing';

import { ItemRandomizerService } from './item-randomizer.service';

describe('ItemRandomizerService', () => {
  let service: ItemRandomizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemRandomizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
