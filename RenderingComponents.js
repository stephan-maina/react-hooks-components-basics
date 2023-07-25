himport React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Button from './Button';

const App = () => {
  return (
    <div>
      <Header title="Welcome to My Website" />
      <Button label="Click Me" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
