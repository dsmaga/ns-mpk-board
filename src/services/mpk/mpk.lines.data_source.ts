import { StopType } from '@/services/common/types/stop.type';
import MpkAbstractDataSource from '@/services/mpk/mpk.abstract.data_source';

type ActiveLinesType = {
  lines: LineType[];
};

type LineStopType = {
  direction: 0 | 1;
  id: number;
  latitude: string;
  longitude: string;
  name: string;
  number: string;
  street: string;
  stop_line_id: number;
};

type LineType = {
  desc1: string;
  desc2: string;
  id: number;
  name: string;

  stops: LineStopType[];

  stops1: LineStopType[];
};

export default class MpkLinesDataSource extends MpkAbstractDataSource<ActiveLinesType> {
  public static readonly activeStopsUrl: string =
    'https://www.mpk.nowysacz.pl/wp-json/mpk/v1/timetable/active';

  private stops: StopType[] = [];

  constructor() {
    super(MpkLinesDataSource.activeStopsUrl);
  }

  async getActiveLines(): Promise<ActiveLinesType> {
    return this.getData();
  }

  getLineStops(line: LineType): StopType[] {
    return [...line.stops, ...line.stops1].map((lineStop): StopType => {
      return {
        ...lineStop,
        lines: [line.name],
        direction_desc: {
          [line.name]: line[`desc${lineStop.direction ? '1' : '2'}`]
            .replace(/^([^,]+).*?,\s*([^,]+)$/, '$1 => $2')
            .replace(/^ => $/, ''),
        },
      };
    });
  }

  async getStops(): Promise<StopType[]> {
    if (this.stops.length === 0) {
      const data = await this.getData();
      this.stops = data.lines
        .reduce((acc: StopType[], line) => {
          this.getLineStops(line).forEach((stop: StopType) => {
            const existingStop = acc.find((s: StopType) => s.id === stop.id);
            if (existingStop) {
              existingStop.lines = [
                ...(existingStop.lines || []),
                ...(stop.lines || []),
              ];
              existingStop.direction_desc = {
                ...existingStop.direction_desc,
                ...stop.direction_desc,
              };
            } else {
              acc.push({
                ...stop,
              });
            }
          });
          return acc;
        }, [])
        .sort((a, b) => a.name.localeCompare(b.name));
    }
    return this.stops;
  }
}
