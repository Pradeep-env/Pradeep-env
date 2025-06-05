import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ThemeType = 'normal' | 'cod' | 'linux' | 'planets' | 'ocean';

interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
    border: string;
  };
  fonts: {
    main: string;
    heading: string;
  };
  styles: {
    container: string;
    card: string;
    button: string;
    nav: string;
    surface: string;
  };
}

const themes: Record<ThemeType, Theme> = {
  normal: {
    name: 'Professional',
    colors: {
      primary: 'text-blue-600',
      secondary: 'text-gray-600',
      accent: 'text-blue-500',
      background: 'bg-white',
      surface: 'bg-gray-50',
      text: 'text-gray-900',
      muted: 'text-gray-500',
      border: 'border-gray-200',
    },
    fonts: {
      main: 'font-sans',
      heading: 'font-bold',
    },
    styles: {
      container: 'bg-white',
      card: 'bg-white border border-gray-200 rounded-lg shadow-sm',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
      nav: 'bg-white/90 backdrop-blur-sm border-b border-gray-200',
      surface: 'bg-gray-50',
    },
  },
  cod: {
    name: 'Call of Duty',
    colors: {
      primary: 'text-orange-500',
      secondary: 'text-gray-400',
      accent: 'text-orange-500',
      background: 'bg-black',
      surface: 'bg-gray-900',
      text: 'text-gray-300',
      muted: 'text-gray-400',
      border: 'border-orange-500/30',
    },
    fonts: {
      main: 'font-mono',
      heading: 'font-mono font-bold',
    },
    styles: {
      container: 'bg-black',
      card: 'bg-black border-2 border-orange-500/30 rounded-lg',
      button: 'bg-orange-500 text-black hover:bg-orange-600 font-mono',
      nav: 'bg-black/90 backdrop-blur-md border-b border-orange-500/30',
      surface: 'bg-gray-900',
    },
  },
  linux: {
    name: 'Linux Terminal',
    colors: {
      primary: 'text-green-400',
      secondary: 'text-gray-400',
      accent: 'text-green-500',
      background: 'bg-black',
      surface: 'bg-gray-900',
      text: 'text-green-300',
      muted: 'text-gray-500',
      border: 'border-green-500/30',
    },
    fonts: {
      main: 'font-mono',
      heading: 'font-mono font-bold',
    },
    styles: {
      container: 'bg-black',
      card: 'bg-gray-900 border border-green-500/30 rounded',
      button: 'bg-green-500 text-black hover:bg-green-600 font-mono',
      nav: 'bg-black/90 backdrop-blur-sm border-b border-green-500/30',
      surface: 'bg-gray-800',
    },
  },
  planets: {
    name: 'Space Explorer',
    colors: {
      primary: 'text-purple-400',
      secondary: 'text-gray-300',
      accent: 'text-purple-500',
      background: 'bg-slate-900',
      surface: 'bg-slate-800',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      border: 'border-purple-500/30',
    },
    fonts: {
      main: 'font-sans',
      heading: 'font-bold',
    },
    styles: {
      container: 'bg-slate-900',
      card: 'bg-slate-800 border border-purple-500/30 rounded-xl',
      button: 'bg-purple-600 hover:bg-purple-700 text-white',
      nav: 'bg-slate-900/90 backdrop-blur-md border-b border-purple-500/30',
      surface: 'bg-slate-700',
    },
  },
  ocean: {
    name: 'Ocean Depths',
    colors: {
      primary: 'text-cyan-400',
      secondary: 'text-blue-300',
      accent: 'text-cyan-500',
      background: 'bg-blue-950',
      surface: 'bg-blue-900',
      text: 'text-blue-100',
      muted: 'text-blue-300',
      border: 'border-cyan-500/30',
    },
    fonts: {
      main: 'font-sans',
      heading: 'font-bold',
    },
    styles: {
      container: 'bg-blue-950',
      card: 'bg-blue-900 border border-cyan-500/30 rounded-lg',
      button: 'bg-cyan-600 hover:bg-cyan-700 text-white',
      nav: 'bg-blue-950/90 backdrop-blur-md border-b border-cyan-500/30',
      surface: 'bg-blue-800',
    },
  },
};

interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  setTheme: (theme: ThemeType) => void;
  themes: Record<ThemeType, Theme>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('normal');

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      theme: themes[currentTheme],
      setTheme,
      themes,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};