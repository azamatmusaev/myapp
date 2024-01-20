import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './componets/form/Form';
import List from './componets/list/List';
import NewComponent from './componets/newComponent/NewComponent';

function App() {
  const [texts, setTexts] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <Form texts={texts} setTexts={setTexts} />
        <List texts={texts} />
        <NewComponent />
      </header>
    </div>
  );
}

export default App;
