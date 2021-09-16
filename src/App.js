import React, { useEffect, useState } from "react";
import './App.css';
import Dashboard from './components/dashborad';
import Detail from './components/details';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

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

    const resetSearch = () => {
      setFilteredData(data);
    }

    return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/">
                <Dashboard filteredData={filteredData} handleSearch={handleSearch} />
              </Route>
              <Route path="/detail/:id">
                <Detail filteredData={filteredData} resetSearch={resetSearch} />
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }

export default App;