import MpkAbstractDataSource from '@/services/mpk/mpk.abstract.data_source';

type DeparturesStopItemType = {
  li: string; // line
  di: string; // direction
  de: string; // time to departure
};

type DeparturesStopType = {
  nm: string; // name
  nr: string; // stop number
  sd: DeparturesStopItemType[]; // stop data
};

type DeparturesType = {
  st: DeparturesStopType[]; // stops
  ct: string; // current time
};

export type DeparturesFlatType = {
  name: string;
  number: string;
  direction: string;
  line: string;
  departure: string;
  timeToDeparture: number;
};

export default class MpkDeparturesDataSource extends MpkAbstractDataSource<DeparturesType> {
  public static readonly departuresUrl: string =
    'https://www.mpk.nowysacz.pl/jsonStops/stops.json';

  constructor() {
    super(MpkDeparturesDataSource.departuresUrl);
  }

  async getDepartures(...stopNumbers: string[]): Promise<DeparturesFlatType[]> {
    const data = await this.getData();
    const currentTime = new Date().getTime();
    return data.st
      .filter((stop) => stopNumbers.includes(stop.nr))
      .reduce((acc: DeparturesFlatType[], stop) => {
        stop.sd?.forEach((item) => {
          acc.push({
            name: stop.nm,
            number: stop.nr,
            direction: item.di,
            line: item.li,
            departure: item.de,
            timeToDeparture: this.timeToDeparture(currentTime, item.de),
          } as DeparturesFlatType);
        });
        return acc;
      }, [] as DeparturesFlatType[])
      .sort((a, b) => a.timeToDeparture - b.timeToDeparture);
  }

  async getFreshDepartures(
    ...stopNumbers: string[]
  ): Promise<DeparturesFlatType[]> {
    await this.fetchData();
    return this.getDepartures(...stopNumbers);
  }

  private timeToDeparture(currentTime: number, departure: string): number {
    if (departure === '>>') {
      return currentTime;
    } else if (departure.match(/^\d+min/)) {
      return currentTime + parseInt(departure) * 60 * 1000;
    } else if (departure.match(/^\d+:\d+$/)) {
      const [hours, minutes] = departure.split(':').map((x) => parseInt(x));
      const departureTime = new Date(currentTime);
      departureTime.setHours(hours);
      departureTime.setMinutes(minutes);
      return departureTime.getTime();
    } else {
      // should not happen
      return currentTime;
    }
  }
}
