import React, { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { getTheme, Theme } from './globalVariables'
import { useDarkMode } from './useDarkMode'

interface ThemeProviderProps {
  children: ReactNode;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const isDarkMode = useDarkMode()

  return (
    <StyledThemeProvider theme={getTheme(isDarkMode)}>
      {children}
    </StyledThemeProvider>
  );
};
