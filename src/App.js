import React, { Component } from 'react';
import './App.css';
import content from './locale/locale';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';

class App extends Component {
  render() {
    content.setLanguage('ka');
    return (
      <div className="app">
        <Header />
        <Section />
        <Footer />
      </div>
    );
  }
}

export default App;
