import { describe, expect, it } from '@jest/globals';
import MpkService from '@/services/mpk/mpk.service';

describe('MpkService', () => {
  const service: MpkService = MpkService.instance;

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return stops for select', async () => {
    const stops = await service.getStopsForSelect('Zielona');
    expect(stops).toBeDefined();
    console.log(stops);
  });
});
