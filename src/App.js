import React from 'react';
import Button from './components/Button';
import {ThemeProvider} from 'styled-components';
import Theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Button color="default" size="sm">Default</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
