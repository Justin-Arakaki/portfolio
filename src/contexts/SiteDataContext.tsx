import { createContext } from 'react';
import { Children, createUseContext } from '../utils/contextConstructor';
import siteData from '../constants/siteData';

const SiteDataContext = createContext<typeof siteData | null>(null);

export const useSiteData = createUseContext(SiteDataContext, siteData);

export function SiteDataProvider({ children }: Children) {
  return (
    <SiteDataContext.Provider value={siteData}>
      {children}
    </SiteDataContext.Provider>
  );
}
