import React from 'react';
import GlobalStyles from './styles/GlobalStyles.styles';
import { Wrapper } from './styles/GlobalStyles.styles';
import Navbar from './Components/Navbar';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Wrapper>
        <Navbar />
        <Header />
      </Wrapper>
    </div>
  );
}

export default App;