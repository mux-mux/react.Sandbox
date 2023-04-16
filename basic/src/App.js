import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
    };
  }

  nextYear = () => {
    console.log('+++');
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <h1>
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
        <br />
        <button onClick={this.nextYear}>{this.state.text}</button>
      </div>
    );
  }
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
