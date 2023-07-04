import { ThemeContext } from "@/contexts/themes-context";
import { useContext } from "react";

function useTheme() {
  return useContext(ThemeContext);
};

export default useTheme;