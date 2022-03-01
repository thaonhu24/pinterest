import React from "react"
import ListImage from "../components/Image/ListImage/ListImage"
import Header from "../components/NavHeader/Header/Header"
import {connect} from 'react-redux'
import {fc_increment,fc_decrement} from '../redux/action'

function Home(props) {
    const handlerCloseOverlay = () => {
        document.getElementsByClassName('overlay')[0].classList.remove('over')
        document.getElementsByClassName('search-list')[0].style.display = 'none'
        document.getElementsByClassName('notify')[0].classList.remove('active')
      }
        
    return (
        <div>
            <Header />
            <div className='overlay' onClick={handlerCloseOverlay}></div>
            <div className="main-content">
                <ListImage listImage={props.listImg}></ListImage>
            </div>
        </div>

    )
}
export default Home