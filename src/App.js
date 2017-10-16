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

  state = {
    showMobileHeaderList: false,
	selectedScreen: _.head(screens)
  };
  changeLanguage() {
    if(content.getLanguage() === 'ka'){
      content.setLanguage('en');
    }
    else {
      content.setLanguage('ka');
    }
	window.localStorage.setItem('lang', content.getLanguage());
    this.forceUpdate();
  }

  componentWillMount() {
	  var lang = window.localStorage.getItem('lang');
	  if(!lang) {
		lang = 'ka';
		window.localStorage.setItem('lang', lang);
	  }
    content.setLanguage(lang);
  }
  toogleMobileHeader() {
    this.setState({
      showMobileHeaderList: !this.state.showMobileHeaderList
    });
  }
  changeScreen(screen) {
	  this.setState({
		selectedScreen: screen,
		showMobileHeaderList: !this.state.showMobileHeaderList
	  });
  }
  render() {
    return (
      <div className="app">
        <Header screens={screens} selectedScreen={this.state.selectedScreen} 
          changeScreen={this.changeScreen.bind(this)}
          toogleMobileHeader={this.toogleMobileHeader.bind(this)}/>

        <Section screens={screens} changeScreen={this.changeScreen.bind(this)}
		selectedScreen={this.state.selectedScreen} showHeaders={this.state.showMobileHeaderList}/>

        <Footer changeLanguage={this.changeLanguage.bind(this)} />
      </div>
    );
  }
}

export default App;
