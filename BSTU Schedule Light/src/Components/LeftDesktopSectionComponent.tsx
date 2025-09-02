import React from "react";
import CalendarComponent from "./CalendarComponent";
import CardComponent from "./CardComponent";

const LeftSectionComponent:React.FC = () =>{
    return (
        <aside>
            <CalendarComponent/>
            <div className="CardsContainer">
                <CardComponent/>
            </div>
        </aside>
    )
}

export default LeftSectionComponent;