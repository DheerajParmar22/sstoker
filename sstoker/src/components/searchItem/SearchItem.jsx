import "./searchItem.css"
import im2 from "../../SVG/CIT-139-1024x678.jpg"
import {useNavigate} from "react-router-dom";
import { useState } from "react";

const SearchItem = () => {
    const navigate = useNavigate();
    const [destination] = useState("");
    const handleMess = ()=>{
        navigate("/hostel/:id", {state:{destination}})
    }
  return (
    <div className="searchItem">
        <img src={im2} alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Dhanraj Hostel</h1>
            <span className="siDistance">500m from center</span>
            <span className="siSubtitle">
                Hostel with attach Bathroom
            </span>
            <span className="siFeatures">
                Entire room . 1 Bathroon . 21 sq.m 2 full bed
            </span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailsText">
                <span className="siPrice">Rs. 123</span>
                <span className="siTaxiOp">Includes taxes and fees</span>
                
            </div>
            <button className="siCheckButton"  onClick={handleMess}>See availabilty</button>
        </div>
    </div>
  )
}

export default SearchItem
