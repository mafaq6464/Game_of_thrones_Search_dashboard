import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard (props){

    return (
        <>
        <div style={{ display: "flex", flexWrap:"wrap", padding: "50px" }}>
            <div style={{width: "100%" }} >
                <input type="text" onChange={(e) => props.handleSearch(e)}  placeholder="enter first name to search" />
            </div>
            { props.filteredData && props.filteredData.map(item => 
                <div key={ item.id } style={{ width:"calc(50% - 30px)", boxShadow: "0 0 8px rgba(0,0,0,0.16)", margin: "15px", padding: "15px" }} >
                    <h5>First Name: {item.firstName}</h5>
                    <h5>Last Name: {item.lastName}</h5>
                    <h5>Family Name: {item.family}</h5>
                    <Link to={`/detail/${item.id}`}>Show More</Link> 
                </div>
            )}
        </div>  
        </>
    );

}