import React from "react"
import ListImage from "../components/Image/ListImage/ListImage"
import Header from "../components/NavHeader/Header/Header"
import {connect} from 'react-redux'
import {fc_increment,fc_decrement} from '../redux/actions'

function Home(props) {
    const handlerCloseOverlay = () => {
        document.getElementsByClassName('overlay')[0].classList.remove('over')
        document.getElementsByClassName('search-list')[0].style.display = 'none'
        document.getElementsByClassName('notify')[0].classList.remove('active')
      }
    const {count} = props.count
    return (
        <div>
            <Header />
            <h1>Count: {count}</h1>
            <button onClick={props.decrement()}>Decrement</button>
            <button onClick={props.increment()}>Increment</button>
            <div className='overlay' onClick={handlerCloseOverlay}></div>
            <div className="main-content">
                <ListImage listImage={props.listImg}></ListImage>
            </div>
        </div>

    )
}
function mapDispatchToProps(dispatch){
    return {
        increment:()=>dispatch(fc_increment),
        decrement:()=>dispatch(fc_decrement),
        count: dispatch.dataApp
    }
}
export default connect(null,mapDispatchToProps)(Home)