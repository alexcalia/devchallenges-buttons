import React from 'react';
import Button from './components/Button';
import {ThemeProvider} from 'styled-components';
import Theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Button color="secondary">Test</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
