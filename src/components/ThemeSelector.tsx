import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Palette } from "lucide-react";
import { useTheme, type ThemeType } from "@/contexts/ThemeContext";

const ThemeSelector = () => {
  const { currentTheme, setTheme, themes } = useTheme();

  const handleThemeChange = (themeKey: ThemeType) => {
    setTheme(themeKey);
  };

  return (
    <Menubar className={`${themes[currentTheme].styles.nav} border-0`}>
      <MenubarMenu>
        <MenubarTrigger className={`${themes[currentTheme].colors.text} hover:${themes[currentTheme].colors.accent} ${themes[currentTheme].fonts.main}`}>
          <Palette className="mr-2 h-4 w-4" />
          Theme
        </MenubarTrigger>
        <MenubarContent className={`${themes[currentTheme].styles.surface} ${themes[currentTheme].colors.border} border`}>
          {Object.entries(themes).map(([key, theme]) => (
            <MenubarItem
              key={key}
              onClick={() => handleThemeChange(key as ThemeType)}
              className={`${themes[currentTheme].colors.text} hover:${themes[currentTheme].colors.accent} ${themes[currentTheme].fonts.main} ${
                currentTheme === key ? themes[currentTheme].colors.accent : ''
              }`}
            >
              {theme.name}
              {currentTheme === key && <span className="ml-auto">✓</span>}
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeSelector;