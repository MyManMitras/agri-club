import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'material-icons/css/material-icons.min.css';
import './utils/device-detect';

ReactDOM.render(<App />, document.getElementById('root'));
if(!window.isMobile){
    window.addEventListener('resize', function() {
        window.location.reload();
    });
}
registerServiceWorker();
