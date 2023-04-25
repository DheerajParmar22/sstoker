import "./gymSearchItem.css"
import im1 from "../../SVG/download.jpg"
import {useNavigate} from "react-router-dom";
import { useState } from "react";

const GymSearchItem = () => {
    const navigate = useNavigate();
    const [destination] = useState("");
    const handleWork = ()=>{
        navigate("/mess/:messid", {state:{destination}})
    }
  return (
    <div className="gsearchItem">
        <img src={im1} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Gold gym</h1>
            <span className="gsiDistance">500m from center</span>
            <span className="gsiSubtitle">
            “Strength does not come from physical capacity. ...
            </span>
            <span className="gsiCancelOp">Free cancellation</span>
            <span className="gsiCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="gsiDetails">
            <div className="gsiRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="gsiDetailsText">
                <span className="gsiPrice">Rs. 500/ month</span>
                <span className="gsiTaxiOp">Includes taxes and fees</span>
                {/* <button className="gsiCheckButton">See availabilty</button> */}
            </div>
            <button className="gsiCheckButton" onClick={handleWork} >See availabilty</button>
        
        </div>
    </div>
  )
}

export default GymSearchItem