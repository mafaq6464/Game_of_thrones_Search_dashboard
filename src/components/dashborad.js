import React, { useEffect, useState } from "react";

export default function Dashboard (){

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(()=>{
        fetch('https://thronesapi.com/api/v2/Characters')
        .then(response => response.json())
            .then((json) => {
                setData(json)
                setFilteredData(json)
            }
        )
    },[])

    const handleSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = data.filter( val => val.firstName.toLowerCase().includes(value));
        if ( value.length >= 2 ) {
            setFilteredData(result);
        }
        else {
            setFilteredData(data);
        }
    }

    return (
        <>
        <div style={{ display: "flex", flexWrap:"wrap", padding: "50px" }}>
            <div style={{width: "100%" }} >
                <input type="text" onChange={(e) =>handleSearch(e)}  placeholder="enter first name to search" />
            </div>
            { filteredData && filteredData.map(item => 
                <div key={ item.id } style={{ width:"calc(50% - 30px)", boxShadow: "0 0 8px rgba(0,0,0,0.16)", margin: "15px", padding: "15px" }} >
                    <h5>First Name: {item.firstName}</h5>
                    <h5>Last Name: {item.lastName}</h5>
                    <h5>Family Name: {item.family}</h5>
                    <a href="/">Show details</a>
                </div>
            )}
        </div>       
        </>
    );

}