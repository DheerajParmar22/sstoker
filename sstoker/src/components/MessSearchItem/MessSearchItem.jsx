import "./messSearchItem.css"
import im1 from "../../SVG/dining room -1.jpg"
import {useNavigate} from "react-router-dom";
import { useState } from "react";

const SearchItem = () => {
    const navigate = useNavigate();
    const [destination] = useState("");
    const handleAvail = ()=>{
        navigate("/mess/:messid", {state:{destination}})
    }
  return (
    <div className="messsearchItem">
        <img src={im1} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Dhanraj Mess</h1>
            <span className="msiDistance">500m from center</span>
            <span className="msiSubtitle">
                Mess with homemade food
            </span>
            <span className="msiCancelOp">Free cancellation</span>
            <span className="msiCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="msiDetails">
            <div className="msiRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="msiDetailsText">
                <span className="msiPrice">Rs. 1123/ month</span>
                <span className="msiTaxiOp">Includes taxes and fees</span>
                
            </div>
            <button className="msiCheckButton" onClick={handleAvail}>See availabilty</button>
        
        </div>
    </div>
  )
}

export default SearchItem