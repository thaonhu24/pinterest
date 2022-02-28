import React from "react"
import './ImageItem.scss'
import SaveButton from '../../SaveButton/SaveButton'
function Image(props) {

    return (
        <div className="img-card">
            <SaveButton></SaveButton>
            <img key={props.id} src={props.src} alt="" />
        </div>
    )
}
export default Image