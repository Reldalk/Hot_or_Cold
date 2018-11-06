import React from 'react';
import NavigationBar from '../nav_bar/nav_bar'
import Body from '../body/body'
import './app.css';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
  };
}

  render() {
    return (
      <div className = "full_page">
        <NavigationBar/>
        <header className = 'header'>HOT or COLD</header>
        <Body />
      </div>
    );
  }
}
