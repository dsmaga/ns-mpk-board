export type StopType = {
  direction: number;
  direction_desc: Record<string, string>;
  id: number;
  latitude: string;
  longitude: string;
  name: string;
  number: string;
  street: string | null;
  stop_line_id: number;
  lines: string[];
};
