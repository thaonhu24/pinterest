import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/NavHeader/Header/Header'
import ListImage from './components/Image/ListImage/ListImage';


// const listImage=[
//   {
//     'id':1,
//     'src':'https://i.pinimg.com/236x/cd/ec/69/cdec6973e816aedb03629d518b2f64cb.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':2,
//     'src':'https://i.pinimg.com/236x/63/ba/e2/63bae22db577f75afde9f39758b058d8.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':3,
//     'src':'https://i.pinimg.com/236x/04/3c/a1/043ca13b7859646e4805503e8f0f7128.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':4,
//     'src':'https://i.pinimg.com/236x/2e/91/65/2e91650b9cc9e4d71a11d616c47bccdf.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':5,
//     'src':'https://i.pinimg.com/236x/d1/8a/d7/d18ad7d62a8358c75f6df3bd3213faee.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':6,
//     'src':'https://i.pinimg.com/236x/55/9d/64/559d644e747cef1c94ed8c5857aa9695.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':7,
//     'src':'https://i.pinimg.com/236x/77/72/b3/7772b3a308d2e3ed1d92747b578ee3e4.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':8,
//     'src':'https://i.pinimg.com/236x/e7/36/d9/e736d9dcc243d0ddd77fecfab1b542b6.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':9,
//     'src':'https://i.pinimg.com/236x/55/9d/64/559d644e747cef1c94ed8c5857aa9695.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':10,
//     'src':'https://i.pinimg.com/236x/b7/84/41/b7844167c9e3d7703031d6a82690afb3.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
//   {
//     'id':11,
//     'src':'https://i.pinimg.com/236x/ad/5a/f5/ad5af58e3638a9e9398d12404fd10959.jpg',
//     'title':'Images By Oanh Nguyen On Kawaii Wallpaper In 2021 F0C'
//   },
// ]
const handlerCloseOverlay=()=>{
  document.getElementsByClassName('overlay')[0].classList.remove('over')
  document.getElementsByClassName('search-list')[0].style.display='none'
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

