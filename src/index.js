import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header'
import ListImage from './components/ListImage';

const handlerCloseOverlay = () => {
  document.getElementsByClassName('overlay')[0].classList.remove('over')
  document.getElementsByClassName('search-list')[0].style.display = 'none'
  document.getElementsByClassName('notify')[0].classList.remove('active')
}
ReactDOM.render(
  <React.StrictMode>
      <Header />
      <div className='overlay' onClick={handlerCloseOverlay}></div>
      <div className="main-content">
        <ListImage></ListImage>
      </div>
  </React.StrictMode>,    
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

