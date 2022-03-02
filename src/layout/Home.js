import React from "react"
import ListImage from "../components/Image/ListImage/ListImage"
import Header from "../components/NavHeader/Header/Header"
import { connect } from 'react-redux'
import { action_light, action_dark } from '../redux/actions'
import "./Home.scss"
function Home(props) {
    const handlerCloseOverlay = () => {
        document.getElementsByClassName('overlay')[0].classList.remove('over')
        document.getElementsByClassName('search-list')[0].style.display = 'none'
        document.getElementsByClassName('notify')[0].classList.remove('active')
    }
    
    return (
        <div className={props.bg ? "light" : "dark"}>
            <Header bg={props.bg} />
            <div className="dark-mode">
                <button className="btn-dark" onClick={props.dark}><img src="image/dark.png" alt="" /></button>
                <button className="btn-light" onClick={props.light}><img src="image/light.png" alt="" /></button>
            </div>

            <div className='overlay' onClick={handlerCloseOverlay}></div>
            <div className="main-content">
                <ListImage listImage={props.listImg}></ListImage>
            </div>
        </div>

    )
}
function mapDispatchToProps(dispatch) {
    return {
        dark: () => dispatch(action_dark()),
        light: () => dispatch(action_light()),
    }
}
const mapStateToProps = state => {
    return { bg: state.dataApp };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)