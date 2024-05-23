import { StopType } from '@/services/common/types/stop.type';

export type ConfigProfileType = {
  uuid: string;
  name: string;
  stops: StopType[];
};

export type ConfigType = {
  profiles: ConfigProfileType[];
  currentProfile: string;
};
