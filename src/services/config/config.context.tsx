import { createContext, useContext, useState } from 'react';
import ConfigService from '@/services/config/config.service';
import { ConfigType } from '@/services/config/config.types';

type ConfigContextType = {
  config: ConfigType;
  setConfig: () => void;
};

export const ConfigContext = createContext<ConfigContextType>({
  config: ConfigService.instance.getConfig(),
  setConfig: () => {},
});

export const useConfig = () => {
  return useContext<ConfigContextType>(ConfigContext);
};

export const ConfigProvider = ({ children }: any) => {
  const [config, _setConfig] = useState(ConfigService.instance.getConfig());
  const setConfig = () => {
    ConfigService.instance.saveConfig();
    _setConfig(ConfigService.instance.getConfig());
  };
  return (
    <ConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};
