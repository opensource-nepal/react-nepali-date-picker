import { useState } from 'react';
import { Button } from 'subashcs-react-date-picker';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <h1>Nepali Date Picker</h1>
      <div className="card">
        <Button
          className="btncolor"
          title={`Tick tick: ${count}`}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>
      <p className="read-the-docs">Coming Soon .....</p>
    </div>
  );
}

export default App;
