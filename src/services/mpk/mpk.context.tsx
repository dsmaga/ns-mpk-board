import { createContext, useContext } from 'react';
import MpkService from '@/services/mpk/mpk.service';

export const MpkContext = createContext<MpkService>(MpkService.instance);

export const useMpk = () => {
  return useContext<MpkService>(MpkContext);
};

export const MpkProvider = ({ children }: any) => {
  return (
    <MpkContext.Provider value={MpkService.instance}>
      {children}
    </MpkContext.Provider>
  );
};
