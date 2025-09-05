import React from 'react';
import GlobalStyles from './styles/GlobalStyles.styles';
import { Wrapper } from './styles/GlobalStyles.styles';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Wrapper>
        <Navbar />
      </Wrapper>
    </div>
  );
}

export default App;