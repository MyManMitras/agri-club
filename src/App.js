import React, { Component } from 'react';
import './App.css';
import content from './locale/locale';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';
import _ from 'lodash';

const screens = [
  'home', 'history', 'programs', 'commingEvents', 'members', 'gallery', 'contactUs'
];
class App extends Component {
  render() {
    content.setLanguage('ka');
    return (
      <div className="app">
        <Header screens={screens} selectedScreen={_.head(screens)} />
        <Section selectedScreen={_.head(screens)}/>
        <Footer />
      </div>
    );
  }
}

export default App;
