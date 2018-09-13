import React, { Component } from 'react';
import './App.css';
import content from './locale/locale';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Section from './components/section/section';
import _ from 'lodash';
import ReactDOM from 'react-dom';

const screens = [
  'home', 'officeBearers', 'programs', 'facilities', 'gallery', 'members', 'contactUs'
];
class App extends Component {

  state = {
    showMobileHeaderList: false,
    selectedScreen: _.head(screens),
    selectedScreenForHeader: _.head(screens),
    hideFooter: false
  };
  changeLanguage() {
//    if(content.getLanguage() === 'en'){
//      content.setLanguage('ka');
//    }
//    else {
      content.setLanguage('en');
//    }
//	window.localStorage.setItem('lang', content.getLanguage());
//    this.forceUpdate();
  }
  handleScroll() {
    var currentScreenIndex = 0;
    var self = this;
    _.forEach(screens, function(screen, index){
      var section = ReactDOM.findDOMNode(self.refs.section.refs[screen]);
      if(section.offsetTop <= window.scrollY && window.scrollY <= (section.offsetTop+section.offsetHeight)){
        currentScreenIndex = index;
      }
    });
    this.setState({
      selectedScreenForHeader: screens[currentScreenIndex]
    });
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillMount() {
    var lang = window.localStorage.getItem('lang');
    lang = 'en';
	  if(!lang) {
		lang = 'en';
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
    selectedScreenForHeader: screen,
		selectedScreen: screen,
		showMobileHeaderList: !this.state.showMobileHeaderList
	  });
  }

  disableFooter(flag) {
    this.setState({hideFooter: flag});
  }
  getFooter() {
    if(!this.state.hideFooter){
      return (
        <Footer changeLanguage={this.changeLanguage.bind(this)} />
      );
    } else {
      return null;
    }
  };

  getAppClassName() {
    var className = "app"
    if(!window.isMobile) {
      className += " desktop-app"
    }

    return className;
  };
  render() {
    return (
      <div className={this.getAppClassName()}>
        <Header screens={screens} selectedScreen={this.state.selectedScreenForHeader} 
          changeScreen={this.changeScreen.bind(this)}
          toogleMobileHeader={this.toogleMobileHeader.bind(this)}/>
        <Section screens={screens} changeScreen={this.changeScreen.bind(this)} disableFooter={this.disableFooter.bind(this)}
		      selectedScreen={this.state.selectedScreen} showHeaders={this.state.showMobileHeaderList} ref="section"/>
        {this.getFooter()}
      </div>
    );
  }
}

export default App;