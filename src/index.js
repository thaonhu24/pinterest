import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from 'react-router-dom';
import './index.scss';
<<<<<<< HEAD
import Header from './components/Header'
import ListImage from './components/ListImage';
=======
import Header from './components/NavHeader/Header/Header'
import ListImage from './components/Image/ListImage/ListImage';
>>>>>>> b9b5ebd36607afdb197575e0f79d55b9a40813ce

const handlerCloseOverlay = () => {
  document.getElementsByClassName('overlay')[0].classList.remove('over')
  document.getElementsByClassName('search-list')[0].style.display = 'none'
  document.getElementsByClassName('notify')[0].classList.remove('active')
}
ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
=======
  <BrowserRouter>
    <React.StrictMode>
>>>>>>> b9b5ebd36607afdb197575e0f79d55b9a40813ce
      <Header />
      <div className='overlay' onClick={handlerCloseOverlay}></div>
      <div className="main-content">
        <ListImage></ListImage>
      </div>
<<<<<<< HEAD
  </React.StrictMode>,    
=======
    </React.StrictMode>
  </BrowserRouter>,
>>>>>>> b9b5ebd36607afdb197575e0f79d55b9a40813ce
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

