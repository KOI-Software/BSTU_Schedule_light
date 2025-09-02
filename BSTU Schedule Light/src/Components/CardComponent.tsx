import React from "react";
//import { type ICardComponent } from "../Helpers/Interfaces";

const CardComponent:React.FC = ()=>{
    return (
        <div className="Card">
            <div className="TimeSide">
                <p id="start-time">08:00</p>
                <p>-</p>
                <p id="end-time">09:25</p>
            </div>
            <div className="ContentSide">

            </div>
        </div>
    )
}

export default CardComponent;