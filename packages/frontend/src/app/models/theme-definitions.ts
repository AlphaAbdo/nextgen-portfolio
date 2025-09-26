// Theme definitions with separated modes and color themes
export interface ThemeMode {
  id: string;
  name: string;
  description: string;
  background: {
    primary: [string, string];  // Start and end colors for gradient
    secondary: string;
    overlay: string;
    glass: string;
    glassHover: string;
  };
  text: {
    primary: string;
    secondary: string;
    muted: string;
  };
}

export interface ColorTheme {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
  };
}

export interface CompleteTheme {
  id: string;
  name: string;
  description: string;
  mode: ThemeMode;
  colors: ColorTheme;
}

// Available modes
export const THEME_MODES: ThemeMode[] = [
  {
    id: 'dark',
    name: 'Dark',
    description: 'Deep, professional dark theme',
    background: {
      primary: ['#0a2a28ff', '#3a261aff'],  // Start and end colors for gradient
      secondary: '#1a2a3a',
      overlay: 'rgba(10, 26, 42, 0.9)',
      glass: 'rgba(255, 255, 255, 0.1)',
      glassHover: 'rgba(255, 255, 255, 0.15)'
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      muted: '#999999'
    }
  },
  {
    id: 'light',
    name: 'Light',
    description: 'Clean, bright light theme',
    background: {
      primary: ['#FAF9F6ff', '#61685aff'],  // Start and end colors for gradient
      secondary: '#a2a2a2ff',
      overlay: 'rgba(248, 249, 250, 0.9)',
      glass: 'rgba(0, 0, 0, 0.05)',
      glassHover: 'rgba(0, 0, 0, 0.08)'
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
      muted: '#adb5bd'
    }
  }
];

// Available color themes
export const COLOR_THEMES: ColorTheme[] = [
  {
    id: 'default',
    name: 'Default',
    description: 'Classic blue professional theme',
    colors: {
      primary: '#4058d3',
      primaryLight: '#5a6dd8',
      primaryDark: '#2d4bb5',
      secondary: '#a43f49',
      secondaryLight: '#b85861',
      secondaryDark: '#8b2e38'
    }
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Cool blue-green theme',
    colors: {
      primary: '#2196f3',
      primaryLight: '#42a5f5',
      primaryDark: '#1976d2',
      secondary: '#009688',
      secondaryLight: '#26a69a',
      secondaryDark: '#00796b'
    }
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm orange theme',
    colors: {
      primary: '#ff6b35',
      primaryLight: '#ff8a65',
      primaryDark: '#e64a19',
      secondary: '#ffc107',
      secondaryLight: '#ffca28',
      secondaryDark: '#ff8f00'
    }
  },
  {
    id: 'royal',
    name: 'Royal',
    description: 'Elegant purple theme',
    colors: {
      primary: '#7c4dff',
      primaryLight: '#9c6ade',
      primaryDark: '#5c35cc',
      secondary: '#e91e63',
      secondaryLight: '#f06292',
      secondaryDark: '#c2185b'
    }
  }
  ,
  {
    id: 'auto',
    name: 'Auto',
    description: 'Reactive animated hue that wanders the spectrum over time',
    colors: {
      // placeholders; ThemeService will override these at runtime
      primary: '#ff6b35',
      primaryLight: '#ff8a65',
      primaryDark: '#e64a19',
      secondary: '#ffc107',
      secondaryLight: '#ffca28',
      secondaryDark: '#ff8f00'
    }
  }
];

// Combined theme combinations
export const THEME_COMBINATIONS: CompleteTheme[] = [];

// Generate all combinations
THEME_MODES.forEach(mode => {
  COLOR_THEMES.forEach(colorTheme => {
    THEME_COMBINATIONS.push({
      id: `${colorTheme.id}-${mode.id}`,
      name: `${colorTheme.name} ${mode.name}`,
      description: `${colorTheme.description} in ${mode.name.toLowerCase()} mode`,
      mode,
      colors: colorTheme
    });
  });
});

export type ThemeId = typeof THEME_COMBINATIONS[number]['id'];
