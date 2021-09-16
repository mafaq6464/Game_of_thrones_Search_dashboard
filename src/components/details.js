import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = (props) => {

    const { id } = useParams();    

    const data = props.filteredData;

    return (
        <>
        <h3>ID: {id}</h3>
        { data.filter( (val) => val.id === parseInt(id) )
            .map(item => (
                <div key={ item.id } style={{ width:"calc(50% - 30px)", boxShadow: "0 0 8px rgba(0,0,0,0.16)", margin: "15px", padding: "15px" }} >
                    <img src={item.imageUrl} alt={item.image} /> 
                    <h5>First Name: {item.firstName}</h5>
                    <h5>Last Name: {item.lastName}</h5>
                    <h5>Family Name: {item.family}</h5>
                    <Link onClick={props.resetSearch} to={`/`}>Back To Dashboard</Link> 
                </div>
            )
        )}
        </>
  )
  };

  export default Detail;