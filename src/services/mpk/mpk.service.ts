import MpkDeparturesDataSource, {
  DeparturesFlatType,
} from '@/services/mpk/mpk.departures.data_source';
import MpkLinesDataSource from '@/services/mpk/mpk.lines.data_source';
import { StopType } from '@/services/common/types/stop.type';

export default class MpkService {
  private static _instance: MpkService;
  private readonly departuresDataSource: MpkDeparturesDataSource;
  private readonly stopsDataSource: MpkLinesDataSource;

  private constructor() {
    this.departuresDataSource = new MpkDeparturesDataSource();
    this.stopsDataSource = new MpkLinesDataSource();
  }

  static get instance() {
    if (!MpkService._instance) {
      MpkService._instance = new MpkService();
    }
    return MpkService._instance;
  }

  async getStopsForSelect(search?: string): Promise<Record<string, string>> {
    let stops = await this.stopsDataSource.getStops();
    if (search) {
      stops = stops.filter((stop) =>
        `${stop.name} ${stop.street}`
          .toLowerCase()
          .includes(search.toLowerCase()),
      );
    }
    return stops.reduce(
      (acc, stop) => {
        const direction_desc: string[] = [];
        for (const key in stop.direction_desc) {
          direction_desc.push(
            `${key}${stop.direction_desc[key] ? ': ' + stop.direction_desc[key] : ''}`,
          );
        }
        acc[stop.number] = `${stop.name} (${direction_desc.join(', ')})`;
        return acc;
      },
      {} as Record<string, string>,
    );
  }

  async getStopById(stopId: string): Promise<StopType | undefined> {
    const stops = await this.stopsDataSource.getStops();
    const stop = stops.find((stop) => stop.number === stopId);
    console.log(stop);
    return stop;
  }

  async getDepartures(...stopNumbers: string[]): Promise<DeparturesFlatType[]> {
    return this.departuresDataSource.getFreshDepartures(...stopNumbers);
  }
}
