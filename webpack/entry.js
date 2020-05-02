import React from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <div className="App">
      <p>Hello World!</p>
    </div>
  );
};

export default App;

render(<App />, document.getElementById('root'));