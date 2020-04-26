import React from 'react';
import ReactDOM from 'react-dom';
import DownloadClicker from './components/DownloadClicker.jsx';

const wrapper = document.getElementById('download-root');
wrapper
  ? ReactDOM.render(<DownloadClicker />, wrapper)
  : false;