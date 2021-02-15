import React from 'react';
import Button from './components/Button';
import {ThemeProvider} from 'styled-components';
import Theme from './themes/theme';

const App = () => {
  console.log(Theme.primary.bgcolors.main)
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Button variant="outline">Test</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
