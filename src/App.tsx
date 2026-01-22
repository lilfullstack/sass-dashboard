/**
 * COMPONENT
 */
import { ThemeProvider } from "@/components/ThemeProvider";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div>App</div>
    </ThemeProvider>
  );
}