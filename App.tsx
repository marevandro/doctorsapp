import { ThemeProvider } from 'styled-components/native';
import { Home } from './src/screens/Home';
import dark from './src/themes/dark';

import light from './src/themes/light';

export default function App() {
  return (  
    <ThemeProvider theme={dark}>
        <Home/>
    </ThemeProvider>
  );
}