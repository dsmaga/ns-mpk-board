import MpkDeparturesDataSource from '@/services/mpk/mpk.departures.data_source';
import { beforeEach, describe, expect, it } from '@jest/globals';

describe('MpkDeparturesDataSource', () => {
  let dataSource: MpkDeparturesDataSource;

  beforeEach(async () => {
    dataSource = new MpkDeparturesDataSource();
  });

  it('should be defined', () => {
    expect(dataSource).toBeDefined();
  });

  it('should return departures', async () => {
    const stopNumber = '11';
    const stopsData = await dataSource.getDepartures(stopNumber);
    expect(stopsData).toBeDefined();
    expect(stopsData).toBeInstanceOf(Array);
    expect(stopsData.length).toBeGreaterThan(0);
    expect(stopsData[0].number).toEqual(stopNumber);
  });
});
