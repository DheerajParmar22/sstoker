import { faBed,  faDumbbell,  faPerson, faUtensils,   } from "@fortawesome/free-solid-svg-icons"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import Registeruser from "../../pages/Registeruser/Registeruser";
import { Link } from 'react-router-dom';

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
 

    const [ openOptions, setOpenOptions] = useState(false);
    const [ options, setOptions] = useState({
        adult : 1,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name,operation) => {
        setOptions((prev) => {
            return{
                ...prev,
                [name]:operation === "i" ? options[name] + 1: options[name] -1,
            };
        });
    };

    const handleSearch = ()=>{
        navigate("/hostels", {state:{destination, options}})
    }
    const handleStay = ()=>{
        navigate("/hostels", {state:{destination, options}})
    }
    const handleRest = ()=>{
        navigate("/mess", {state:{destination, options}})
    }
    const handleGym = ()=>{
        navigate("/gyms", {state:{destination, options}})
    }
    

    return(
        <div className="header">
        <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }>
            <div className="headerList">
                <button className="headerListItem active">
                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                <span onClick={handleStay}>Stays</span>
                </button>
                <button className="headerListItem">
                <FontAwesomeIcon icon={faUtensils} className="headerIcon"/>
                <span onClick={handleRest}>Restaurants and Mess</span>
                </button>
                <button className="headerListItem">
                <FontAwesomeIcon icon={faDumbbell} className="headerIcon"/>
                <span onClick={handleGym}>Gyms</span>
                </button>
            </div>
            
                
            
            {type !== "list" && (
            <>
            < h1 className="headerTitle">A lifetime of discounts? Its Genius</h1>
            <p className="headerDesc">
                Get rewarded for your travels - unlock instant savings of 10% or
                20 with a free sstoker account
            </p>

            {/* <div className="headerSearchItem">
                   <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div> */}
            {/* <button className="headerBtn" onClick={Registeruser}>Sign in/Register</button> */}

            <button>
              <Link className = "headerBtn" to="/Registeruser"> Signin or Register</Link>
            </button>

            <div className="headerSearch">
                <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faBed} className="headerIcon"/> 
                   <input
                   type="text"
                   placeholder="Where are you going?" 
                   className="headerSearchInput"
                   onChange={(e) => setDestination(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
                {/* <div className="headerSearchItem">
                   <FontAwesomeIcon icon={faPerson} className="headerIcon"/> 
                   <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{'${<option.adut}adult . ${option.room}room'}</span>
                    {openOptions && (
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("adult","d")}>-</button>
                            <span className="optionCounterNumber">{options.adult}</span>
                            <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"onClick={()=>handleOption("adult","i")}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className="optionText">Rooms</span>
                            <div className="optionCounter">
                            <button 
                            disabled={options.room <= 0}
                            className="optionCounterButton" onClick={()=>handleOption("room","d")}>-</button>
                            <span className="optionCounterNumber">{options.room}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div> */}
                <div className="headerSearchItem">
                   <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            

            </div> </>)}
            </div>
        </div>
    );
};

export default Header