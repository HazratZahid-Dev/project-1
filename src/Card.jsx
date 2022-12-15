import React from "react";
import './index.css'

function Cards(props) {
    return (
        <>

            <div className="out-div mt-4">
                <div className="display1">
                    <img src={props.imgsrc} className="margin"></img>
                    <h3 className="mar" ><span >{props.title}</span></h3>
                    <a href={props.btnlinks} target='_blank'><button>Apply</button></a>
                </div>
                



            </div>
        </>
    )

}
export default Cards;