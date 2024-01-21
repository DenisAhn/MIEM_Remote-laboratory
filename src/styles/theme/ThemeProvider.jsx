import { CssBaseline } from '@mui/material';
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider, } from '@mui/material/styles';
import * as React from 'react';
import { DEFAULT_THEME } from 'config/theme';
import { createCustomShadows } from './customShadows';
import { GlobalStyles } from './global';
import componentsOverride from './overrides';
import { createPalette } from './palette';
import { createShadows } from './shadows';
import { TYPOGRAPHY_CONFIG } from './typography';
export default function ThemeProvider({ children }) {
    const themeOptions = React.useMemo(() => ({
        typography: TYPOGRAPHY_CONFIG,
        shape: { borderRadius: 8 },
        shadows: createShadows(DEFAULT_THEME),
        customShadows: createCustomShadows(DEFAULT_THEME),
        direction: 'ltr',
        palette: createPalette(DEFAULT_THEME),
    }), []);
    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);
    return (<StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>);
}
