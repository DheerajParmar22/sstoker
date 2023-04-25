import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./messList.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MessSearchItem from "../../components/MessSearchItem/MessSearchItem";

const MessList =() =>{


    const location = useLocation();
    const [destination,] = useState(location.state.destination);
    const [options,] = useState(location.state.options);

    
    return(
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="mlistContainer">
                <div className="mlistWrapper">
                    <div className="mlistSearch">
                        <h1 className="mlsTitle">Search</h1>
                        <div className="mlsItem">
                            <label>Destination</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="mlsItem">
                            <label>Options</label>
                            <div className="mlsOptions">

                            <div className="mlsOptionItem">
                                <span className="mlsOptionText">
                                    Min price <small>per month</small>
                                </span>
                                <input type="number" min ={1} className="mlsOptionInput"/>
                            </div>
                            <div className="mlsOptionItem">
                                <span className="mlsOptionText">
                                    Max price <small>per month</small>
                                </span>
                                <input type="number" min ={1}  className="mlsOptionInput"/>
                            </div>
                            <div className="mlsOptionItem">
                                <span className="mlsOptionText">
                                    Adults
                                </span>
                                <input type="number" min ={1} className="mlsOptionInput" placeholder={options.adult}/>
                            </div>
                            <div className="mlsOptionItem">
                                <span className="mlsOptionText">
                                    Table
                                </span>
                                <input type="number" min ={1} className="mlsOptionInput" placeholder={options.room}/>
                            </div>
                        </div>
                        <button>Search</button>
                        </div>
                    </div>
                    <div className="mlistResult">
                        <MessSearchItem/>
                        <MessSearchItem/>
                        <MessSearchItem/>
                        <MessSearchItem/>
                        <MessSearchItem/>
                        <MessSearchItem/>
                        <MessSearchItem/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessList;