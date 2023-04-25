import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./gymList.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import GymSearchItem from "../../components/GymSearchItem/GymSearchItem";

const MessList =() =>{


    const location = useLocation();
    const [destination,setDestination] = useState(location.state.destination);
    const [options,setOptions] = useState(location.state.options);

    
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="glistContainer">
                <div className="glistWrapper">
                    <div className="glistSearch">
                        <h1 className="glsTitle">Search</h1>
                        <div className="glsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="glsItem">
                            <label>Options</label>
                            <div className="glsOptions">

                            <div className="glsOptionItem">
                                <span className="glsOptionText">
                                    Min price <small>per month</small>
                                </span>
                                <input type="number" min ={1} className="glsOptionInput"/>
                            </div>
                            <div className="glsOptionItem">
                                <span className="glsOptionText">
                                    Max price <small>per month</small>
                                </span>
                                <input type="number" min ={1}  className="glsOptionInput"/>
                            </div>
                            <div className="glsOptionItem">
                                <span className="glsOptionText">
                                    Adults
                                </span>
                                <input type="number" min ={1} className="glsOptionInput" placeholder={options.adult}/>
                            </div>
                        </div>
                        <button>Search</button>
                        </div>
                    </div>
                    <div className="glistResult">
                        <GymSearchItem/>
                        <GymSearchItem/>
                        <GymSearchItem/>
                        <GymSearchItem/>
                        <GymSearchItem/>
                        <GymSearchItem/>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessList;