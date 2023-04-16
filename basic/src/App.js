import { Component } from 'react';
import './App.css';

function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h1>
        My name is {name}, surname - {surname}
      </h1>
      <a href={link}>My profile</a>
    </div>
  );
}

const Header = () => {
  return <h2>Hello world!</h2>;
};

class Field extends Component {
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px',
    };

    return <input type="text" placeholder={holder} style={styledField} />;
  }
}

const Btn = () => {
  const text = 'Log in';
  const logged = true;
  return <button>{logged ? 'Enter' : text}</button>;
};

function App() {
  return (
    <div className="App">
      <Header />
      <Field />
      <Btn />
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="Alex" surname="Gordon" link="vk.com" />
    </div>
  );
}

export default App;
