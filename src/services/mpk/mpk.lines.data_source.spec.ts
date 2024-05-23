import { beforeEach, describe, expect, it } from '@jest/globals';
import MpkLinesDataSource from '@/services/mpk/mpk.lines.data_source';

describe('MpkLinesDataSource', () => {
  let dataSource: MpkLinesDataSource;

  beforeEach(async () => {
    dataSource = new MpkLinesDataSource();
  });

  it('should be defined', () => {
    expect(dataSource).toBeDefined();
  });

  it('should return active lines', async () => {
    const activeLinesData = await dataSource.getActiveLines();
    expect(activeLinesData).toBeDefined();
    expect(activeLinesData.lines).toBeDefined();
    expect(activeLinesData.lines.length).toBeGreaterThan(0);
    expect(activeLinesData.lines[0]).toBeDefined();
    expect(activeLinesData.lines[0].id).toBeDefined();
    expect(activeLinesData.lines[0].name).toBeDefined();
  });

  it('should return stops', async () => {
    const stops = await dataSource.getStops();
    expect(stops).toBeDefined();
    expect(stops.length).toBeGreaterThan(0);
    expect(stops[0]).toBeDefined();
  });
});
